import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-2xl md:text-3xl font-['Lexend'] font-semibold">
          Send us a message
        </h1>
        <p className="sm:text-xs md:text-sm text-gray-600">
          Please fill out the form below, and we'll be in touch, shortly.
        </p>
      </header>
      <main className="flex-grow">
        <form className="flex flex-col gap-3">
          <div className="flex w-full flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="p-2 rounded-3xl"
              placeholder="Aman"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="p-2 rounded-3xl"
              placeholder="aman@example.com"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              className=" h-[10rem] md:h-[14rem] p-2 rounded-3xl flex-grow "
              placeholder="Type your message here......."
            ></textarea>
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded-3xl">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactForm;
