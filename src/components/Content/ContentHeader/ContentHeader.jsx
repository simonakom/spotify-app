import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";

function LeftButtons() {
	return (
		<div className="pt-2 pl-6">
			<button className="bg-[#090909] rounded-full text-[#bab8b8] p-2 mr-2 not-allowed-cursor">
				<LiaAngleLeftSolid className="text-lg" />
			</button>
			<button className="bg-[#090909] rounded-full text-[#bab8b8] p-2 not-allowed-cursor hidden md:inline-block">
				<LiaAngleRightSolid className="text-lg" />
			</button>
		</div>
	);
}
function RightButtons() {
    return (
        <div className="pr-8 mb-2 flex items-center ml-20 overflow-hidden hide-buttons">
			<a href="https://www.spotify.com/es/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F">
       			<button className="bg-[#101010] text-[#a0a0a0] rounded-full font-semibold hover:text-white hover:scale-105 whitespace-nowrap mr-1 px-5 py-2 md:px-8 md:py-2">Sign up</button>
    		</a>
    		<a href="https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fopen.spotify.com%2F">
        		<button className="bg-[#ffffff] text-[#101010] rounded-full font-semibold hover:scale-x-105 whitespace-nowrap px-5 py-2 md:px-8 md:py-3">Log in</button>
    		</a>
        </div>
    );
}
function ContentHeader() {
	return (
		<div className="bg-[#101010] flex justify-between min-h-[62px] pt-2 rounded-t-lg">
			<LeftButtons/>
			<RightButtons/>
		</div>
	) 
}
export default ContentHeader;