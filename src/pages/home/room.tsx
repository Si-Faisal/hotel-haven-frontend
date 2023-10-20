import React from "react";
import Rating from "react-rating";

interface RoomProps {
  price: number;
  rating: number;
  image: string;
  // Define other props here
}

const Room: React.FC<RoomProps> = ({ price, rating, image }) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <p>Price: {price}</p>
          </a>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Rating:
            <Rating
              initialRating={rating}
              emptySymbol={<i className="far fa-star" />}
              fullSymbol={<i className="fas fa-star" />}
              readonly
            />
          </p> */}
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Room;