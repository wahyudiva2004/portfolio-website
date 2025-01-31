// api/config.js
export default async function handler(req, res) {
    try {
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Content-Type', 'application/json');

        // Return API key
        return res.status(200).json({
            HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || ''
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to load API key' });
    }
}
