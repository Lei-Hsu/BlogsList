import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>筆記Blogs</h1>
      <div className="link">
        <Link to="/create">新增筆記</Link>
      </div>
    </div>
  );
}

export default Navbar;
