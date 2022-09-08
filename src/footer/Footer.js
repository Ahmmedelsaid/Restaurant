import React, { Fragment, useEffect } from "react";
import { useRef } from "react";
import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  let inp = useRef();
  useEffect(() => {
    inp.current.placeholder = "Email Address here";
  });

  return (
    <Fragment>
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1>
                Hurry up! Subscribe our newsletter <br></br> and get 25% Off
              </h1>
              <p>Limited time offer for this month. No credit card required.</p>
              <input ref={inp} type="text"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <section className="z">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <ul>
                <li>Register</li>
                <li>Forum</li>
                <li>Affiliciate</li>
                <li>FAQ</li>
              </ul>
              <span>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </span>
              <span>
                {" "}
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </span>
              <span>
                {" "}
                <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>
              </span>
              <span>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </span>
              <p>© 2022. Foodera. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Footer;
