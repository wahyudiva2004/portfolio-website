const config = {
    HUGGING_FACE_API_KEY: typeof process !== 'undefined' && process.env ? 
        process.env.HUGGING_FACE_API_KEY : 
        '' // Fallback untuk development
};
