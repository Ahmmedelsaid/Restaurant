import React, { Fragment } from "react";
import Header from "./header/Header";
import "./home.css";
import { Carousel } from "react-bootstrap";
import ph1 from "../1.jpg";
import ph2 from "../2.jpg";
function Home() {
  return (
    <Fragment>
      <Header></Header>
      <section className="details">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1547+</h2>
              <h6>Savings</h6>
            </div>
            <div className="col-md-3">
              <h2>1879+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1587+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>1973+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="images/1.png" alt=""></img>
              </div>
              <div className="col-md-6">
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="foodera">
        <div className="container">
          <div className="row">
            <div className="x col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="col-md-6">
              <img src="images/2.png" alt=""></img>
            </div>
          </div>
        </div>
      </section>
      <section className="watch">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no <br></br> difference
                whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio <br></br> finibus bibendum in sit amet leo.
                Mauris feugiat erat tellus.
              </p>
              <h6>Watch Our Story</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="col-lg-12 col-md-12">
                <h1>Testimonials</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={ph1} alt="" />
                  <Carousel.Caption>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <span>Maccy Doe-Front End Developer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ph2} alt="" />

                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <span>Jonathan Doe-UX Designer</span>{" "}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="que">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>Is Foodera Bread really baked fresh each day?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h3> Do you bake breads containing animal fats or products?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>~ Can I order your products online?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h3>~ When are you opening a shop near me?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
