type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        github: string;
    };
};

export const siteConfig: SiteConfig = {
    name: "Scarlet's Blog",
    description:
        "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
    url: "https://truclam-blog.vercel.app/",
    ogImage: "https://truclam-blog.vercel.app/og",
    links: {
        twitter: "https://twitter.com",
        github: "https://github.com",
    },
};