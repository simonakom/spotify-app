import SongCard from "./SongCard/SongCard";
// import Images from "../../../Assets/Images"


function ContentBody() {
	const songsArray = [
		{
			title: "Sleep",
			description: "Gentle Ambient piano to help you fall asleep.",
			src: "https://i.scdn.co/image/ab67706f000000028aa213d23c60645e2649a350",
		},
		{ 
			title: "Night Rain",
			description: "Sleep with sounds of pouring rain and occasional rolling thunder.",
			src: "https://i.scdn.co/image/ab67706f0000000215a41ffcf6a9fd1ed7f15ccc",
		},
		{
			title: "lofi sleep",
			description: "Instrumental beats for a restful night's sleep.",
			src: "https://i.scdn.co/image/ab67706f000000021e8e1adb3db7cbb52311346d",
		},
		{
			title: "Deep Sleep",
			description:"Soothing, minimalist ambient for deep sleep.",
			src: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
		},
		{
			title: "White Noise 10 Hours",
			description: "Ten hours long continuous white noise to help you relax and let go.",
			src: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
		},
		{
			title: "Jazz for Sleep",
			description: "Let these calm Jazz tracks lull you to sleep.",
			src: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
		},
		{
			title: "Brown Noise",
			description: "Soothing, low frequencies for relaxation, meditation or sleep.",
			src: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
		},
		{
			title: "Nightstorms",
			description: "12 hours of comforting sounds of thunder and rain.",
			src: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
		},
		{
			title: "Pink Noise 10 Hours",
			description: "The perfect frequency for sleep or study – science tested, listener approved.",
			src: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
		},
		{
			title: "Dreamy Forest Music",
			description: "Wander into the magical mix of music, water, birds, and calmness. ",
			src: "",
		},
		{
			title: "Sleep",
			description: "Gentle Ambient piano to help you fall asleep.",
			src: "https://i.scdn.co/image/ab67706f000000028aa213d23c60645e2649a350",
		},
		{
			title: "DayDreamer",
			description: "Drift away with enthralling instrumentals.",
			src: "",
		},
	];
	return (
		<div className="bg-gradient-to-b from-[#1f1f1f] to-[#121212] rounded-b-lg h-[92.5%] overflow-y-auto ">
			<div className="font-bold text-2xl pt-1 pb-3 px-6">Spotify Playlists</div>

			<div className="flex flex-wrap justify-evenly gap-3">
				{songsArray.map((song, index) => ( 
				<SongCard
				// songTitle={song.title}
				// src={song.src}
				// description={song.description}
					song={song}
					key={index}  
				/>
				))}
			</div>
		</div>
	  );
}
export default ContentBody;