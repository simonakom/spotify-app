function Footer() {
    return (
        <div className="footerBacground text-white flex flex-row md:flex-row justify-between items-center min-h-[6%] px-4 pt-3 pb-2">
            <div>
                <p className="text-sm font-medium">Preview of Spotify</p>
                <p className="font-light">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div>
                <a href="https://www.spotify.com/it/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F" className="inline-block">
                    <button className="bg-[#ffffff] text-[#101010] rounded-full font-semibold hover:scale-105 whitespace-nowrap px-5 py-2 md:px-8 md:py-3 shadow-md">Sign up free</button>
                </a>        
            </div>
        </div>
    );
}
export default Footer;