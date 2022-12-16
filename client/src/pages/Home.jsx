import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
// import DOMPurify from "dompurify";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${cat}`);
        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero nulla laboriosam error doloremque? Sit saepe reprehenderit, id soluta neque dolor eius? Suscipit quaerat temporibus, voluptate dolorum totam porro quasi.",
  //     img: "https://images.pexels.com/photos/6944884/pexels-photo-6944884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero nulla laboriosam error doloremque? Sit saepe reprehenderit, id soluta neque dolor eius? Suscipit quaerat temporibus, voluptate dolorum totam porro quasi.",
  //     img: "https://images.pexels.com/photos/2132116/pexels-photo-2132116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero nulla laboriosam error doloremque? Sit saepe reprehenderit, id soluta neque dolor eius? Suscipit quaerat temporibus, voluptate dolorum totam porro quasi.",
  //     img: "https://images.pexels.com/photos/12766490/pexels-photo-12766490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero nulla laboriosam error doloremque? Sit saepe reprehenderit, id soluta neque dolor eius? Suscipit quaerat temporibus, voluptate dolorum totam porro quasi.",
  //     img: "https://images.pexels.com/photos/12734294/pexels-photo-12734294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const maxTitleLen = 22;
  const maxDescriptionLen = 570;

  const chooseTitleLength = (title) => {
    if (title.length > maxTitleLen) {
      return title.slice(0, maxTitleLen) + "...";
    }
    return title;
  };

  const chooseDesLength = (description) => {
    if (description.length > maxDescriptionLen) {
      return description.slice(0, maxDescriptionLen) + "...";
    }
    return description;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{chooseTitleLength(post.title)}</h1>
              </Link>
              {chooseDesLength(getText(post?.desc))}
              <Link to={`/post/${post.id}`}>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
