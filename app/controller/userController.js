import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validasi data (optional)
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });

        const token = req.token;

        res.status(201).json({
            message: 'Login success',
            apiKey: 111,
            token: req.token,
            user: user
        });
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