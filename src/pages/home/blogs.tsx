import Button from "../../components/ui/button";

// import React from "react";
interface Blogs {
  thumbnail: string;
  title: string;
  authorName: string;
  authorProfile: string;
  publishDate: string;
  description: string;
}

const Blogs: React.FC<Blogs> = ({
  thumbnail,
  title,
  authorName,
  authorProfile,
  publishDate,
  description,
}) => {
  // console.log(title);
  return (
    <>
      <div className=" bg-white p-2 mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
        <figure>
          <img className="h-full rounded-t-2xl" src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h5 className="py-2">{title}</h5>
          <p className="pb-4">{description}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <div>
                <img
                  className="rounded-full w-9 h-9"
                  src={authorProfile}
                  alt=""
                />
              </div>
              <div className="flex-col items-center">
                <div className="badge badge-outline">{authorName}</div>
                <div className="badge badge-secondary">{publishDate}</div>
              </div>
            </div>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;