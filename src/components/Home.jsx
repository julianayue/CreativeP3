import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./img/bull_dog.jpeg')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Bouledogue Français</h1>
            <p>
              Welcome to the page of the best dog breed ever. We present to you 'FRENCH BULL DOGS'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
