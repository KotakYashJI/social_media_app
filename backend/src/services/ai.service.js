import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyDs5UNYw6kAKpgERX9a36DyyD5tcKf19dw"
});

export const textfromimage = async (base64ImageFile) => {
    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64ImageFile,
            },
        }
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
            systemInstruction: [
                "text in one line",
                "text should clean and effective",
                "make text for socailmedia post",
                "use emoji and hastags",
                "response only in one line",
                "add all the right information"
            ],
        },
    });

    return response.text;
}