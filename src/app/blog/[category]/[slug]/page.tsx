import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { BreadcrumbWithCustomSeparator } from "@/components/BreadCrum";

export default function Page({ params }: { params: { category: string, slug: string } }) {
    let posts = getBlogPosts().find(post => post.metadata.category === params.category && post.slug === params.slug);

    if (!posts) {
        notFound();
    }

    return (
        <Header >
            <Container>
                <BreadcrumbWithCustomSeparator category={params.category} slug={params.slug} />
                <h1 className="title font-semibold text-xl tracking-wider mt-4 uppercase">
                    {posts.metadata.title}
                </h1>
                <div>
                    <p className="text-muted-foreground text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                        {formatDate(posts.metadata.publishedAt)}
                    </p>
                </div>

            </Container>
            <Container>
                <article className="prose">
                    {/* <CustomMDX/> */}
                </article>

            </Container>
        </Header>
    )
}