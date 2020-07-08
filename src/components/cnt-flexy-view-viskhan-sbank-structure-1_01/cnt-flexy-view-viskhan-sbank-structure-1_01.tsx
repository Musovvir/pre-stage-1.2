import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanSbank} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-sbank-structure-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-sbank-structure-1_01.css',
  shadow: false,
})
export class CntFlexyViewViskhanSbankStructure1_01 implements ComponentInterface {
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
      <cnt-flexy-view-viskhan-sbank-structure
        payload={this.payload}
        onClickStructureImage={(item) => clicker(item)}
        onClickStructureSubtitle={(item) => clicker(item)}
        onClickStructureSubtext={(item) => clicker(item)}
        onClickStructureTitle={(item) => clicker(item)}
        onClickStructureText={(item) => clicker(item)}
      />
    );
  }

}
