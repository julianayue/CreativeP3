import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./img/3.webp')}
              alt=""
            />
            <p>
              RUNNNNN sexy baby... XD
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              The French Bulldog, French: Bouledogue Français, is a French breed of companion dog or toy dog. 
              It appeared in Paris in the mid-nineteenth century, apparently the result of cross-breeding of 
              Toy Bulldogs imported from England and local Parisian ratters.
              It is commonly kept as a pet, and is among the most frequently registered dogs in a number of 
              countries including Australia, the United Kingdom and the United States.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
