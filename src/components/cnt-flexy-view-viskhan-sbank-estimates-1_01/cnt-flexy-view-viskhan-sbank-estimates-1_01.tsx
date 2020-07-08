import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-estimates-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-estimates-1_01.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankEstimates1_01
  implements ComponentInterface {
  /**
   * Данные компонента estimates
   */
  @Prop() payload: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }
  render() {
    /**
     * клик по элементам компонента estimates
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-sbank-estimates
        payload={this.payload}
        onClickEstimatesText={(item) => clicker(item)}
        onClickEstimatesSubtext={(item) => clicker(item)}
        onClickEstimatesButton={(item) => clicker(item)}
        onClickEstimatesImage={(item) => clicker(item)}
      />
    );
  }
}
