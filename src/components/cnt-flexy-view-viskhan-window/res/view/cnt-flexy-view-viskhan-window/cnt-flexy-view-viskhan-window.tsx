import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from '@stencil/core';
import {SWindowItems} from "../interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-window',
  styleUrl: 'cnt-flexy-view-viskhan-window.css',
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
   * Клик по Input
   */
  @Event() clickWindowInput: EventEmitter;

  /**
   * Клик по Search
   */
  @Event() clickWindowSearch: EventEmitter;

  /**
   * Клик по USD
   */
  @Event() clickWindowUSD: EventEmitter;

  /**
   * Клик по GBP
   */
  @Event() clickWindowGBP: EventEmitter;

  /**
   * Клик по JPY
   */
  @Event() clickWindowJPY: EventEmitter;

  /**
   * Клик по NZD
   */
  @Event() clickWindowNZD: EventEmitter;

  /**
   * Клик по INR
   */
  @Event() clickWindowINR: EventEmitter;

  /**
   * Клик по EUR
   */
  @Event() clickWindowEUR: EventEmitter;

  /**
   * Клик по PYG
   */
  @Event() clickWindowPYG: EventEmitter;

  /**
   * Клик по EUP
   */
  @Event() clickWindowEUP: EventEmitter;

  /**
   * Клик по ZAR
   */
  @Event() clickWindowZAR: EventEmitter;

  /**
   * Клик по Text
   */
  @Event() clickWindowText: EventEmitter;

  /**
   * Клик по Circle
   */
  @Event() clickWindowCircle: EventEmitter;

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

  render() {
    return (
      <div class="window">
        <div class="dis" onClick={ (event) => this.clickPopUp(event)} ref={(el) => this.ourModal = el}>
        </div>
        <div class="modaleWindow">
          <div class="container cont">
            <div class="row justify-content-center">
              <div class="col-auto">
                <div class="my-window">
                  <input
                    class="my-input"
                    type="text"
                    placeholder={this.payload[0].enter}
                    onClick={() => this.clickWindowInput.emit("Input")}
                  />
                  <div class="search">
                    <i class={this.payload[0].search} aria-hidden="true"
                       onClick={() => this.clickWindowInput.emit("Search")}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-scroll">
              <div class="vor">
                <div class="flag"
                     onClick={() => this.clickWindowUSD.emit("USD")}>
                  <div class="usa" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].usd}</b>
                  </div>
                </div>
                <div class="flag"
                     onClick={() => this.clickWindowGBP.emit("GBP")}>
                  <div class="gbp" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].gbp}</b>
                  </div>
                </div>
                <div class="flag"
                     onClick={() => this.clickWindowJPY.emit("JPY")}>
                  <div class="jpy" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].jpy}</b>
                  </div>
                </div>
              </div>
              <div class="vor">
                <div class="flag"
                     onClick={() => this.clickWindowNZD.emit("NZD")}>
                  <div class="nzd" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].nzd}</b>
                  </div>
                </div>
                <div class="flag"
                     onClick={() => this.clickWindowINR.emit("INR")}>
                  <div class="inr" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].inr}</b>
                  </div>
                </div>
                <div class="flag"
                     onClick={() => this.clickWindowEUR.emit("EUR")}>
                  <div class="eur" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].eur}</b>
                  </div>
                </div>
              </div>
              <div class="vor">
                <div class="flag"
                     onClick={() => this.clickWindowPYG.emit("PYG")}>
                  <div class="pyg" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].pyg}</b>
                  </div>
                </div>
                <div class="flag"
                     onClick={() => this.clickWindowEUP.emit("EUP")}>
                  <div class="eup" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].eup}</b>
                  </div>
                </div>
                <div class="flag"
                     onClick={() => this.clickWindowZAR.emit("ZAR")}>
                  <div class="zar" style={{
                    backgroundImage:
                      "url(" + StorageViskhanSbank.prefix + this.payload[0].url + ")",
                  }}>

                  </div>
                  <div class="country">
                    <b>{this.payload[0].zar}</b>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-4">
                <div class="my-line">
                  <div class="item-line-blue">

                  </div>
                  <div class="item-line">

                  </div>
                  <div class="item-line">

                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="text"
                     onClick={() => this.clickWindowText.emit("Text")}>
                  <b>{this.payload[0].text}</b>
                  <div class="circle"
                       onClick={() => this.clickWindowCircle.emit("Circle")}>
                    <i class={this.payload[0].arrow} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
