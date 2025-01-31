// api/config.js
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Handle GET request
    if (req.method === 'GET') {
        return res.status(200).json({
            HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || ''
        });
    }

    // Handle invalid methods
    return res.status(405).json({ message: 'Method not allowed' });
}
