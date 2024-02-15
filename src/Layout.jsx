import Content from "./components/Content/Content";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Footer from "./components/Footer/Footer";

function Layout() {
	return (
		<div className="flex p-2">
			<div className="flex flex-col">
				<div className="flex gap-2">
					<LeftPanel />
					<Content />
				</div>
				<Footer />
			</div>
		</div>
	);
}
export default Layout;