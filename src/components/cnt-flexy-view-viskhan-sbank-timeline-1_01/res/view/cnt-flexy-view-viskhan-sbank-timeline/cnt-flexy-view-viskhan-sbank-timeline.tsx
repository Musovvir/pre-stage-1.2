import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { STimelineItems } from "./interface/common.interface";
import { StorageViskhanSbank } from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-timeline",
  styleUrl: "cnt-flexy-view-viskhan-sbank-timeline.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankTimeline implements ComponentInterface {
  /**
   * Данные компонента Timeline
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Timeline
   */
  @Prop() Timeline: STimelineItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickTimelineImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickTimelineSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickTimelineSubtext: EventEmitter;

  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getTimeline = this.payload.map((item) => {
      return (
        <div class="row">
          <div class="col-md-8" data-aos="fade-right">
            <div
              class="image"
              style={{
                backgroundImage:
                  "url(" + StorageViskhanSbank.prefix + item.url + ")",
              }}
              onClick={() => this.clickTimelineImage.emit("Image")}
            />
          </div>
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickTimelineSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickTimelineSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
        </div>
      );
    });
    return <div class="container">{getTimeline}</div>;
  }
}
