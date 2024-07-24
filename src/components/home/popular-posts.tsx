import { Skeleton } from "@/components/ui/skeleton"
import useSWR from "swr"
import { fetcher } from "@/lib/utils"
import { popularPosts } from "@/lib/placeholder-data"
import {Icons} from "@/components/icons"

export default function PopularPosts() {
    return (
        <ul className="overflow-auto">
            {
                popularPosts.map((post) => (
                    <li key={post.title} className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:scale-101 transition-all">
                        <div className="flex items-center space-x-4 ">
                            <Icons.arrowRight className="w-6 h-6 border-gray-200" />
                            <div>
                                <h3>{post.title}</h3>
                            </div>
                        </div>
                    </li>
                ))
            }

        </ul>



    )
}