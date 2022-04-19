import { useContext, useState } from "react";
import "./write.css";
import FileBase64 from "react-file-base64";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { Context } from "../../context/Context";
const URL = "https://ductai-blog.herokuapp.com/api";
export default function Write() {
  const [title, setTitle] = useState("none");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const { user } = useContext(Context);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, title);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            setPhoto(url);
            console.log(url);
            const newPost = {
              username: user.username,
              title,
              desc,
              photo: url,
            };
            try {
              const res = axios.post(`${URL}/posts`, newPost);
              window.location.replace("/post/" + res.data._id);
            } catch (err) {}
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    //   try {
    //     await axios.post(`${URL}/upload`, data);
    //   } catch (err) {}
    // }
  };
  return (
    <div className="write">
      <img className="writeImg" src={url} alt="" />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          {/* <FileBase64
            multiple={false}
            type="file"
            onDone={({ base64 }) => setPhoto(base64)}
          /> */}
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
