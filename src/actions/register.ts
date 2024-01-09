'use server';

import { MessageType } from "@/components/messages";
import { db } from "@/lib/db";
import { RegisterSchema, type RegisterType } from "@/schemas";
import bcrypt from 'bcrypt';

export async function register(data: RegisterType) {
    const validatedData = RegisterSchema.safeParse(data);

    if (!validatedData.success) {
        return {
            type: 'error' as MessageType, content: 'Invalid fields.'
        }
    }

    const { username, email, password } = validatedData.data;

    const possibleUser = await db.user.findUnique({ where: { email }});

    if (possibleUser) { 
        return { type: 'error' as MessageType, content: 'Email taken.' }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({ data: {
        name: username, email, password: hashedPassword
    }});

    return {
        type: 'info' as MessageType,
        content: 'User created!'
    }
}