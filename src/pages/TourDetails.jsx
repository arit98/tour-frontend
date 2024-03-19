import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import { CiStar } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import {
  FaDollarSign,
  FaLocationDot,
  FaMapLocationDot,
  FaStar,
} from "react-icons/fa6";
import ImgAvatar from "../assets/images/avatar.jpg";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import NewsLetter from "../components/NewsLetter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { data: tour, loading } = useFetch(`${BASE_URL}/tours/${id}`);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { photo, title, address, desc, price, city, maxGroupSize, reviews } =
    tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    if (tourRating < 1) {
      toast.warn("Please select any rating", { position: "top-center" });
    }

    try {
      if (!user || user === undefined || user === null) {
        toast.warn("Please sign in", { position: "top-center" });
      }

      const reviewObj = {
        username: user?.data.username,
        reviewText,
        rating: tourRating,
      };

      const res = await axios.post(`${BASE_URL}/review/${id}`, reviewObj);
      if (!res.statusText == "Ok") {
        toast.error(`Review not submitted`, { position: "top-center" });
      }
      toast.info(`${reviewText} ${tourRating}`, { position: "top-center" });
    } catch (error) {
      console.log("albal");
    }
  };

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const submitHandlerBookNow = (e) => {
    e.preventDefault();

    console.log(credentials);
    navigate("/thank-you");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-lg">
        {/* Placeholder for tour image */}
        <div className="w-full h-80"></div>

        {/* Placeholder for tour details */}
        <div className="p-8">
          <div className="h-4 w-1/4 mb-4 bg-gray-300"></div>
          <div className="h-6 w-full mb-4 bg-gray-300"></div>
          <div className="h-6 w-full mb-4 bg-gray-300"></div>
          <div className="h-6 w-full mb-4 bg-gray-300"></div>
          <div className="h-6 w-full mb-4 bg-gray-300"></div>
          <div className="h-16 w-full mb-4 bg-gray-300"></div>
        </div>

        {/* Placeholder for reviews */}
        <div className="p-8">
          <h4 className="text-xl font-semibold mb-2 bg-gray-300">
            Reviews (0) reviews
          </h4>
          {/* Placeholder for review form */}
          <div className="mb-4 bg-gray-300">
            <div className="h-10 w-3/4 mb-2 bg-gray-300"></div>
            <div className="h-10 w-full mb-2 bg-gray-300"></div>
          </div>
          {/* Placeholder for sample reviews */}
          <div className="flex items-start mt-4 mb-4 bg-gray-300">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="flex flex-col w-full ml-4">
              <div className="h-4 w-1/4 mb-2 bg-gray-300"></div>
              <div className="h-6 w-full mb-2 bg-gray-300"></div>
              <div className="h-6 w-full mb-2 bg-gray-300"></div>
              <div className="h-6 w-full mb-2 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex items-start mb-4 bg-gray-300">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="flex flex-col w-full ml-4">
              <div className="h-4 w-1/4 mb-2 bg-gray-300"></div>
              <div className="h-6 w-full mb-2 bg-gray-300"></div>
              <div className="h-6 w-full mb-2 bg-gray-300"></div>
              <div className="h-6 w-full mb-2 bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Placeholder for booking form */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="w-1/4 h-8 bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
              <div className="h-8 w-12 bg-gray-300"></div>
            </div>
          </div>
          <div className="w-full mb-4 bg-gray-300">
            <div className="h-10 w-full mb-2 bg-gray-300"></div>
            <div className="h-10 w-full mb-2 bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-between mb-4 bg-gray-300">
            <div className="h-8 w-1/4 bg-gray-300"></div>
            <div className="h-8 w-1/4 bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-between mb-4 bg-gray-300">
            <div className="h-8 w-1/4 bg-gray-300"></div>
            <div className="h-8 w-1/4 bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-between bg-gray-300">
            <div className="h-8 w-1/4 bg-gray-300"></div>
            <div className="h-8 w-1/4 bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="mt-20 flex justify-between px-16 py-4 gap-8">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-start justify-center flex-col">
            <img className="rounded-lg" src={photo} alt="" srcset="" />

            <div className="flex items-start justify-start w-full flex-col border-2 rounded-lg px-12 py-8 mt-8 text-sm">
              <h2 className="text-xl font-semibold">{title}</h2>

              <div className="flex items-center gap-5 flex-col">
                <span className="flex items-center justify-between w-full gap-12 mt-2">
                  <span className="flex items-center justify-center gap-1">
                    <CiStar />
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not Rated"
                    ) : (
                      <span>({reviews ? reviews.length : 0})</span>
                    )}
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaMapLocationDot />
                    {address}
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-center gap-12">
                <span className="flex items-center justify-center gap-1 mt-2">
                  <FaLocationDot />
                  {city}
                </span>
                <span className="flex items-center justify-center">
                  <FaDollarSign />
                  {price} per person
                </span>
                <span className="flex items-center justify-center gap-1 mt-2">
                  <MdPeople />
                  {maxGroupSize}
                </span>
              </div>

              <span className="flex items-start justify-center flex-col mt-8 gap-2">
                <h2 className="text-xl font-semibold">Description</h2>
                <p>{desc}</p>
              </span>
            </div>

            <div className="mt-8 border-2 w-full px-12 py-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">
                Reviews ({tour.reviews ? reviews.length : 0}) reviews
              </h4>

              <form onSubmit={submitHandler}>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-amber-300"
                    onClick={() => setTourRating(1)}
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-amber-300"
                    onClick={() => setTourRating(2)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-amber-300"
                    onClick={() => setTourRating(3)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-amber-300"
                    onClick={() => setTourRating(4)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-amber-300"
                    onClick={() => setTourRating(5)}
                  />
                </div>

                <div className="flex items-center w-full border-2 py-2 px-2 rounded-full">
                  <input
                    type="text"
                    ref={reviewMsgRef}
                    className="px-2 w-full outline-none"
                    placeholder="Share your thoughts"
                    required
                  />
                  <input
                    type="submit"
                    className="px-4 py-2 bg-teal-500 rounded-full text-white select-none cursor-pointer outline-none"
                    value="Submit"
                  />
                </div>
                {reviews?.map((review) => {
                  return (
                    <div
                      className="h-12 flex items-start mt-12 mb-4"
                      key={review.id}
                    >
                      <div className="w-12 h-12">
                        <img src={ImgAvatar} alt="" />
                      </div>
                      <span className="flex items-start justify-center flex-col w-full">
                        <p className="font-bold">{review.username}</p>
                        <span className="flex items-center justify-between w-full">
                          <p className="font-light text-sm">
                            {review.createdAt}
                          </p>{" "}
                          <span className="flex items-center gap-[.5px] text-amber-400">
                            {review.rating}
                            <FaStar />
                          </span>
                        </span>
                        <p className="mt-2">{review.reviewText}</p>
                      </span>
                    </div>
                  );
                })}
              </form>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-fit border-2 rounded-lg">
          <form onSubmit={submitHandlerBookNow}>
            <div className="px-4 py-10 w-full">
              <span className="flex items-center justify-between">
                <p className="">
                  <span className="text-2xl font-bold">${price}</span>/per
                  person
                </p>
                <span className="flex items-center gap-1">
                  <FaStar className="text-amber-400" />
                  <span className="flex items-center justify-center gap-1">
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not Rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>
                </span>
              </span>
              <hr className="mt-6" />
              <div className="w-full px-8 mt-4">
                <p className="text-xl font-semibold">Information</p>
                <div className="px-4 py-6 flex items-center justify-around flex-col gap-4 border-2 rounded-lg mt-2">
                  <input
                    onChange={handleChange}
                    className="w-full px-2 outline-none border-b-2"
                    type="text"
                    placeholder="Full Name"
                    id="fullName"
                  />
                  <input
                    onChange={handleChange}
                    className="w-full px-2 outline-none border-b-2"
                    type="number"
                    placeholder="Phone"
                    id="phone"
                  />
                  <span className="flex items-center gap-2">
                    <input
                      onChange={handleChange}
                      className="w-full px-2 outline-none border-b-2"
                      type="date"
                      id="bookAt"
                    />
                    <input
                      onChange={handleChange}
                      className="w-1/2 px-2 outline-none border-b-2"
                      type="number"
                      placeholder="Guest"
                      id="guestSize"
                    />
                  </span>
                </div>
              </div>

              <div className="px-3 mt-8 flex items-stretch justify-center flex-col gap-4">
                <span className="flex items-center justify-between">
                  <p>$99 x 1 person</p>
                  <p>$99</p>
                </span>
                <span className="flex items-center justify-between">
                  <p>Service charge</p>
                  <p>${serviceFee}</p>
                </span>
                <span className="flex items-center justify-between font-bold">
                  <p>Total</p>
                  <p>${totalAmount}</p>
                </span>
                <input
                  type="submit"
                  className="w-full bg-teal-400 rounded-full py-2 mt-4 text-white cursor-pointer outline-none"
                  value="Book Now"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default TourDetails;
