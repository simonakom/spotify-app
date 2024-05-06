import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";

function Content() {
	return (
		<div className="mb-2 w-screen content-margin">
			<ContentHeader />
			<ContentBody />
		</div>
	);
}
export default Content;