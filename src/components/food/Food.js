import React from "react";
import Data from "../../Data";
import "./food.css";

function Food() {
  let handle = () => {
    let payment = document.querySelector(".payment");
    let payButton = document.querySelector(".blogs button");
    let close = document.querySelector(".payment .close");

    payButton.addEventListener("click", () => {
      payment.style.display = "flex";
    });

    close.addEventListener("click", () => {
      payment.style.display = "none";
    });
  };

  const BlogItem = Data.map((item) => {
    return (
      <div id={item.img} className="col-md-4">
        <div id={item.img} className="box">
          <img id={item.img} src={item.img} alt=""></img>
          <h6 id={item.img}>{item.title}</h6>
          <span id={item.img}>{item.time}</span>
          <h3 id={item.img}>{item.price}</h3>
          <hr></hr>
          <button onClick={handle}>{item.button}</button>
        </div>
      </div>
    );
  });

  return (
    <section className="blogs">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2>Explore Our Food</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
          <div className="row">{BlogItem}</div>
        </div>
      </div>
      <div className="payment">
        <h1>Make Your Order Now</h1>
        <input placeholder="Your Name" type="text"></input>
        <input placeholder="Email Address" type="text"></input>
        <input placeholder="Address" type="text"></input>
        <input placeholder="Zip Code" type="text"></input>
        <input placeholder="Mobile Number" type="text"></input>
        <button>Buy Now</button>
        <span className="close">X</span>
      </div>
    </section>
  );
}

export default Food;
