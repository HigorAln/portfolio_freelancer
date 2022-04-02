import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

interface IForm {
	name: string;
	email: string;
	message: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		return res.status(400).json({ error: 'Method not accepted' });
	}
	const { name, email, message }: IForm = req.body;

	if (
		typeof name !== 'string' ||
		typeof email !== 'string' ||
		typeof message !== 'string'
	) {
		return res.status(400).json({ error: 'Invalid form data' });
	}

	const createdMessage = await prisma.message.create({
		data: {
			name,
			email,
			message,
		},
	});

	return res.status(201).json(createdMessage);
}
