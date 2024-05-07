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
			link: "/"
		},
		{ 
			title: "Calming Acoustic",
			description: "Keep calm with instrumental acoustic tracks.",
      src: process.env.PUBLIC_URL + 'calming.jpg',
			link: "/"
		},
		{
			title: "Pop Rising",
			description: "Who's now and next in pop. Cover: Victoria Monét",
      src: process.env.PUBLIC_URL + 'pop.jpg',
			link: "/"
		},
		{
			title: "lofi chill",
			description:"Lazy slow lofi beats for laid-back moments.",
      src: process.env.PUBLIC_URL + 'lofi.jpg',
			link: "/"
		},
		{
			title: "Indie Rock Hits",
			description: "True indie rock hits.",
      src: process.env.PUBLIC_URL + 'indie.jpg',
			link: "/"
		},	
	];
  
return (
  <div className="bg-gradient-to-b from-[#1f1f1f] to-[#121212] rounded-b-lg overflow-scroll overflow-x-hidden 2xl:min-h-[720px] xl:h-[665px] lg:h-[560px] md:h-[555px] sm:h-[550px] h-[530px]">
      <div className="mt-1 flex justify-between">
        <a href="/" className="font-semibold text-2xl px-5 my-1 hover:underline">Spotify Playlists</a>
        <a href="/" className="font-semibold text-zinc-400 text-sm px-5 pt-2 hover:underline">Show all</a>
      </div>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-6 mx-5 my-1">
            {songsArray.map((song, index) => (
              <SongCard
                song={song}
                key={index}
              />
            ))}
        </div>
      </div>
      <div class="flex flex-col gap-10 ms-10 md:flex-col lg:flex-col xl:flex-row justify-between px-4 md:pe-14 mt-20">
        <div class="flex flex-col gap-y-10 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 2xl:gap-x-48 xl:gap-x-20 lg:gap-x-28 md:gap-10 md:me-56">
            <div className="flex flex-col text-zinc-400 font-light gap-1">
              <p className="font-medium text-white pb-1">Company</p>
              <a href="/" className="hover:underline hover:text-white">About</a>
              <a href="/" className="hover:underline hover:text-white">Jobs</a>
              <a href="/" className="hover:underline hover:text-white">For the Record</a>
            </div>
            <div className="flex flex-col text-zinc-400 font-light gap-1">
              <p className="font-medium text-white pb-1">Communities</p>
              <a href="/" className="hover:underline hover:text-white" >For Artists</a>
              <a href="/" className="hover:underline hover:text-white">Developers</a>
              <a href="/" className="hover:underline hover:text-white" >Advertising</a>
              <a href="/" className="hover:underline hover:text-white" >Investors</a>
              <a href="/" className="hover:underline hover:text-white" >Vendors</a>
            </div>
            <div className="flex flex-col text-zinc-400 font-light gap-1">
              <p className="font-medium text-white pb-1">Useful links</p>
              <a href="/" className="hover:underline hover:text-white">Support</a>
              <a href="/" className="hover:underline hover:text-white" >Free Mobile App</a>
              <a href="/" className="hover:underline hover:text-white" >Consumer rights</a>
            </div>
        </div>
        <div class="flex gap-3 mt-10 md:mt-0">
          <a href="/"><div className="rounded-full bg-zinc-800 p-3 inline-block hover:bg-neutral-600"><FaInstagram className="text-lg text-white" /></div></a>
          <a href="/"><div className="rounded-full bg-zinc-800 p-3 inline-block hover:bg-neutral-600"><FaTwitter className="text-lg text-white" /></div></a>
          <a href="/"><div className="rounded-full bg-zinc-800 p-3 inline-block hover:bg-neutral-600"><FaFacebook className="text-lg text-white" /></div></a>
        </div>
      </div>
      <hr className="border-1 border-zinc-700 my-10 mx-6" />
      <p className="text-zinc-400 font-normal text-sm mx-8 mb-20">© 2024 Spotify AB</p>
    </div>
  );
}
export default ContentBody;