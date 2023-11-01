import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import LazyLoad from "react-lazy-load";

interface Hotel {
  _id: number;
  name: string;
  location: string;
  description: string;
  photoURL: string;
  rating: number;
}

const Hotel: React.FC<Hotel> = ({
  location,
  name,
  photoURL,
  rating,
  description,
  _id,
}) => {
  return (
    <div className="content-to-animate">
      <div className=" bg-white h-full border border-secondary-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <LazyLoad>
          <img className="rounded-t-lg w-full h-80" src={photoURL} alt="" />
        </LazyLoad>
        <div className="p-5">
          <h3 className="py-2">{name}</h3>
          <p className="py-2">Location: {location}</p>
          <p className="py-2 text-sm">{description}</p>
          <p className="py-2">Rating: {rating}</p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <Link to={`/hotel/${_id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
