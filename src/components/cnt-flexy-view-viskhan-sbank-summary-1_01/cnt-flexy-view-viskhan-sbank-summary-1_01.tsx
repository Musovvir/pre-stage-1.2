import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-summary-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-summary-1_01.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankSummary1_01 implements ComponentInterface {
  /**
   * Данные компонента Summary
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
      <cnt-flexy-view-viskhan-sbank-summary
        payload={this.payload}
        onClickSummaryImage={(item) => clicker(item)}
        onClickSummarySubtitle={(item) => clicker(item)}
        onClickSummarySubtext={(item) => clicker(item)}
      />
    );
  }
}
