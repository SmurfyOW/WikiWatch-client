import Carte from "../../components/Common/Carte";
import { useBlog } from "../../context/BlogContext";

export default function Blog() {
  const { blogs } = useBlog();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Carte key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
