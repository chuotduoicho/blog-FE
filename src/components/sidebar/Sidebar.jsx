import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const URL = "https://blog-api-cq03.onrender.com/api";
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
          src="https://firebasestorage.googleapis.com/v0/b/ductai-blog-a0d36.appspot.com/o/BAB70512-4250-4B36-B355-C39A7A6D6FE1.jpeg?alt=media&token=1c698294-4dcb-4f6f-b12a-5d35cafa713a"
          alt=""
        />
        <p>Welcome to my blog. My name is Tai. I am a software engineer 💖</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <Link to={`/?cat=${c.name}`} className="link" key={index}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
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
      </div>
    </div>
  );
}
