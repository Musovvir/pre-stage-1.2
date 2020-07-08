import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { StorageViskhanSbank } from "../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-collaboration-1_01",
  styleUrl: "cnt-flexy-view-viskhan-sbank-collaboration-1_01.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankCollaboration1_01
  implements ComponentInterface {
  /**
   * Данные компонента Collaboration
   */
  @Prop() payload: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }

  render() {
    /**
     * клик по элементам компонента Collaboration
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-sbank-collaboration
        payload={this.payload}
        onClickCollaborationImage={(item) => clicker(item)}
        onClickCollaborationSubtitle={(item) => clicker(item)}
        onClickCollaborationSubtext={(item) => clicker(item)}
      />
    );
  }
}
