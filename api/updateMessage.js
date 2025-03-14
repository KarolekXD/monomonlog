import { update } from '@vercel/edge-config';

export const config = { runtime: 'edge' };

export default async function handler(req) {
    const { message } = await req.json();
    await update({ message: message });
}
