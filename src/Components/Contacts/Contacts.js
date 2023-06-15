import "./Contacts.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Inputs from "./Inputs";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6pqfant",
        "template_kci1607",
        form.current,
        "Afo4OvP_Pfi4IiF35"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully 🔥");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container">
        <div id="contacts">
          <h2 className="contacts-title text-center" data-aos="fade">
            Contact Me
          </h2>
          <form
            className="contact-form d-flex flex-column align-items-center justify-center"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Name input */}
            <div className="form-group w-75 mb-4 row">
              <div className="form-holder mx-auto">
                <Inputs
                  forLabel="name"
                  labelClass="d-block fw-bold"
                  label="Name"
                  type="text"
                  id="name"
                  inputClass="col-sm-12 w-100"
                  name="user_name"
                />
              </div>
            </div>
            {/* Email input */}
            <div className="form-group w-75 mb-4 row">
              <div className="form-holder mx-auto">
                <Inputs
                  forLabel="email"
                  labelClass="d-block fw-bold"
                  label="Email"
                  type="email"
                  id="email"
                  inputClass="col-sm-12 w-100"
                  name="user_email"
                />
              </div>
            </div>
            {/* Subject input */}
            <div className="form-group w-75 mb-4 row">
              <div className="form-holder mx-auto">
                <Inputs
                  forLabel="subject"
                  labelClass="d-block fw-bold"
                  label="Subject"
                  type="text"
                  id="subject"
                  inputClass="col-sm-12 w-100"
                  name="subject"
                />
              </div>
            </div>
            {/* Message input */}
            <div className="form-group w-75 mb-4 row">
              <div className="form-holder mx-auto">
                <label htmlFor="message" className="d-block fw-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  className="col-sm-12 w-100"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            {/* Submit button */}
            <div className="form-group mb-5">
              <button type="submit" className="submit fw-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
