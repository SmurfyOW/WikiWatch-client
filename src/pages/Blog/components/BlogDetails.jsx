import { useParams } from "react-router-dom";
import { useBlog } from "../../../context/BlogContext";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  //   console.log(id);
  const { blogs } = useBlog();
  //   console.log(blogs);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const detailDuBlog = blogs.find((e) => e._id === id);
    setDetails(detailDuBlog);
  }, [id, blogs]);

  if (!details) {
    return <p>Chargement ...</p>;
  }

  return (
    <div>
      <h3>{details.titre}</h3>
      <p>{details.texte}</p>
      <div className="w-[300px] h-[300px]">
        <img src={details.image} alt="" />
      </div>
    </div>
  );
}
