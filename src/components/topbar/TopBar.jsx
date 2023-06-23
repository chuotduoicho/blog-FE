import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link" to="/">
          <img
            src="https://i.ibb.co/3R61Gmx/352785252-999730611193915-388522473267027213-n-1-removebg-preview.png"
            alt="logo"
            className="logo"
          />
        </Link>
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
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <p>{user.username}</p>
            <Link to="/settings">
              <img
                className="topImg"
                src={
                  user.profilePic ||
                  "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                }
                alt=""
              />
            </Link>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
