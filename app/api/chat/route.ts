import { type UIMessage } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const backendUrl = process.env.BETTERAGENTS_BACKEND_URL;
        if (!backendUrl) throw new Error('BETTERAGENTS_BACKEND_URL is not defined in environment variables');

        // Connect to the NanoBot Docker backend
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`NanoBot backend failed with status ${response.status}`);
        }

        const data = await response.json();

        // Format the response for your ChatArea component
        return new Response(JSON.stringify({
            id: Date.now().toString(),
            role: 'assistant',
            content: data.response || data.message || 'No response'
        }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Proxy Error:', error);
        return new Response(JSON.stringify({ error: 'Backend unreachable' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}