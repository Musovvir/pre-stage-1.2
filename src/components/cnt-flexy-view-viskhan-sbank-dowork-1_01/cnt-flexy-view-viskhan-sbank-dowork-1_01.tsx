import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-dowork-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-dowork-1_01.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankDowork1_01 implements ComponentInterface {
  /**
   * Данные компонента collaboration
   */
  @Prop() payload: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }

  render() {
    /**
     * клик по элементам компонента collaboration
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-sbank-dowork
        payload={this.payload}
        onClickDoworkTitle={(item) => clicker(item)}
        onClickDoworkSubtitle={(item) => clicker(item)}
        onClickDoworkMyBlock={(item) => clicker(item)}
      />
    );
  }
}
