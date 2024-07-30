//  marks a door from server to client. like a <script> tag.
'use client'

import { headers } from "next/headers";
import { useEffect } from "react";

export default function ReportViews(slug: string, title: string, category: string) {

    useEffect(() => {
        const postData = async () => {
            try {
                await fetch(fetchURL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    }
                    body: JSON.stringify({slug, title, category
                    })
                })
            } catch (error) {
                console.log(error);
            }
        }



    }, []);


    return (
        <div>
            <h1>Report Views</h1>
        </div>

    );
}