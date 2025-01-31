// api/config/index.js
const handler = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    // Return API key
    res.json({
        HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || ''
    });
};

module.exports = handler;
