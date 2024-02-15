import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";

function Content() {
	return (
		<div className="w-5/6 rounded-lg flex flex-col mb-2">
			<ContentHeader />
			<ContentBody />
		</div>
	);
}
export default Content;