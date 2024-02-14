
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";

function LeftButtons() {
	return (
		<div className="pt-2 pl-6">
			<button className="bg-[#090909] rounded-full text-[#bab8b8] p-2 mr-2 not-allowed-cursor">
				<LiaAngleLeftSolid className="text-lg" />
			</button>
			<button className="bg-[#090909] rounded-full text-[#bab8b8] p-2 not-allowed-cursor">
				<LiaAngleRightSolid className="text-lg" />
			</button>
		</div>
	);
}
function RightButtons() {
	return (
		<div className="pr-8 mb-20">
			<button className="bg-[#101010] text-[#a0a0a0] mr-8 font-semibold hover:text-white hover:scale-105">Sign up</button>
			<button className="bg-[#ffffff] text-[#101010] rounded-full font-semibold px-8 py-3 hover:scale-105">Log in</button>
		</div>
	);
}
function ContentHeader() {
	return (
		<div className="bg-[#101010] flex justify-between max-h-[65px] pt-2 rounded-t-lg">
			<LeftButtons/>
			<RightButtons/>
		</div>
	) 
}
export default ContentHeader;