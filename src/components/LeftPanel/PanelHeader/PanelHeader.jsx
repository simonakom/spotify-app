import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

function PanelHeader() {
	return (
	 <div className="bg-[#121212] min-h-[155px] rounded-lg py-5 px-6 gap-4 flex flex-col font-medium">
		<a href="spotify" className="block">
				<FaSpotify className="text-2xl inline" /><span className="px-1 text-sm">Spotify</span>
		</a>
		<a href="home" className="linkInHeader text-zinc-400 hover:underline mt-1">
				<GoHomeFill  className="text-2xl inline mr-5" /><span className="text-base">Home</span>
		</a>
		<a href="serach" className="linkInHeader text-zinc-400 hover:underline mt-2">
				<IoSearch className="text-2xl inline mr-5" /><span className="text-base">Search</span>
		</a>
	</div>
	);
}
export default PanelHeader;