"use client";

// import { POSTS } from "@/lib/constants";
import { Icons } from "./icons";
// import Link from "next/link";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { createSubscriber } from "@/lib/actions";
// import { useFormState } from "react-dom";

export default function Footer() {
    const initialState = { message: "", errors: {} };
    // const [state, dispatch] = useFormState(createSubscriber, initialState);
    return (
        <footer className="bg-gray-100 py-8 dark:bg-gray-950 mt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Icons.logo className="h-6 w-6" />
                            <span className="text-md font-semibold">Scarlet&apos;s Blog</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Stay Up to Date with the latest news and insights from our blog.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Icons.github className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}