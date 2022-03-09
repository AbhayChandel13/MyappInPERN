import React from "react";
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>We are sorry, page not found</h2>
            <p className="mb-5">The page oyu have been looking for might have been removed had its name changed or is temporiarly unavailable.</p>
            <NavLink to="/">Back To Homepage</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
