import React from "react";
import "./header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti
          minus assumenda obcaecati temporibus delectus repudiandae modi impedit
          aut ex labore cumque adipisci consectetur non doloremque quo, ad et
          velit.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="users" />
          <p className="gpt3__header-content__people-text">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai logo image" />
      </div>
    </div>
  );
};

export default Header;
