import React from "react";
import { serviceData } from "../constants";

const ServicesCard = ({ image, tags, title }) => {
  return (
    <div className="services-card">
      <img src={image} alt={title} />
      <h2 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      data-aos="fade-right"
      className="services-container relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
      name="services"
      id="services"
    >
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Services
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="text-white" style={{fontSize: 30, textAlign: 'center'}}>
      <span className="text-gradient"> Innovative Solutions </span>For Your Business Developement
      </div>
      <div className="services-cards">
        {serviceData &&
          serviceData?.map(({ title, icon, tags }, index) => (
            <ServicesCard
              key={index}
              image={icon.asset.url}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
