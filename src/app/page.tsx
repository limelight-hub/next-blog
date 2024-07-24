import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <>
      <MainNav />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <LatestPosts />
      </main>
    </>
  );
}
