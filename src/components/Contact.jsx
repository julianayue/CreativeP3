import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./img/2.webp')} 
              alt=""
            />
            <p>
              Look at this handsome boyyyyyy....
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">How to help</h1>
            <p>
              Please sign up to rescue dogs!!
            </p>
            <button>
                <a href = "https://houndsinpounds.com/?gclid=Cj0KCQjwnvOaBhDTARIsAJf8eVM9pYoT9VsobgEOZaUVLbcNHLRh8CVK-dvFXyctUEVpxWfNIlKkjqMaAgw0EALw_wcB">Press here!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


