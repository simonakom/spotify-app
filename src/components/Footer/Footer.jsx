function Footer() {
    return (
        <div className="footer-background text-white flex justify-between items-center min-h-[6%] px-4 pt-3 pb-2   min-w-[800px] overflow-hidden">
            <div>
                <p className="text-sm font-medium">Preview of Spotify</p>
                <p className="font-light">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div>
                <a href="/" className="inline-block">
                    <button className="bg-[#ffffff] text-[#101010] rounded-full font-semibold hover:scale-105 whitespace-nowrap px-5 py-2 md:px-8 md:py-3 shadow-md mx-5 footer-button">Sign up free</button>
                </a>        
            </div>
        </div>
    );
}
export default Footer;