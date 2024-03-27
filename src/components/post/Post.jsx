import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        {post.photo && (
          <img className="postImg" src={post.photo} alt="" loading="lazy" />
        )}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c, index) => (
              <span className="postCat" key={`postCat-${index}`}>
                {c.name}
              </span>
            ))}
          </div>

          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </Link>
  );
}
