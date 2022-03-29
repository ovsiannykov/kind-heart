import React from "react";

import "./index.css";

const Form = () => {
  const uploadFile = (e) => {
    e.preventDefault();
    const element = document.getElementById("upload");
    element.click();
  };

  return (
    <div className="form-component">
      <form>
        <div className="container">
          <div className="row">
            {/* Left section */}
            <div className="col-lg">
              <div className="row margin-fields">
                <div className="col">
                  <label for="name" class="form-label">
                    Ім'я
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    id="name"
                    required
                  />
                </div>
                <div className="col-lg">
                  <label for="last-name" class="form-label">
                    Прізвище
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Last name"
                    id="last-name"
                    required
                  />
                </div>
              </div>
              <div className="organization mr-top-10">
                <div className="row">
                  <label for="organization-name" class="form-label">
                    Назва організації
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="First name"
                      id="organization-name"
                      required
                    />
                  </div>
                  <div className="col-lg-2">
                    <input id="upload" type="file" />
                    <a href="#" onClick={uploadFile} className="upload-link">
                      + Логотип
                    </a>
                  </div>
                </div>
              </div>
              <div className="email margin-fields mr-top-10">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="mail"
                  className="form-control"
                  aria-label="email"
                  id="email"
                  required
                />
              </div>
              <div className="phone margin-fields mr-top-10">
                <label for="phone" class="form-label">
                  Номер телефону
                </label>
                <input
                  type="phone"
                  className="form-control"
                  aria-label="phone"
                  id="phone"
                  required
                />
              </div>
            </div>
            {/* Right section */}
            <div className="col-lg">2 of 2</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
