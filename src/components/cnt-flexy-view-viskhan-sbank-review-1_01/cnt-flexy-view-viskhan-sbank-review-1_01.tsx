import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanSbank} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-sbank-review-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-sbank-review-1_01.css',
  shadow: false,
})
export class CntFlexyViewViskhanSbankReview1_01 implements ComponentInterface {
  /**
   * Данные компонента Review
   */
  @Prop() payload: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }

  render() {
    /**
     * клик по элементам компонента Review
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-sbank-review
        payload={this.payload}
        onClickReviewImage={(item) => clicker(item)}
        onClickReviewSubtitle={(item) => clicker(item)}
        onClickReviewSubtext={(item) => clicker(item)}
      />
    );
  }

}
