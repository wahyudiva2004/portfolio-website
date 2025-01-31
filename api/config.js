// api/config.js
const { config } = require('@vercel/edge');

module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Return API key
    res.json({
        HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || ''
    });
};
