import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-header-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-header-1_01.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankHeader1_01 implements ComponentInterface {
  /**
   * Данные компонента header
   */
  @Prop() categories: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }

  render() {
    /**
     * клик по элементам компонента header
     */
    const clicker = (item) => {
      console.log(item);
    };

    return (
      <cnt-flexy-view-viskhan-sbank-header
        categories={this.categories}
        onClickHeaderLogo={(item) => clicker(item)}
        onClickHeaderHome={(item) => clicker(item)}
        onClickHeaderFeatures={(item) => clicker(item)}
        onClickHeaderHowItWorks={(item) => clicker(item)}
        onClickHeaderAboutUs={(item) => clicker(item)}
        onClickHeaderSignIn={(item) => clicker(item)}
      />
    );
  }
}
