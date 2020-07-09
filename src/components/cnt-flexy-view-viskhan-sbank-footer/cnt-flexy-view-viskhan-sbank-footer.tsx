import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { forFooter } from "../../utils/mock";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-footer-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-footer.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanSbankFooter implements ComponentInterface {
  /**
   * Данные компонента footer
   */
  @Prop() categories: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }
  render() {
    /**
     * клик по элементам компонента footer
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-sbank-footer
        categories={forFooter}
        onClickFooterFacebook={(item) => clicker(item)}
        onClickFooterIn={(item) => clicker(item)}
        onClickFooterCopyright={(item) => clicker(item)}
      />
    );
  }
}
