import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanSbank} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-sbank-about-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-sbank-about-1_01.css',
  shadow: false,
})
export class CntFlexyViewViskhanSbankAbout1_01 implements ComponentInterface {
  /**
   * Данные компонента About
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
      <cnt-flexy-view-viskhan-sbank-about
        payload={this.payload}
        onClickSectionFourthTitle={(item) => clicker(item)}
        onClickSectionFourthImage={(item) => clicker(item)}
        onClickSectionFourthText={(item) => clicker(item)}
        onClickSectionFourthButton={(item) => clicker(item)}
      />
    );
  }

}
