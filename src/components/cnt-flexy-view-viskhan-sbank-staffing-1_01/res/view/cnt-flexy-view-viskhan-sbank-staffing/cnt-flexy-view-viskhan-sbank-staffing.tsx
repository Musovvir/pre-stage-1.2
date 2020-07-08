import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SStaffingItems } from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-staffing",
  styleUrl: "cnt-flexy-view-viskhan-sbank-staffing.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankStaffing implements ComponentInterface {
  /**
   * Данные компонента Staffing
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Staffing
   */
  @Prop() Staffing: SStaffingItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickStaffingImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickStaffingSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickStaffingSubtext: EventEmitter;

  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getStaffing = this.payload.map((item) => {
      return (
        <div class="row">
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickStaffingSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickStaffingSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
          <div class="col-md-8" data-aos="fade-left">
            <div
              class="image"
              style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
              onClick={() => this.clickStaffingImage.emit("Image")}
            />
          </div>
        </div>
      );
    });
    return <div class="container">{getStaffing}</div>;
  }
}
