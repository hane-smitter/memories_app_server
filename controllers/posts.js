import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.json(postMessages);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}
export const createPost = async (req, res) => {
    const post = req.body;
    console.log(post);
    try {
        const newPostMessage = new PostMessage(post);
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}