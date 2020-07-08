import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {SSectionFourthItems} from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-about",
  styleUrl: "cnt-flexy-view-viskhan-sbank-about.css",
  shadow: false,
})
export class CntFlexyViewViskhanSbankAbout implements ComponentInterface {
  /**
   * Данные компонента Collaboration
   */
  @Prop() payload: any;

  /**
   * Интерфейс для SectionFourth
   */
  @Prop() sectionFourth: SSectionFourthItems[] = [];

  /**
   * Клик по SectionFourthTitle
   */
  @Event() clickSectionFourthTitle: EventEmitter;

  /**
   * Клик по SectionFourthImage
   */
  @Event() clickSectionFourthImage: EventEmitter;

  /**
   * Клик по SectionFourthText
   */
  @Event() clickSectionFourthText: EventEmitter;

  /**
   * Клик по SectionFourthButton
   */
  @Event() clickSectionFourthButton: EventEmitter;

  /**
   * Вызывает анимацию
   */
  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getSectionFourth = this.payload.map((item) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div
                class="title"
                onClick={() => this.clickSectionFourthTitle.emit("Title")}
              >
                {item.titl}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" data-aos="fade-right">
              <div
                class="image"
                style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
                onClick={() => this.clickSectionFourthImage.emit("Image")}
              />
            </div>
            <div class="col-md-6">
              <div class="my-block">
                <div
                  class="text"
                  onClick={() => this.clickSectionFourthText.emit("Text")}
                >
                  {item.text}
                </div>
                <div class="my-button">
                  <button
                    class="bt"
                    onClick={() => this.clickSectionFourthButton.emit("Button")}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div class="section-fourth">{getSectionFourth}</div>;
  }
}
