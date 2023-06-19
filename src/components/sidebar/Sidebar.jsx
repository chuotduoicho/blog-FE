import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const URL = "https://ductai-blog-react-323c877a5194.herokuapp.com/api";
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
            <img
              src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png"
              alt="logo"
              className="icon"
            />
          </a>
          <a href="https://twitter.com/vo1122000">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4628/4628695.png"
              alt="logo"
              className="icon"
            />
          </a>
          <a href="https://pin.it/1Ieb9uE">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4628/4628665.png"
              alt="logo"
              className="icon"
            />
          </a>
          <a href="https://www.instagram.com/elnino.112/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4628/4628656.png"
              alt="logo"
              className="icon"
            />
          </a>
        </div>
        <img
          src="https://i.ibb.co/3R61Gmx/352785252-999730611193915-388522473267027213-n-1-removebg-preview.png"
          alt="logo"
          className="logo"
        />
      </div>
    </div>
  );
}
