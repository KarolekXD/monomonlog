import { get } from '@vercel/edge-config';

export const config = { runtime: 'edge' };

export default async function handler() {
    const message = await get('message');
    return new Response(JSON.stringify({ message }), { 
        headers: { 'Content-Type': 'application/json' } 
    });
}
