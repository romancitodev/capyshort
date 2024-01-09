'use server';

import { MessageType } from "@/components/messages";
import { LoginSchema, type LoginType } from "@/schemas";

export async function login(data: LoginType) {
    const validatedData = LoginSchema.safeParse(data);

    if (!validatedData.success) {
        return {
            type: 'error' as MessageType, content: 'Invalid fields.'
        }
    }
}
