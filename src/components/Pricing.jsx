import React from "react";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";
import styles from "../style";

// Component to render each feature in a plan
const FeatureItem = ({ feature, isEnabled }) => {
  return (
    <div className={`flex items-center ${!isEnabled ? "text-gray-500 " : ""}`}>
      {isEnabled ? (
        <span className="text-teal-200 mr-2">✔</span>
      ) : (
        <span className="mr-2">✘</span>
      )}
      <span>{feature}</span>
    </div>
  );
};

// Card component for each pricing plan
const PricingPlanCard = ({ planName, discount, price, features, enabledFeatures }) => {
  return (
    <motion.div
      className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
        {planName}
      </h4>
      <p className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px]">
        {discount}
      </p>
      <p className="font-poppins font-semibold text-[24px] text-white my-4">
        ${price}
      </p>

      <div>
        <ul className="font-poppins text-dimWhite text-[14px]">
          {features.map((feature, index) => (
            <li key={index} className="my-2">
              <FeatureItem
                feature={feature}
                isEnabled={enabledFeatures.includes(index)}
              />
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => window.location.href = "#contact"} className="bg-teal-200 text-black font-semibold py-2 px-5 mt-4 rounded-md hover:bg-teal-300">
        Choose Package
      </button>
    </motion.div>
  );
};

const Pricing = () => {
  const allFeatures = [
    "Website Design",
    "Mobile Apps Design",
    "Responsive Design",
    "Performance Testing",
    "Cloud Storage Integration",
    "Custom Support",
  ];

  const basicPlanEnabledFeatures = [0, 1, 2];
  const standardPlanEnabledFeatures = [0, 1, 2, 3, 4, 5];
  const premiumPlanEnabledFeatures = [0, 1, 2, 3, 4, 5];

  return (
    <section id="pricing" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Pricing Plans
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="text-white" style={{ fontSize: 30, textAlign: "center" }}>
        Amazing <span className="text-gradient">Pricing</span> For Your Projects
      </div>

      <div className={`${styles.flexCenter} flex-col relative mb-4`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          <PricingPlanCard
            planName="Basic Plan"
            discount="Try Out Basic Plan Save 20%"
            price="19.95"
            features={allFeatures}
            enabledFeatures={basicPlanEnabledFeatures}
          />
          <PricingPlanCard
            planName="Standard Plan"
            discount="Save 30% on Standard Plan"
            price="29.95"
            features={allFeatures}
            enabledFeatures={standardPlanEnabledFeatures}
          />
          <PricingPlanCard
            planName="Premium Plan"
            discount="Save 40% on Premium Plan"
            price="49.95"
            features={allFeatures}
            enabledFeatures={premiumPlanEnabledFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
