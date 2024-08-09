"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

export default function Chatbox() {


    const [prompt, setprompt] = useState("");
    const [promptreply, setpromptreply] = useState("Hello, AI Nikhil to the service. ✨🚀");

    const placeholders = [
        "What are the major projects Nikhilesh has worked on?",
        "Who is Nikhilesh Rana?",
        "What Technologies are Nikhilesh into?",
        "Does Nikhilesh Know React?",
        "How old is Nikhilesh?",
    ];

    useEffect(() => {
        // Log the state whenever it updates
        console.log("Updated promptreply:", promptreply);
    }, [promptreply]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setprompt(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("Sending the Prompt Accordingly.");
            const response = await axios.post("/api/chatbot", { prompt });
            console.log("Response data:", response.data.message);
            setpromptreply(response.data.message);

        } catch (error) {
            console.error('Error sending prompt:', error);
            // You might want to update the state here to show an error message to the user
        }
    };

    return (
        <>
            <div className="h-fit w-full flex flex-col justify-center items-center px-4">
               
                <PlaceholdersAndVanishInput 
                    placeholders={placeholders} 
                    onChange={handleChange} 
                    onSubmit={onSubmit} 
                />
            </div>

            <div className='h-full w-full'>
                <TextGenerateEffect className='p-5 w-full' key={promptreply} duration={2} filter={false} words={promptreply}/>
            </div>
        </>
    );
}
