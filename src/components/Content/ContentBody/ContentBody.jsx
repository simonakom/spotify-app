import SongCard from "./SongCard/SongCard";
// import Hits from "../../../assets/images/hits.jpg"
// import Calming from "../../../assets/images/calming.jpg"
// import Pop from "../../../assets/images/pop.jpg"
// import Lofi from "../../../assets/images/lofi.jpg"
// import Indie from "../../../assets/images/indie.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function ContentBody() {
	const songsArray = [
		{
			title: "Happy Hits!!",
			description: "Hits to boost your mood and fill you with happiness!",
      // src: Hits,
			src: process.env.PUBLIC_URL + 'hits.jpg',
			link: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
		},
		{ 
			title: "Calming Acoustic",
			description: "Keep calm with instrumental acoustic tracks.",
      src: process.env.PUBLIC_URL + 'calming.jpg',
			link: "https://open.spotify.com/playlist/37i9dQZF1DXaImRpG7HXqp"
		},
		{
			title: "Pop Rising",
			description: "Who's now and next in pop. Cover: Victoria Monét",
      src: process.env.PUBLIC_URL + 'pop.jpg',
			link: "https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk"
		},
		{
			title: "lofi chill",
			description:"Lazy slow lofi beats for laid-back moments.",
      src: process.env.PUBLIC_URL + 'lofi.jpg',
			link: "https://open.spotify.com/playlist/37i9dQZF1DWYoYGBbGKurt"
		},
		{
			title: "Indie Rock Hits",
			description: "True indie rock hits.",
      src: process.env.PUBLIC_URL + 'indie.jpg',
			link: "https://open.spotify.com/playlist/37i9dQZF1DXb9izPIc0SCS"
		},	
	];
  
return (
    <div className="bg-gradient-to-b from-[#1f1f1f] to-[#121212] rounded-b-lg h-[660px] overflow-auto overflow-x-hidden">
        <div className="mt-1 flex justify-between">
          <a href="https://open.spotify.com/section/0JQ5DAuChZYPe9iDhh2mJz" className="font-semibold text-2xl px-5 hover:underline">Spotify Playlists</a>
          <a href="https://open.spotify.com/section/0JQ5DAuChZYPe9iDhh2mJz" className="font-semibold text-zinc-400 text-sm px-5 pt-2 hover:underline">Show all</a>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-6 mx-5 my-1">
            {songsArray.map((song, index) => (
              <SongCard
                song={song}
                key={index}
              />
            ))}
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between px-4 md:px-9 mt-20">
        <div class="flex flex-col md:flex-row gap-4 md:gap-x-28">
            <div className="flex flex-col text-zinc-400 font-light gap-1">
              <p className="font-medium text-white pb-1">Company</p>
              <a href="https://www.spotify.com/it/about-us/contact/" className="hover:underline hover:text-white">About</a>
              <a href="https://www.spotify.com/it/about-us/contact/" className="hover:underline hover:text-white">Jobs</a>
              <a href="https://newsroom.spotify.com/" className="hover:underline hover:text-white">For the Record</a>
            </div>
            <div className="flex flex-col text-zinc-400 font-light gap-1">
              <p className="font-medium text-white pb-1">Communities</p>
              <a href="https://artists.spotify.com/home" className="hover:underline hover:text-white" >For Artists</a>
              <a href="https://developer.spotify.com/" className="hover:underline hover:text-white">Developers</a>
              <a href="https://ads.spotify.com/es-ES/" className="hover:underline hover:text-white" >Advertising</a>
              <a href="https://investors.spotify.com/home/default.aspx" className="hover:underline hover:text-white" >Investors</a>
              <a href="https://spotifyforvendors.com/" className="hover:underline hover:text-white" >Vendors</a>
            </div>
            <div className="flex flex-col text-zinc-400 font-light gap-1">
              <p className="font-medium text-white pb-1">Useful links</p>
              <a href="https://support.spotify.com/it/" className="hover:underline hover:text-white">Support</a>
              <a href="https://www.spotify.com/it/free/" className="hover:underline hover:text-white" >Free Mobile App</a>
              <a href="https://www.spotify.com/it/legal/end-user-agreement/#s15" className="hover:underline hover:text-white" >Consumer rights</a>
            </div>
          </div>
          <div class="flex gap-3 mt-10 md:mt-0">
            <a href="https://www.instagram.com/spotify/"><div className="rounded-full bg-zinc-800 p-3 inline-block hover:bg-neutral-600"><FaInstagram className="text-lg text-white" /></div></a>
            <a href="https://twitter.com/spotify"><div className="rounded-full bg-zinc-800 p-3 inline-block hover:bg-neutral-600"><FaTwitter className="text-lg text-white" /></div></a>
            <a href="https://www.facebook.com/Spotify"><div className="rounded-full bg-zinc-800 p-3 inline-block hover:bg-neutral-600"><FaFacebook className="text-lg text-white" /></div></a>
          </div>
        </div>
        <hr className="border-1 border-zinc-700 my-10 mx-6" />
        <p className="text-zinc-400 font-normal text-sm mx-8 mb-20">© 2024 Spotify AB</p>
    </div>
  );
}
export default ContentBody;