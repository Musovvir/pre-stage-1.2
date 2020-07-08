import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SHeaderItems } from "./interface/common.interface";
import { StorageViskhanSbank } from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-header",
  styleUrl: "cnt-flexy-view-viskhan-sbank-header.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankHeader implements ComponentInterface {
  /**
   * Массив для Header
   */
  @Prop() categories: any;

  /**
   * Интерфейс для Header
   */
  @Prop() header: SHeaderItems[] = [];

  /**
   * Клик по лого
   */
  @Event() clickHeaderLogo: EventEmitter;

  /**
   * Клик по Home
   */
  @Event() clickHeaderHome: EventEmitter;

  /**
   * Клик по Features
   */
  @Event() clickHeaderFeatures: EventEmitter;

  /**
   * Клик по How
   */
  @Event() clickHeaderHowItWorks: EventEmitter;

  /**
   * Клик по About
   */
  @Event() clickHeaderAboutUs: EventEmitter;

  /**
   * Клик по SignIn
   */
  @Event() clickHeaderSignIn: EventEmitter;

  render() {
    const getHeader = this.categories.map((item) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div
                class="logoImg"
                style={{
                  backgroundImage:
                    "url(" + StorageViskhanSbank.prefix + item.url + ")",
                }}
                onClick={() => this.clickHeaderLogo.emit("Logo")}
              >
                {/*изображение лого бэкграундом*/}
              </div>
            </div>
            <div class="col-8">
              <div class="my-link">
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    <a
                      class="nav-link links"
                      href="#"
                      onClick={() => this.clickHeaderHome.emit("Home")}
                    >
                      {item.item_1}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link links"
                      href="#"
                      onClick={() => this.clickHeaderFeatures.emit("Features")}
                    >
                      {item.item_2}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link links"
                      href="#"
                      onClick={() =>
                        this.clickHeaderHowItWorks.emit("HowItWorks")
                      }
                    >
                      {item.item_3}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link links"
                      href="#"
                      onClick={() => this.clickHeaderAboutUs.emit("AboutUs")}
                    >
                      {item.item_4}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link links"
                      href="#"
                      onClick={() => this.clickHeaderSignIn.emit("SignIn")}
                    >
                      {item.item_5}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div class="header">{getHeader}</div>;
  }
}
