import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SSectionSecondItems } from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-dowork",
  styleUrl: "cnt-flexy-view-viskhan-sbank-dowork.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankDowork implements ComponentInterface {
  /**
   * Массив для Dowork
   */
  @Prop() payload: any;

  @Prop() pathToAssets: string;

  /**
   * Интерфейс для Dowork
   */
  @Prop() sectionSecond: SSectionSecondItems[] = [];

  /**
   * Клик по Title
   */
  @Event() clickDoworkTitle: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickDoworkSubtitle: EventEmitter;

  /**
   * Клик по MyBlock
   */
  @Event() clickDoworkMyBlock: EventEmitter;

  componentDidRender() {
    setTimeout (
      () => {
        // @ts-ignore
        AOS.init();
      },
      150
    )
  }

  render() {
    const getSectionSecond = this.payload[1].map((item) => {
      return (
        <div class="col-md-6" data-aos="fade-up">
          <div
            class="my-block"
            onClick={() => this.clickDoworkMyBlock.emit("MyBlock")}
          >
            <div class="my-icon">
              <i class={item.icon} aria-hidden="true" />
            </div>
            <div class="info">
              <div class="titl">{item.titl}</div>
              <div class="text">{item.text}</div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div class="section-second">
          <div class="container">
            <div class="row">
              <div class="col-md" data-aos="fade-up">
                <div
                  class="title"
                  onClick={() => this.clickDoworkTitle.emit("Title")}
                >
                  {this.payload[0][0].subtext}
                </div>
                <div
                  class="subtitle"
                  onClick={() => this.clickDoworkSubtitle.emit("Subtitle")}
                >
                  {this.payload[0][0].subtitle}
                </div>
              </div>
            </div>
            <div class="row">{getSectionSecond}</div>
          </div>
        </div>
      </div>
    );
  }
}
