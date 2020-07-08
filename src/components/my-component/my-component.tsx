import { Component, h, State } from "@stencil/core";
import {
  forFooter,
  forHeader,
  forSectionFirst,
  forSectionFourth,
  forSectionSecond,
  forSectionThird,
  forCollaboration,
  forReview,
  forStaffing,
  forTimeline,
  forSummary,
  forWindow,
} from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
  scoped: true,
})
export class MyComponent {
  @State() popupComplited: boolean;

  componentDidLoad() {
    this.popupComplited = false;
  }

  render() {
    /**
     * клик по элементам компонента
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <div>
        {this.popupComplited ? (
          <cnt-flexy-view-viskhan-window-1_01
            payload={forWindow}
            pathToAssets={this.testPathToAssets}
            onClickWindowInput={(item) => clicker(item)}
            onClickWindowSearch={(item) => clicker(item)}
            onClickWindowUSD={(item) => clicker(item)}
            onClickWindowGBP={(item) => clicker(item)}
            onClickWindowJPY={(item) => clicker(item)}
            onClickWindowNZD={(item) => clicker(item)}
            onClickWindowINR={(item) => clicker(item)}
            onClickWindowEUR={(item) => clicker(item)}
            onClickWindowPYG={(item) => clicker(item)}
            onClickWindowEUP={(item) => clicker(item)}
            onClickWindowZAR={(item) => clicker(item)}
            onClickWindowText={(item) => clicker(item)}
            onClickWindowCircle={(item) => clicker(item)}
            onCloseForm={() => {
              this.closeForm();
            }}
          />
        ) : (
          ""
        )}
        <div onClick={() => this.openForm()}>
          <cnt-flexy-view-viskhan-sbank-header-1_01
            categories={forHeader}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-estimates-1_01
            payload={forSectionFirst}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-dowork-1_01
            payload={forSectionSecond}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-structure-1_01
            payload={forSectionThird}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-collaboration-1_01
            payload={forCollaboration}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-review-1_01
            payload={forReview}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-staffing-1_01
            payload={forStaffing}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-timeline-1_01
            payload={forTimeline}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-summary-1_01
            payload={forSummary}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-about-1_01
            payload={forSectionFourth}
            pathToAssets={this.testPathToAssets}
          />
          <cnt-flexy-view-viskhan-sbank-footer-1_01
            categories={forFooter}
            pathToAssets={this.testPathToAssets}
          />
        </div>
      </div>
    );
  }

  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets =
    "http://cdn.ramman.net/flexy-view/viskhan/sbank/1.01/assets/";

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    if (this.popupComplited === false) {
      this.popupComplited = true;
    }
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.popupComplited = false;
  }
}
