export default function handler(req, res) {
    res.status(200).json({
        HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY
    });
}
