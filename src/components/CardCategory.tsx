import { formatDate } from "@/app/blog/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function CardCategory({
    title,
    summary,
    date,
}: {
    title: string;
    summary: string;
    date: string;
}) {
    return (
        <Card className="w-[350px] h-[290px] shadow-2xl">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base">{summary}</p>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-gray-500">{formatDate(date)}</p>
            </CardFooter>
        </Card>
    );
}   