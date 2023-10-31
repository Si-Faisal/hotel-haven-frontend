import {Link} from "react-router-dom";
import Button from "../../../../components/ui/button";
import STATUS from "../../../../constants/STATUS";

interface Location {
  map: {
    lat: number;
    lng: number;
  };
  thumbnailURL: string;
  location: string;
}

interface Hotel {
  address: Location;
  _id: string;
  managerId: string;
  name: string;
  photoURL: string;
  description: string;
  availableRoom: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  feedback?: string;
}
type ViewHotelProps = {
  hotel: Hotel;
};

const ViewHotel: React.FC<ViewHotelProps> = ({hotel}) => {
  const {name, photoURL, address, availableRoom, description, status, _id} =
    hotel;

  return (
    <div>
      <h2 className="text-center">Hotel</h2>
      <div
        className={`${status == STATUS.PENDING ? "bg-orange-200" : ""} ${
          status == STATUS.REJECTED ? "bg-red-200" : ""
        }`}>
        <div className="flex my-4 flex-col gap-10 items-center border border-secondary-200 rounded-lg shadow md:flex-row dark:border-secondary-700 ">
          <img
            className=" rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={photoURL}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary-900 dark:text-white">
              Name: {name}
            </h5>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Available Room: {availableRoom}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Location: {address.location}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Location URL: {address.thumbnailURL}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Latitude: {address.map.lat}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Longitude: {address.map.lng}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Description: {description}
            </p>
            <div className="lg:flex gap-2">
              <Button
                className={`${
                  hotel.status === STATUS.PENDING
                    ? "bg-orange-400"
                    : hotel.status === STATUS.REJECTED
                    ? "bg-red-500"
                    : ""
                }`}>
                Edit hotel
              </Button>
              <Link to={_id}>
                <Button>Details</Button>
              </Link>
            </div>
          </div>
        </div>
        {hotel?.feedback && <p>Feedback: {hotel?.feedback}</p>}
      </div>
    </div>
  );
};

export default ViewHotel;