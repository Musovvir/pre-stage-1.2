import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SCollaborationItems } from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-collaboration",
  styleUrl: "cnt-flexy-view-viskhan-sbank-collaboration.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankCollaboration
  implements ComponentInterface {
  /**
   * Данные компонента collaboration
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Collaboration
   */
  @Prop() sectionThird: SCollaborationItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickCollaborationImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickCollaborationSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickCollaborationSubtext: EventEmitter;

  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getCollaboration = this.payload.map((item) => {
      return (
        <div class="row">
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickCollaborationSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickCollaborationSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
          <div class="col-md-8" data-aos="fade-left">
            <div
              class="image"
              style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
              onClick={() => this.clickCollaborationImage.emit("Image")}
            />
          </div>
        </div>
      );
    });
    return <div class="container">{getCollaboration}</div>;
  }
}
