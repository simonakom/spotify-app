import PanelBody from "./PanelBody/PanelBody";
import PanelFooter from "./PanelFooter/PanelFooter";
import PanelHeader from "./PanelHeader/PanelHeader";

function LeftPanel() {
	return (
		<div className="flex flex-col max-w-[330px] 2xl:min-w-[330px] xl:min-w-[330px] lg:min-w-[330px] mg:min-w-[330px] sm:min-w-[330px] min-w-[10px]   overflow-x-hidden    2xl:min-h-[790px] xl:min-h-[735px] lg:h-[630px] md:h-[625px] sm:min-h-[625px] h-[595px]">
			<PanelHeader />
			<PanelBody />
			<PanelFooter />
		</div>
	);
}
export default LeftPanel;