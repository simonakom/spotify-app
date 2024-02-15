import Cover from "../../../../assets/images/cover.png"

function SongCard(props) { //console.log(props)
 
	function handleClick(event) { 
		console.log(event.target);
	}
	return (
		<a href={props.song.link || "https://open.spotify.com/section/0JQ5DAuChZYPe9iDhh2mJz"}>
			<div className="bg-[#161616] p-4 w-fit rounded-lg max-w-[220px] min-h-[270px] hover:bg-neutral-800 duration-200 ">
				<img
					src={props.song.src || Cover}
					alt="Playlist Card"
					width="190px"
					className="rounded-lg"
				/>
				<h3 className="mt-4 font-bold text-base line-clamp-1">
					{props.song.title || "Playlist title"}
				</h3>
				<p className="mt-2 text-zinc-400 text-wrap line-clamp-2 text-sm" onClick={handleClick}>
					{props.song.description || "Playlist description  "}
				</p>
			</div>
		</a>
	);
}

export default SongCard;