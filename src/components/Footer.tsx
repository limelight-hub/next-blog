export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <h3 className="font-bold">About</h3>
                        <p>Scarlet's Blog</p>
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