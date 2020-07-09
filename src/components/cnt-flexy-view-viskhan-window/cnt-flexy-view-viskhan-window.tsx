import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {SWindowItems} from "./res/view/interface/common.interface";
import {StorageViskhanSbank} from "../../utils/utils";
import {forWindow} from "../../utils/mock";

@Component({
  tag: "cnt-flexy-view-viskhan-window-1_01",
  styleUrl: "cnt-flexy-view-viskhan-window.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanWindow implements ComponentInterface {
  /**
   * Данные для Window
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Window
   */
  @Prop() Window: SWindowItems[] = [];

  /**
   * префикс для изображений
   */
  @Prop() pathToAssets: string;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;


  public clickPopUp (event) {
    console.log(event.target)
    if (event.target === this.ourModal){
      this.closeForm.emit()
    }
  };

  componentWillLoad() {
    StorageViskhanSbank.prefix = this.pathToAssets;
  }

  render() {
    /**
     * клик по элементам компонента
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-window
        payload={forWindow}
        pathToAssets={this.pathToAssets}
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
      />
    );
  }
}
