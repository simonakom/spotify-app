import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { PiMusicNotesPlus } from "react-icons/pi";
import { IoTriangleSharp } from "react-icons/io5";


function CardComponent({ title, description, buttonText, link, showNewWindow }) {
	return (
	  <div className="bg-[#242424] py-4 px-5 rounded-lg mb-6">
		<strong className="block mb-2 font-medium">{title}</strong>
		<p className="text-sm font-light mb-1">{description}</p>
		<a href={link} onClick={showNewWindow} className="hover:border-white">
		  <button className="bg-white rounded-3xl text-black font-bold px-5 py-2 mt-4 text-xs hover:scale-105 transition-transform duration-200">{buttonText}</button>
		</a>  
	  </div>
	);
  }

  function Dropdown({ openNewWindow }) {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggleDropdown = () => {
	  setIsOpen(!isOpen);
	};
  
	const handleNewPlaylist = () => {
	  openNewWindow();
	  toggleDropdown();
	};
	return (
		<div>
			<div className="tooltip" onClick={toggleDropdown}>
				<GoPlus className="text-3xl rounded-full hover:bg-[rgba(118,117,117,0.16)] p-1 cursor-pointer"/>
				<span className="tooltiptext">Create playlist or folder</span>
		  	</div>
			{isOpen && (
				<div className="absolute top-48 mt-8 rounded shadow-xl shadow-[#151414] w-52 bg-[#242424]">
					<ul className="text-white">
						<li className="flex items-center hover:bg-[#3e3d3d] m-1 py-2">
							<PiMusicNotesPlus className="text-xl ms-2"/>
							<p onClick={handleNewPlaylist} className="text-sm font-light ms-3 cursor-pointer">Create a new playlist</p>
						</li>
					</ul>
				</div>
			)}
		</div>
	  );
	}

function PanelBody() {
	const [showNewWindow, setShowNewWindow] = useState(false);

	const openNewWindow = () => {
		setShowNewWindow(true);
	  };
	const closeNewWindow = () => {
	setShowNewWindow(false);
	};
	
	return (
	<div className="bg-[#121212] rounded-t-lg p-2 mt-2 pb-6">
		<div className="flex justify-between text-zinc-400 font-medium mb-3">
			<span className="hover:text-white flex items-center cursor-pointer tooltip px-3 pt-2">
				<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="inline-block hover:fill-white mr-3 Svg-sc-ytk21e-0 bneLcE" fill="#A7A7A7" width="25" height="25">
					<path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
				</svg>
				<span class="text-md">Your Library</span>
				<span class="tooltiptext">Collapse Your Library</span>
			</span>
			<div className="pt-1 mr-2">
				<Dropdown openNewWindow={openNewWindow} />
			</div>
		</div>
		<div className="flex flex-col scrollable-container mt-4 2xl:min-h-[350px] xl:h-[297px] lg:h-[190px] md:h-[186px] sm:h-[180px] h-[170px] overflow-x-hidden">
			<CardComponent
				title="Create your first playlist"
				description="It's easy, we'll help you"
				buttonText="Create playlist"
				link="/"
				showNewWindow={openNewWindow}
			/>
			{showNewWindow && (
				<div className="absolute top-[230px] left-[345px] rounded-md bg-[#0d72ea] w-80 px-4 py-3 shadow-xl">
					<div className="absolute top-[70px] left-[-10px] text-[#0d72ea] -rotate-90"><IoTriangleSharp /></div>
					<p className="font-medium text-md mb-3">Create a playlist</p>
					<p className="text-xs mb-7">Log in to create and share playlists.</p>
					<div className="flex justify-end gap-4 mb-1">  
						<button onClick={closeNewWindow} className="text-sm text-[#a7a7a7] font-medium hover:scale-105 duration-100 hover:text-white">Not now</button>
						<a href="/"><button className="text-sm text-black bg-white font-semibold rounded-2xl p-1 px-3 hover:scale-105 duration-100">Log in</button></a>
					</div>
				</div>
        	)}
			<CardComponent
				title="Let's find some podcasts to follow"
				description="We'll keep you updated on new episodes"
				buttonText="Browse podcasts"
				link="/"
			/>
		</div>
	</div>
	)
}
export default PanelBody;
