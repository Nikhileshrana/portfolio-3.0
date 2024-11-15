import { NextResponse, NextRequest } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { stringify } from "querystring";
import myinfo from "@/data/myinfo.json";


export async function POST(req: NextRequest) {

    try {
        
        const apiKey = process.env.GEMINI_API_KEY || "";
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const { prompt } = await req.json();
        const message = myinfo.msgtogpt;
        const finalprompt = `${message} => ${prompt}`;

        const result = await model.generateContent(finalprompt);

        const response = await result.response;

        const text = await response.text();

        console.log(text);
    
        return NextResponse.json({ message: text });

    }
    catch (error) { console.log("error"); }

    return NextResponse.json({ error: "An error occurred" });

}