// api/config.js
export const config = {
    runtime: 'edge'
};

export default async function handler(request) {
    return new Response(
        JSON.stringify({
            HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || ''
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS'
            }
        }
    );
}
