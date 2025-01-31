// api/config.js
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Return API key for GET requests
    if (req.method === 'GET') {
        return res.status(200).json({
            HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || ''
        });
    }

    // Handle invalid methods
    return res.status(405).json({ error: 'Method not allowed' });
};
