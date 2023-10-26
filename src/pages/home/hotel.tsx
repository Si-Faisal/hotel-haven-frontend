import Button from "../../components/ui/button";

interface Hotel {
  _id: number;
  title: string;
  location: string;
  description: string;
  thumbnailURL: string;
  rating: number;
}

const Hotel: React.FC<Hotel> = ({
  location,
  title,
  thumbnailURL,
  rating,
  description,
}) => {
  return (
    <>
      <div className="bg-white max-h-full mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
        <a href="#">
          <img className="rounded-t-lg w-full h-80" src={thumbnailURL} alt="" />
        </a>
        <div className="p-5">
          <h3 className="py-2">{title}</h3>
          <p className="py-2">Location: {location}</p>
          <p className="py-2 text-sm">{description}</p>
          <p className="py-2">Rating: {rating}</p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <Button size="sm">See More</Button>
        </div>
      </div>
    </>
  );
};

export default Hotel;
