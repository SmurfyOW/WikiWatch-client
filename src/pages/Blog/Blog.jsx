import { useEffect, useState } from "react";
import Card from "../../components/Common/Card";
import { getBlogsFromApi } from "../../api/blog.api";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await getBlogsFromApi();
        setBlogs(response);
      } catch (error) {
        console.log(error);
      }
    };

    getAllBlogs();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
