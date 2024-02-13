function SongCard(props) { //console.log(props)
 
	function handleClick(event) { 
		console.log(event.target);
	}

	return (
		<div className="bg-[#111111] p-4 w-fit rounded-lg max-w-[190px] max-h-[290px]">
			<img
				src={props.song.src || "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"}
				alt="Playlist Card"
				width="190px"
				className="rounded-lg"
			/>
			<h3 className="mt-4 font-bold text-md">
				{props.song.title || "Playlist title"}
			</h3>
			<p className="mt-2 text-slate-400 text-wrap line-clamp-2 text-sm" onClick={handleClick}>
				{props.song.description || "Playlist description  "}
			</p>
		</div>
	);
}

export default SongCard;