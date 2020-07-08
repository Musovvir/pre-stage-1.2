import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SReviewItems } from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-review",
  styleUrl: "cnt-flexy-view-viskhan-sbank-review.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankReview implements ComponentInterface {
  /**
   * Данные компонента Review
   */
  @Prop() payload: any;

  /**
   * Интерфейс для SReviewItems
   */
  @Prop() Review: SReviewItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickReviewImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickReviewSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickReviewSubtext: EventEmitter;

  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getReview = this.payload.map((item) => {
      return (
        <div class="row">
          <div class="col-md-8" data-aos="fade-right">
            <div
              class="image"
              style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
              onClick={() => this.clickReviewImage.emit("Image")}
            />
          </div>
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickReviewSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickReviewSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
        </div>
      );
    });
    return <div class="container">{getReview}</div>;
  }
}
