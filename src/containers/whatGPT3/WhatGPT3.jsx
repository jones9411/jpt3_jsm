import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.scss";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam molestias ab a sit nihil voluptas perferendis ut beatae! Soluta nihil non, voluptatem itaque, pariatur, vel minus reiciendis mollitia est impedit enim! Ducimus blanditiis nisi sequi? Maiores ad sunt aliquam magnam."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chat-bots"
        text=" Maiores aliquid debitis blanditiis fugit maxime est laborum tempora laboriosam tenetur vel."
      />
      <Feature
        title="Knowledge base"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquid debitis blanditiis fugit maxime est laborum tempora laboriosam tenetur vel."
      />
      <Feature
        title="Education"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquid  est laborum tempora laboriosam tenetur vel."
      />
    </div>
  </div>
);
export default WhatGPT3;
