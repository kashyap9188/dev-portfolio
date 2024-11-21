// Reviews.jsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { reviews } from "../constants";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });

  const cardsToShow = isTabletOrMobile ? 1 : isLaptop ? 2 : 2;

  const checkNumber = (number) => {
    if (number >= reviews.length) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - cardsToShow;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => checkNumber(index + cardsToShow));
  };

  const prevReview = () => {
    setIndex((index) => checkNumber(index - cardsToShow));
  };

  return (
    <section id="reviews" className="relative text-white z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Reviews
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="text-white" style={{ fontSize: 30, textAlign: "center" }}>
        What Our <span className="text-gradient">Client</span> Say
      </div>

      <div className="flex justify-center space-x-4 overflow-hidden">
        {reviews.slice(index, index + cardsToShow).map((review, i) => {
          const { id, name, occupation, photo, review: text } = review;

          return (
            <AnimatePresence key={id}>
              <motion.article
                initial={{ opacity: 0, x: i === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: i === 0 ? 100 : -100 }}
                transition={{ duration: 0.5 }}
                className="review max-w-xl mt-8 px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
              >
                <div className="img-container relative">
                  <img
                    src={photo}
                    alt={name}
                    className="person-img w-16 h-16 rounded-full mx-auto object-cover"
                  />
                  <span className="quote-icon absolute top-0 right-0 text-teal-400">
                    <FaQuoteRight size={24} />
                  </span>
                </div>
                <h4 className="author text-xl font-semibold">{name}</h4>
                <p className="job text-sm text-gray-400 text-gradient mt-2">{occupation}</p>
                <p className="info text-gray-300 mt-2">{text}</p>
              </motion.article>
            </AnimatePresence>
          );
        })}
      </div>

      <div className="button-container flex justify-center space-x-4 mt-8">
        <motion.button
          className="prev-btn p-2 bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={prevReview}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </motion.button>
        <motion.button
          className="next-btn p-2 bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={nextReview}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </section>
  );
};

export default Reviews;
