import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

// Check if API key exists
if (!process.env.REACT_APP_GEMINI_API_KEY) {
    console.error('REACT_APP_GEMINI_API_KEY is not set in environment variables');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' })

app.post('/api/define', async (req, res) => {
    try {
        // Validate request body
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is required' });
        }

        const { word } = req.body;
        console.log("Received Word: ", word)

        if (!word) {
            return res.status(400).json({ error: 'Word is required' });
        }

        const prompt = `Explain this word "${word}" in a detailed paragraph within 50-100 unique words.`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text()
        console.log("Generated definition:", text)
        res.json({ definition: text });
    } catch (error) {
        console.error('Gemini API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch definition' });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...!`)
})