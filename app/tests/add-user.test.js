import request from 'supertest';
import app from '../app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('User controller', () => {
    
    beforeAll(async () => {
        await prisma.user.deleteMany({});
    });

    afterAll(async() => {
        await prisma.$disconnect();
    });

    it('Should create a user successfully with valid data', async () => {
        const response = await request(app)
        .post('/api/users')
        .send({
            username: 'UserSample',
            password: '123456'
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Login success');
        expect(response.body.user).toHaveProperty('username', 'UserSample');
    })
})