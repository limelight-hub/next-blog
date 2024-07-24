// import { categories } from "@/lib/placeholder-data";
import { Button } from "../ui/button";
import Link from "next/link";
import { POSTS } from "@/lib/constants";

export default function TopCatogories() {
    return (
        <div className="grid grid-cols-2 gap-2">
            {POSTS.map((post) => (
                <Button
                    key={post.title}
                    variant={"ghost"}
                    className="hover:scale-110 transition-all"
                    asChild 
                >
                    <Link href={post.href}>{post.title}</Link>
                </Button>
            ))}
        </div>
    );
}