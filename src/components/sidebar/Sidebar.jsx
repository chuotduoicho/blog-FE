import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const URL = "https://ductai-blog.herokuapp.com/api";
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${URL}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ductai-blog-app.appspot.com/o/avatar.jpg?alt=media&token=f8c7462c-41d8-4246-a2e5-20daab608e6e"
          alt=""
        />
        <p>
          I am an ordinary person who loves beauty and peace. Sports are my
          passion. Can you invite me out for a drink? Nice to have you visit my
          blog!!! 😘
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/duc.tai.12345/">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/vo1122000">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a href="https://pin.it/1Ieb9uE">
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </a>
          <a href="https://www.instagram.com/elnino.112/">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
