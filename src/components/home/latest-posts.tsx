import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
    let latestPosts = getBlogPosts();
    return (
        <>
            <h1 className="inline-block font-heading text-3xl tracking-tight lg:text-4xl">
                Recently Published
            </h1>
            {latestPosts
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <article key={post.slug} className="text-wrap max-w-md my-10 lg:text-lg">
                        <div className="flex justify-between items-center">
                            <Link href={`/blog/${post.metadata.category}/${post.slug}`} className="flex-grow">
                                <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
                                    {post.metadata.title}
                                </h3>
                            </Link>
                            <p className="text-xs text-muted-foreground ml-3">
                                {formatDate(post.metadata.publishedAt)}
                            </p>
                        </div>
                        <p className="leading-8 my-5 mt-1 text-sm lg:text-base">
                            {post.metadata.summary}
                        </p>
                    </article>


                    

                ))}
        </>
    );
}