import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SSectionFirstItems } from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-estimates",
  styleUrl: "cnt-flexy-view-viskhan-sbank-estimates.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankEstimates implements ComponentInterface {
  /**
   * Массив для Estimates
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Estimates
   */
  @Prop() sectionFirst: SSectionFirstItems[] = [];

  /**
   * Клик по Text
   */
  @Event() clickEstimatesText: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickEstimatesSubtext: EventEmitter;

  /**
   * Клик по Button
   */
  @Event() clickEstimatesButton: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickEstimatesImage: EventEmitter;

  render() {
    const getSectionFirst = this.payload.map((item) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="info">
                <div
                  class="tit"
                  onClick={() => this.clickEstimatesText.emit("Text")}
                >
                  {item.text}
                </div>
                <div
                  class="subtext"
                  onClick={() => this.clickEstimatesSubtext.emit("Subtext")}
                >
                  {item.subtext}
                </div>
                <div class="my-button">
                  <button
                    class="bt"
                    onClick={() => this.clickEstimatesButton.emit("Button")}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="image"
                style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
                onClick={() => this.clickEstimatesImage.emit("Image")}
              />
            </div>
          </div>
        </div>
      );
    });
    return <div class="section-first">{getSectionFirst}</div>;
  }
}
