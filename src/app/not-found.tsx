import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="grid place-content-center h-screen text-center">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                404 - Page Not Found
            </h1>
            <p className="mb-4 text-center">This page you are looking for does not exist.</p>
            <div className="flex justify-center">
                <Button className="w-1/3 dark:bg-white">
                    <Link href={"/"}>
                        Go Home.
                    </Link>
                </Button>
            </div>
        </section>
    );
}