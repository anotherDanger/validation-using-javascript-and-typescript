import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
export const generateJWT = (req, res, next) => {
    const {username} = req.body;

    const payload = {
        username: username
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1h'});
    req.token = token;
    res.setHeader('Authorization', `Bearer ${token}`);
    return next();
};

export const verifyJWT = (req, res, next) =>
{
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if(!token) {
        return res.status(401).json({message: 'Token is required'});
    };

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;

        next();
    }catch(error)
    {
        console.error(error);
        return res.status(400).json({message: 'Bad request'});
    }
}