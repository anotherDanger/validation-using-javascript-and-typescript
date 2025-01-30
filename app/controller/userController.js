import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try{
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
            });

            res.status(201).json({
                message: 'Login success',
                apiKey: 111,
                token: req.token,
                user: user
            });
        }catch(error)
        {
            if(error.code === 'P2002')
            {
                console.error('Username already taken!');
                res.status(500).json({message: 'Username already taken!'});
            }else{
                console.error('Another error');
                return;
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create user', error });
    }
};

export const getAllUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Internal error', error});
    }
}