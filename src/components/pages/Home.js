import React from "react";
import "../../App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        WELCOME TO <br /> DIAMOND MUSIC REPORT
      </div>
      <div className="home-button">
        <Button variant="contained">
          <Link
            to="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            className="clean-link"
          >
            DO NOT CLICK
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
