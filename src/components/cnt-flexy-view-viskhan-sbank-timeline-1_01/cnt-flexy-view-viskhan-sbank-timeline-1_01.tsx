import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-timeline-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-timeline-1_01.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankTimeline1_01
  implements ComponentInterface {
  /**
   * Данные компонента Timeline
   */
  @Prop() payload: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }

  render() {
    /**
     * клик по элементам компонента
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-sbank-timeline
        payload={this.payload}
        onClickTimelineImage={(item) => clicker(item)}
        onClickTimelineSubtitle={(item) => clicker(item)}
        onClickTimelineSubtext={(item) => clicker(item)}
      />
    );
  }
}
