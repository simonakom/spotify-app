import PanelBody from "./PanelBody/PanelBody";
import PanelFooter from "./PanelFooter/PanelFooter";
import PanelHeader from "./PanelHeader/PanelHeader";

function LeftPanel() {
	return (
		<div className="flex flex-col h-[130vh] min-w-[380px]">
			<PanelHeader />
			<PanelBody />
			<PanelFooter />
		</div>
	);
}
export default LeftPanel;