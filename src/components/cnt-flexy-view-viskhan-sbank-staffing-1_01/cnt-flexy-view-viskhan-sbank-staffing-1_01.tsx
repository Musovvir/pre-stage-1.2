import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanSbank} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-sbank-staffing-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-sbank-staffing-1_01.css',
  shadow: false,
})
export class CntFlexyViewViskhanSbankStaffing1_01 implements ComponentInterface {
  /**
   * Данные компонента Staffing
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
      <cnt-flexy-view-viskhan-sbank-staffing
        payload={this.payload}
        onClickStaffingImage={(item) => clicker(item)}
        onClickStaffingSubtitle={(item) => clicker(item)}
        onClickStaffingSubtext={(item) => clicker(item)}
      />
    );
  }

}
