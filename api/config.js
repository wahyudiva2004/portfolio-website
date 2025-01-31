// api/config.js
module.exports = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Return the API key
    res.json({
        HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY
    });
};
