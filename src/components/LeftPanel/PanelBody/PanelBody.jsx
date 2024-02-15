import { GoPlus } from "react-icons/go";

function CardComponent({ title, description, buttonText,link}) {
	return (
		<div className="bg-[#242424] py-4 px-5 rounded-lg mb-6">
			<strong className="block mb-2 font-medium">{title}</strong>
			<p className="text-sm font-light py-">{description}</p>
			<a href={link} className="hover:border-white">
  				<button className="bg-white rounded-3xl text-black font-bold px-5 py-2 mt-4 text-xs hover:scale-110 transition-transform duration-300">{buttonText}</button>
			</a>	
		</div>
	);
}
function PanelBody() {
	return (
	<div className="bg-[#121212] max-h-[370px] rounded-t-lg p-2 mt-2 pb-6">
		<div className="flex justify-between text-zinc-400 font-medium mb-3">
			<span class="hover:text-white flex items-center cursor-pointer tooltip px-3 pt-2">
				<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="inline-block hover:fill-white mr-3 Svg-sc-ytk21e-0 bneLcE" fill="#A7A7A7" width="25" height="25">
					<path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
				</svg>
				<span class="text-md">Your Library</span>
				<span class="tooltiptext">Collapse Your Library</span>
			</span>
			<div className="tooltip pt-2 mr-2">
				<GoPlus className="text-3xl rounded-full hover:bg-[rgba(118,117,117,0.16)] p-1 transition-colors duration-500 cursor-pointer" />
				<span className="tooltiptext">Create playlist or folder</span>
			</div>
		</div>
		<div className="flex flex-col pt-2 scrollable-container">
			<CardComponent
				title="Create your first playlist"
				description="It's easy, we'll help you"
				buttonText="Create playlist"
				link="https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fopen.spotify.com%2Fgenre%2F0JQ5DArNBzkmxXHCqFLx2J"
			/>
			<CardComponent
				title="Let's find some podcasts to follow"
				description="We'll keep you updated on new episodes"
				buttonText="Browse podcasts"
				link="https://open.spotify.com/genre/0JQ5DArNBzkmxXHCqFLx2J"
			/>
		</div>
	</div>
	)
}
export default PanelBody;
