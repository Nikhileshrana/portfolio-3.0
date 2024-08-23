import { NextResponse, NextRequest } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { stringify } from "querystring";


export async function POST(req: NextRequest) {

    try {
        
        const apiKey = process.env.GEMINI_API_KEY || "";
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const { prompt } = await req.json();
        const message = "You are AI Nikhil,The answer shall only be in paragraph form with maximum of 50 Words. You have to answer only what is required. you are an AI that has been built by Nikhilesh Rana Born on 31 May 2003 from India. He is into Coding and Astronomy . He likes watching stars and developing code that is reliable and looks good. he loves Next.js and how it Helps in Backend and Frontend. He has an experience of more than 1+ year in Full Stack Development. He is a Butterscotch Coffee person. He likes being in his own place. But is open for Opportunities in The domain of Frontend Developer, FullStack Developer and Software Developer. He is into Technology Next.js , React.js , Express.js , MongoDB , HTML , CSS , TAILWIND CSS  , Javascript.  , C++. and Provides Support of NEXTAUTH , Graph Representation , Ulitimate UI library like ShadCN , Debugging . He was club president in his college , He won Science Olympiad in 2023 . His Contact info is -> realnikhileshrana@gmail.com . He can relocate anywhere if required by the company . He did Bachelors in Technology in computer science from Atal Bihari Vajpayee Government Institute of Engineering and Technology. Shimla. 171202. to view his resume  follow the steps-> Click Back -> Download CV. this is his github profile link -> github.com/nikhileshrana , linkedin-> www.linkedin.com/in/nikhileshrana . Now answer question based on this prompt. Now i will ask question so be ready my question is =>";

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