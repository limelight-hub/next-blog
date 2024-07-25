import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/main-nav";
import Container from "@/components/Container";
import TopCategories from "@/components/home/top-categories";
import PopularPosts from "@/components/home/popular-posts";


export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen sticky top-0">  
          <div>
            <h1 className="font-bold mb-4 text-center">TOP CATEGORIES</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4 text-center">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );  
}
