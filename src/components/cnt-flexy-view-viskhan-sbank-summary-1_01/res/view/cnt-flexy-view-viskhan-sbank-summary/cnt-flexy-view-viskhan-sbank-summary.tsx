import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSummaryItems} from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-sbank-summary',
  styleUrl: 'cnt-flexy-view-viskhan-sbank-summary.css',
  shadow: false,
  scoped:true
})
export class CntFlexyViewViskhanSbankSummary implements ComponentInterface {
  /**
   * Данные компонента Summary
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Summary
   */
  @Prop() Summary: SSummaryItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickSummaryImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickSummarySubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickSummarySubtext: EventEmitter;


  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getSummary = this.payload.map((item) => {
      return (
        <div class="row">
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickSummarySubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickSummarySubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
          <div class="col-md-8" data-aos="fade-left">
            <div
              class="image"
              style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
              onClick={() => this.clickSummaryImage.emit("Image")}
            />
          </div>
        </div>
      );
    });
    return (
      <div class="container">
        {getSummary}
      </div>
    );
  }

}
