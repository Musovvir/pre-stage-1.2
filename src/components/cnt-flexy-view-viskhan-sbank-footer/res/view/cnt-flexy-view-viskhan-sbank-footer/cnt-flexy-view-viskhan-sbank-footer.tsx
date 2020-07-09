import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SFooterItems } from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-footer",
  styleUrl: "cnt-flexy-view-viskhan-sbank-footer.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanSbankFooter implements ComponentInterface {
  /**
   * Массив для Footer
   */
  @Prop() categories: any;

  /**
   * Интерфейс для Footer
   */
  @Prop() footer: SFooterItems[] = [];

  /**
   * Клик по FooterFacebook
   */
  @Event() clickFooterFacebook: EventEmitter;

  /**
   * Клик по FooterIn
   */
  @Event() clickFooterIn: EventEmitter;

  /**
   * Клик по FooterCopyright
   */
  @Event() clickFooterCopyright: EventEmitter;
  render() {
    const getFooter = this.categories.map((item) => {
      return (
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-2">
              <div class="facebook">
                <i
                  class={item.facebook}
                  aria-hidden="true"
                  onClick={() => this.clickFooterFacebook.emit("Facebook")}
                />
              </div>
              <div class="in">
                <i
                  class={item.in}
                  aria-hidden="true"
                  onClick={() => this.clickFooterIn.emit("In")}
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-7">
              <div
                class="copyright"
                onClick={() => this.clickFooterCopyright.emit("Copyright")}
              >
                {item.copyright}
                <i class={item.heart} aria-hidden="true"/>
                <a href="#">{item.by}</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div class="footer">{getFooter}</div>;
  }
}
