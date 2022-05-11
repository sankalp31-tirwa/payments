import { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "../../src/contexts/AuthContext";
import { database } from "../../src/utils/init-firebase";
import React, { useEffect, useState } from "react";

import {
  collection,
  getDocFromCache,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

export let slugPrice = 5;
const Post = () => {
  const [slugData, setslugData] = useState({});
  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "NE Developers Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for choosing Us",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYABovmmedfoIrv3zBO7mHaE0ZsacP-NFJrg&usqp=CAU",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      // prefill: {
      //   name: "NE Developer's",
      //   email: "nedevlopers1@gmail.com",
      //   contact: "9894178970",
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const Hero = ({ onClick }) => {
    return (
      <div className="relative z-10 flex flex-col md:flex-row mt-10 items-center  max-w-6xl justify-evenly mx-auto">
        <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4">
          <button
            onClick={onClick}
            className="px-2 bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold"
          >
            Book Now!
          </button>
        </div>
      </div>
    );
  };

  const [Slugdata, setSlugdata] = useState([]);
  const [isLoading, setisLoding] = useState(true);

  const router = useRouter();
  const { slug } = router.query;
  // useEffect(async (slug) => {
  //   await readData(slug);
  // }, []);

  async function writeCartData() {
    var studentsClassroomRef = database
      .collection("users")
      .doc(slugData.uid)
      .collection("Users_cart");

    studentsClassroomRef
      .doc(slugData.id)
      .set({})
      .then(function () {
        console.log("Document Added ");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  async function readData(slug) {
    // const citiesRef = collection(database, "SellercabInfo");
    // const q = query(citiesRef, where("Location", "==", "singtam"));
    // const querySnapshot = await getDocs(q);
    try {
      const docRef = doc(database, "SellercabInfo", slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setslugData(docSnap.data());
        slugPrice = slugData.Price;
        setisLoding(false);
      } else {
        const docRef = doc(database, "SellerBikeInfo", slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setslugData(docSnap.data());
          slugPrice = slugData.Price;
          setisLoding(false);
        }
      }
    } catch (e) {
      console.log(e);
    }

    // setslugData(slugData ? slugData : null);
    // const [slugData, setslugData] = useState(null);

    // console.table(Slugdata);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }

    // console.table(docSnap.data());
    // console.table(querySnapshot);
  }
  // console.log("this", slugPrice);

  // console.table(slugData);
  // console.table(slugData.CabType);

  // console.log("Cechk ok", slugData);
  // const { Price } = slugData;
  // slugPrice = Price;
  // setSlugdata(slugPrice ? slugPrice : 0);
  // console.log("this is cab", slugPrice);

  if (isLoading) {
    return (
      <div>
        <button
          onClick={() => readData(slug)}
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {" "}
          Click To preview
        </button>
        {/* <h1 className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          >Loading...
        </h1> */}
      </div>
    );
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto object-contain object-center rounded"
              src={slugData.ImageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {slug}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {slugData.CabType}
              </h1>
              <div className="flex mb-4">
                {/* <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span> */}
                {/* <span className="w-5 h-5 flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a> 
                </span> */}
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹ {slugData.Price}
                </span>
                <button
                  // onClick={writeCartData}
                  className="flex ml-auto  border-0 py-2 px-6 rounded"
                >
                  <Hero onClick={() => makePayment} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export const { Price } = slugData;
// export const { Price } = slugData;

export default Post;
