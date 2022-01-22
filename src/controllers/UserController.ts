import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Alex', email: 'diego@rocketseat.com.br'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendEmail({
            to: {
                name: 'Alex Conder', 
                email: 'alex.v.conder@gmail.com'
            },
            message: {
                subject: 'Bem vindo', 
                body: 'Seja bem vindo'
            }
        });

        return res.send();
    }
}