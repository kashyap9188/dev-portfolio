// Contact.jsx
import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
import emailjs from "emailjs-com"; // Make sure to install emailjs-com
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate the form
  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone) {
      setError("*Please enter your Name/Email/Phone");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_y7ru2d4",
          "template_mngdgmk",
          e.target,
          "KmSZPx9XXZS2y1pA_"
        )
        .then(
          () => {
            setIsSuccess(true);
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            setError("Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Get in Touch
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
        {/* Left Section: Form (2/3 width) */}
        <div className="flex flex-col p-6 rounded-lg lg:col-span-1 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div
            className="text-white font-semibold mb-4"
            style={{ fontSize: "28px" }}
          >
            Let’s Discuss Your{" "}
            <span className="text-gradient">Next Projects</span>
          </div>
          <p className="text-gray-300 mb-4 ">
            Excited to collaborate and help bring your vision to life. Let’s
            connect and see how we can work together to meet your goals!
          </p>

          <div className="flex items-center text-gray-300 mb-4">
            <FaEnvelope size={20} className="mr-3 text-teal-400" />
            <p>kashyap.freelancing@gmail.com</p>
          </div>
          <div className="flex items-center text-gray-300 mb-4">
            <FaPhoneAlt size={20} className="mr-3 text-teal-400" />
            <p>+91 9825280950</p>
          </div>

          <div className="flex space-x-6 text-teal-500 mt-4">
            <a
              href="https://www.linkedin.com/in/kashyap-rajodiya-6872ba208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kashyap-rajodiya-6872ba208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:kashyap.freelancing@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors duration-300"
            >
              <AiFillMail size={24} />
            </a>
            <a
              href="https://x.com/kashyap9188"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/kashyap_rajodiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/18A7LTL91o/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Info (1/3 width) */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center p-6 rounded-lg transition-colors duration-300 transform border rounded-xl dark:border-gray-700">
          <form onSubmit={handleSubmit} className="w-full text-white">
            {/* Name and Email Group */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="w-full">
                <label className="font-semibold text-gradient" htmlFor="name">
                  Enter Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Kashyap Rajodiya"
                  className="w-full p-2 mt-2 rounded-md bg-transparent border group dark:border-gray-700"
                />
              </div>
              <div className="w-full">
                <label className="font-semibold text-gradient" htmlFor="email">
                  Enter Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kashyap.freelancing@gmail.com"
                  className="w-full p-2 mt-2 rounded-md bg-transparent border group dark:border-gray-700"
                />
              </div>
            </div>

            {/* Phone and Subject Group */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="w-full">
                <label className="font-semibold text-gradient" htmlFor="phone">
                  Enter Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9825280950"
                  className="w-full p-2 mt-2 rounded-md bg-transparent border group dark:border-gray-700"
                />
              </div>
              <div className="w-full">
                <label
                  className="font-semibold text-gradient"
                  htmlFor="subject"
                >
                  Enter Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-2 mt-2 rounded-md bg-transparent border group dark:border-gray-700"
                />
              </div>
            </div>

            {/* Message Alone */}
            <div className="mb-4">
              <label className="font-semibold text-gradient" htmlFor="message">
                Enter Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 mt-2 rounded-md bg-transparent border group dark:border-gray-700"
              ></textarea>
            </div>

            {error && <p className="text-red-300 text-sm">{error}</p>}
            {isSuccess && (
              <p className="text-green-300 text-sm">
                Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 font-semibold text-black rounded-md bg-gradient-to-r from-teal-400 via-teal-500 to-blue-500 hover:bg-gradient-to-l"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
