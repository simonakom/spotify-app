import { FiGlobe } from "react-icons/fi";

function LanguageButton() {
	return (
		<button className="bg-transparent text-zinc-300 border border-zinc-400 rounded-3xl text-sm font-bold w-[30%] py-1 my-4 ml-4 hover:text-white hover:border-white hover:scale-105 overflow-hidden">
			<FiGlobe className="inline-block text-lg mr-1"/> 
			<span>English</span>
		</button>
	);
}
function PanelFooter() {
	return (
	<div className="bg-[#121212] rounded-b-lg min-h-[19%] px-2 py-3 mb-1 overflow-x-hidden">
		<div className="mb-3 text-size leading-loose">
			<div>  
				<a href="/" className="inline-block ml-4">Legal</a>
				<a href="/" className="inline-block ml-4">Safety & Privacy Center</a>
				<a href="/" className="inline-block ml-4">Privacy policy</a>
			</div>
			<div className="mt-2">  
				<a href="/"className="inline-block ml-4">Cookie settings</a>
				<a href="/"className="inline-block ml-4">About Ads</a>
				<a href="/"className="inline-block ml-4">Accessibility</a>
			</div>
			<div className="mt-2">  
				<a href="/"className="inline-block ml-4">Cookies</a>
			</div>
		</div>
		<div>
			<LanguageButton/>
		</div>
	</div>
	);
}
export default PanelFooter;