import PanelBody from "./PanelBody/PanelBody";
import PanelFooter from "./PanelFooter/PanelFooter";
import PanelHeader from "./PanelHeader/PanelHeader";

function LeftPanel() {
	return (
		<div className="flex flex-col min-h-[100vh] w-1/4">
			<PanelHeader />
			<PanelBody />
			<PanelFooter />
		</div>
	);
}
export default LeftPanel;