import React from "react";

import "./index.css";

const visaMastercard = require("../../assets/img/visa-mastercard.png");
const terminal = require("../../assets/img/terminal.png");
const webmoney = require("../../assets/img/webmoney.png");
const paypal = require("../../assets/img/paypal.png");

const Payment = () => {
  return (
    <div className="container payment">
      <div className="row">
        <div className="col-lg-7">
          <h5 className="payment-h5">Спосіб оплати</h5>
          <div className="row payment-row">
            <div className="col-lg-4 payment-variant">
              <div className="visa">
                <img
                  className="visa-img"
                  src={visaMastercard}
                  alt="visa-mastercard"
                />
              </div>
              <div className="payment-title">Карта Visa/Mastercard</div>
            </div>
            <div className="col-lg-4 payment-variant active-payment">
              <div className="privat">
                <p className="privat-title">ПриватБанк</p>
              </div>
              <div className="payment-title">Приват24</div>
            </div>
            <div className="col-lg-4 payment-variant">
              <div className="visa">
                <img
                  className="terminal-img"
                  src={terminal}
                  alt="visa-mastercard"
                />
              </div>
              <div className="payment-title">Термінали України</div>
            </div>
          </div>
          <div className="row payment-donw-row">
            <div className="col-lg-4 payment-variant">
              <div className="visa">
                <img
                  className="webmoney-img"
                  src={webmoney}
                  alt="visa-mastercard"
                />
              </div>
              <div className="payment-title">WebMoney</div>
            </div>
            <div className="col-lg-4 payment-variant">
              <div className="privat">
                <img
                  className="paypal-img"
                  src={paypal}
                  alt="visa-mastercard"
                />
              </div>
              <div className="payment-title">PayPal</div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="col-lg-5 card-box">
          <h5 className="payment-h5">Введіть наступні дані</h5>
          <div className="payment-cart">
            <p className="card-title">Номер карти</p>
            <div className="card-form">
              <form>
                <div className="row card-number">
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control card-number-feild"
                      aria-label="card"
                      id="card-1"
                      maxLength={4}
                      minLength={4}
                      required
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control card-number-feild"
                      aria-label="card"
                      id="card-2"
                      required
                      maxLength={4}
                      minLength={4}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control card-number-feild"
                      aria-label="card"
                      id="card-3"
                      required
                      maxLength={4}
                      minLength={4}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control card-number-feild"
                      aria-label="card"
                      id="card-4"
                      required
                      maxLength={4}
                      minLength={4}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="card-title">Термін дії</p>
                    <input
                      type="password"
                      className="form-control validity"
                      aria-label="validity"
                      id="validity"
                      maxLength={4}
                      minLength={4}
                      required
                    />
                  </div>
                  <div className="col-6 cvv-box">
                    <p className="card-title">CVC/CVV</p>
                    <input
                      type="password"
                      className="form-control CVV"
                      aria-label="CVV"
                      id="CVV"
                      maxLength={3}
                      minLength={3}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
