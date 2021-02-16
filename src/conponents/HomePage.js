import React from "react";
import { Link } from "react-router-dom";

function HomePage({ blogs }) {
  return (
    <>
      {blogs.map((blogs) => (
        <div key={blogs.id}>
          <h1>
            {blogs.title}
            <span>Likes:{blogs.likes}</span>
          </h1>
          <p>{blogs.content.slice(0, 150)}</p>
          <Link
            to={`/${blogs.id}`}
            style={{
              textDecoration: "none",
              fontSize: "16px",
              color: "#eba7a7",
            }}
          >
            read more...
          </Link>
        </div>
      ))}
    </>
  );
}

export default HomePage;
