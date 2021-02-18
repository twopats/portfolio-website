import React from "react";
//Styling
import styled from "styled-components";

//Emailsjs
import emailjs from "emailjs-com";
//Images
import workbg from "../images/workbg.jpg";

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2l7iewm",
        "template_kc0suun",
        e.target,
        "user_3NhDSw1LGBmaatDusHC0t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <ContactsStyled id="contact">
      <div className="heading">
        <h1>Get In Touch</h1>
        <div className="line"></div>
        <h2>
          Have a project idea in mind or just want to say hi? Just send me a
          message!
        </h2>
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail} autoComplete="new-password">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              name="email"
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="form-group">
            <input
              type="text-area"
              className="form-control message-input"
              placeholder="Enter a message."
              name="message"
              size="200"
              maxLength="500"
            />
          </div>
          <input className="submit-button" type="submit" value="Send Message" />
        </form>
      </div>
    </ContactsStyled>
  );
};

export default Contacts;

const ContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background: #1b1b1b; */
  background-repeat: no-repeat;
  background-image: url(${workbg});
  .heading {
    margin-top: 2rem;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .line {
      margin: 10px 0 0 0;
      width: 200px;
    }
    h1 {
      margin: 0.7rem 0;
      font-size: 3.5rem;
      color: #f3f3f3;
      /* color: #464648; */
      text-transform: uppercase;
      text-shadow: 0 0 3px #f9f9f9;
      letter-spacing: 5px;
      z-index: 100;
      text-align: center;
    }
    h2 {
      margin-top: 2rem;
      width: 400px;
      text-align: center;
      font-size: 17px;
      font-family: "Roboto", sans-serif;
      color: #f3f3f3;
      text-shadow: 1px 1px 3px black;
      font-weight: lighter;
      /* letter-spacing: px; */
      @media (max-width: 768px) {
        width: 80%;
      }
    }
  }

  //clear

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    padding: 3rem 2rem;
    border-radius: 16px;
    margin-bottom: 2rem;
    width: 70%;

    form {
      font-family: "Gotham", sans-serif;
      margin: 0;
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .form-group {
      width: 100%;
      margin: 0.5rem 0;
      display: flex;
      justify-content: center;
    }
    .form-control {
      width: 90%;
      height: max-conent;
      margin: 1rem;
      border: none;
      background: transparent;
      border-bottom: 2px solid #a0a0a0;
      outline: none;
      font-size: 24px;
      color: white;
      text-shadow: 1px 1px 5px grey;
      transition: all 0.5s ease;
      justify-self: center;
      align-self: center;
      max-height: 10rem;

      &::placeholder {
        color: white;
        text-shadow: 1px 1px 5px grey;
      }
      &:focus,
      &:hover {
        border-bottom: 2.5px solid #10c9da;
      }
    }
    .message-input {
      height: max-content;
      overflow: hidden;
    }
    .submit-button {
      margin-top: 1rem;
      cursor: pointer;
      padding: 0.8rem 3rem;
      border-radius: 5px;
      border: none;
      background: transparent;
      box-shadow: 1px 1px 10px rgba(209, 209, 209, 0.3);
      background: #10c9da;
      color: white;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: bolder;
      letter-spacing: 1px;
      font-family: "Gotham", sans-serif;
      outline: none;
      transition: all 0.1s ease;
      &:hover {
        background: #12dcee;
      }
    }

    @media (max-width: 768px) {
      padding: 3rem 0rem;
      width: 100%;
      h2 {
        width: 80%;
      }
    }
  }
`;
