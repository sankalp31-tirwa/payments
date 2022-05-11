import React from "react";
import { useState } from "react";
import Image from "next/image";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Maintourdetail = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  // console.log("Start", startDate);
  // console.log("End", EndDate);

  const [No_ofAdult, setNo_ofAdult] = useState(null);
  const [Children, setChildren] = useState(null);
  const [No_Ofdays, setNo_Ofdays] = useState("");

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  console.log(Message);

  function handleAddrNo_Ofdays(e) {
    setNo_Ofdays(e.target.value);
    // console.log(No_Ofdays);
  }

  return (
    <div className="w-full">
      <div className="mt-7 flex flex-col px-8 shadow-lg ">
        <h1 className="text-2xl font-bold text-blue-900">BOOK TOUR WITH US</h1>
        <p className="py-3 text-lg">
          Any Tour Related Issue? Feel Free To Contact Us.
        </p>
      </div>

      <section
        className="text-gray-600 body-font z-0 "
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://static.toiimg.com/photo/88689758/88689758.jpg?v=3")`,
        }}
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <form className=" rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Your Name"
                    onChange={(event) => setName(event.target.value)}
                    value={Name}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    // id="grid-first-name"
                    type="tel"
                    placeholder="+91-"
                    onChange={(event) => setPhone(event.target.value)}
                    value={Phone}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    // id="email"
                    type="email"
                    placeholder="xyz@gmail.com"
                    onChange={(event) => setEmail(event.target.value)}
                    value={Email}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    No of Days and Nights
                  </label>
                  <select
                    defaultValue={No_Ofdays}
                    onChange={handleAddrNo_Ofdays}
                    // id="cart-type"
                    // name="cart-type"
                    // autoComplete="country-name"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option selected value="">
                      Select No. of Days/Nights
                    </option>
                    <option value="01 Day/Night">01 Day/Nights</option>
                    <option value="02 Days/Nights">02 Days/Nights</option>
                    <option value="03 Days/Nights">03 Days/Nights</option>
                    <option value="04 Days/Nights">04 Days/Nights</option>
                    <option value="05 Days/Nights">05 Days/Nights</option>
                    <option value="06 Days/Nights">06 Days/Nights</option>
                    <option value="07 Days/Nights">07 Days/Nights</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Date of Arrival
                  </label>
                  <DatePicker
                    minDate={new Date()}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Date of Departure
                  </label>
                  <DatePicker
                    minDate={new Date()}
                    selected={EndDate}
                    onChange={(date) => setEndDate(date)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    No. of Adults
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    onChange={(event) => setNo_ofAdult(event.target.value)}
                    value={No_ofAdult}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Children Below 5 yrs
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    onChange={(event) => setChildren(event.target.value)}
                    value={Children}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    // id="message"
                    onChange={(event) => setMessage(event.target.value)}
                    value={Message}
                  ></textarea>
                  {/* <p className="text-gray-600 text-xs italic">
                        Re-size can be disabled by set by resize-none / resize-y
                        / resize-x / resize
                      </p> */}
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
              Welcome{" "}
            </h2>
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/Large_Gautama_Buddha_statue_in_Buddha_Park_of_Ravangla%2C_Sikkim.jpg"
                alt="Picture of the author"
                width="368px"
                height="547px"
              />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maintourdetail;
