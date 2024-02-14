import { FiGlobe } from "react-icons/fi";

function LanguageButton() {
	return (
		<button className="bg-transparent text-zinc-300 border border-zinc-400 rounded-3xl text-sm font-bold w-[27%] py-1 my-4 ml-1 hover:text-white hover:border-white hover:scale-105">
			<FiGlobe className="inline-block text-lg mr-1"/> 
			<span>English</span>
		</button>
	);
}
function PanelFooter() {
	return (
	<div className="bg-[#121212] rounded-b-lg mb-6 min-h-[19%] px-2 pt-8">
		<div className="mb-3 text-size">
			<a href="https://www.spotify.com/es/legal/end-user-agreement/" className="inline-block ml-4 ">Legal</a>
			<a href="https://www.spotify.com/es/privacy" className="inline-block ml-4 ">Privacy center</a>
			<a href="https://www.spotify.com/es/legal/privacy-policy/#s3" className="inline-block ml-4 ">Privacy policy</a>
			<a href="/"className="inline-block ml-4 ">Cookie settings</a>
		</div>
		<div className="mb-3 text-size">
			<a href="https://www.spotify.com/es/legal/privacy-policy/"className="inline-block ml-4">About ads</a>
			<a href="https://www.spotify.com/es/accessibility"className="inline-block ml-4">Accessibility</a>
		</div>
		<div className="text-size">
			<a href="https://www.spotify.com/es/legal/cookies-policy/" className="inline-block ml-4 hover:underline">Cookies</a>
		</div>
		<div className="flex flex-col pt-4 ml-2 scrollable-container">
			<LanguageButton/>
		</div>
	</div>

	
	);
}
export default PanelFooter;