import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch(`https://blogsserver.herokuapp.com/detail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);
  const handleClick = (e) => {
    e.preventDefault();
    fetch(`https://blogsserver.herokuapp.com/detail/${id}`, {
      method: "DELETE",
    });
    window.location.replace("/");
  };
  const handleLikeClick = (e) => {
    e.preventDefault();
    fetch(`https://blogsserver.herokuapp.com/detail/${id}`, {
      method: "PUT",
    });
    window.location.replace("/");
  };
  //修改區
  const [oldBlogs, setOldBlogs] = useState();
  useEffect(() => {
    fetch(`https://blogsserver.herokuapp.com/detail/${id}`)
      .then((res) => res.json())
      .then((blogs) => setOldBlogs(blogs));
  }, [blogs, id]);
  const [change, setChange] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const blogs = { title, content };
    fetch(`https://blogsserver.herokuapp.com/detail/${id}/change`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogs),
    });
    window.location.replace("/");
  };
  return (
    <>
      {blogs && (
        <div className="navbar">
          <div className="link">
            <Link to="/">主頁</Link>
          </div>
          <div className="contentArea">
            <h1>{blogs.title}</h1>
            <p>{blogs.content}</p>
            <div className="btnArea">
              <button className="deleteBtn" onClick={handleLikeClick}>
                Like
              </button>
              <div>
                <button
                  className="deleteBtn"
                  onClick={() => setChange(!change)}
                >
                  修改
                </button>
                <button
                  className="deleteBtn"
                  style={{ marginLeft: "5px" }}
                  onClick={handleClick}
                >
                  刪除
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {change || (
          <div className="form">
            <input
              className="inputTitle"
              key={oldBlogs.title}
              type="text"
              onChange={handleInputTitle}
              defaultValue={oldBlogs.title}
            />
            <textarea
              className="textarea"
              key={oldBlogs.content}
              cols="30"
              rows="10"
              onChange={handleInputContent}
              defaultValue={oldBlogs.content}
            ></textarea>
            <div className="checkBox">
              <button className="createBtn" onClick={handleChange}>
                確認修改
              </button>
              <Link to="/">取消</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
