import { Icons } from "./icons";
export default function Footer() {
    return (
        <footer className="text-white p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <div className="flex items-center">
                            <Icons.flower className="w-8 h-8" />
                            <span className="ml-2">Scarlet's Blog</span>
                        </div>
                        <p className="textt-sm">Stay Up to Date with news and insights from our blog </p>
                    </div>
                    <div>
                        <h3 className="font-bold">Contact</h3>
                        <p>Get in touch with us</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Social</h3>
                        <p>Follow us on social media</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}