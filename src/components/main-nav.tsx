"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ui/mode-toggle"

const posts: { title: string; href: string; description: string }[] = [
    {
        title: "React",
        href: "/blog/react",
        description:
            "A JavaScript library for building user interfaces, often used for building single-page applications.",
    },
    {
        title: "Javascript",
        href: "/blog/javascript",
        description:
            "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
    },
    {
        title: "Progress",
        href: "/blog/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "CSS",
        href: "/blog/css",
        description: "A stylesheet language used to describe the presentation of a document written in HTML.",
    },
    {
        title: "Performance",
        href: "/blog/performance",
        description:
            "The extent to which a system accomplishes its tasks within a given time frame.",
    },
    {
        title: "Animation",
        href: "/docs/animation",
        description:
            "A method in which pictures are manipulated to appear as moving images.",
    },
]

export function MainNav({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between scroll-pt-1 z-50 sticky top-0",
                className
            )}
        >
            <Link href={"/"}>
                <div className="flex items-center justify-between w-16">
                    <Icons.logo className="h-5 w-5" />
                    <p>Blog</p>
                </div>
            </Link>



            <NavigationMenu className="items-center justify-between p-2">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        {/* <NavigationMenuTrigger>Getting started</NavigationMenuTrigger> */}
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            {/* <Icons.logo className="h-6 w-6" /> */}
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components built with Radix UI and
                                                Tailwind CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {posts.map((post) => (
                                    <ListItem
                                        key={post.title}
                                        title={post.title}
                                        href={post.href}
                                    >
                                        {post.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />

                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/rss">
                            <Icons.rss className="h-5 w-5 ml-1" />
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
