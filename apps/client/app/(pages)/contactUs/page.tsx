import React from "react";
import ContactForm from "../../../components/ContactForm";

const page = () => {
  return (
    <div className="pt-[5.5rem] mb-5 px-5 w-full">
      <div className="flex flex-col gap-2.5 ">
        <div className="text-3xl md:text-4xl font-light text-center font-['oswald']">
          Let’s get in touch!
        </div>
        <div className="mb-4 text-lg md:text-xl font-light text-center font-['lexend'] text-gray-600">
          We'd love to hear from you! Reach out with any questions or feedback.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-5 h-full">
        <div className="bg-gray-100 p-2.5 md:p-5 rounded-3xl">
          <ContactForm />
        </div>
        <div className=" flex flex-col gap-5">
          <div className="bg-gray-100 rounded-3xl p-2.5 md:p-5 flex flex-col">
            <span>
              <span className="font-semibold">WhatsApp/Phone:</span> +91
              9113816843
            </span>
            <span>
              <span className="font-semibold">Email:</span>{" "}
              enquiry@picsandpixel.in
            </span>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.001629232203!2d77.61973777562869!3d13.067441048074107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8221296382b755d3%3A0x1289a32728fdb314!2sPics%20and%20Pixel%20Photography!5e0!3m2!1sen!2sus!4v1724231786867!5m2!1sen!2sus"
              className="w-full h-[450px] rounded-3xl"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
