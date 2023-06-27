import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "../index.css";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <Link to="/livestream">
        <button className="livestream-btn">
          <span className="live-icon">
            <LiveTvIcon />
          </span>
          {/*  <span style={{ color: "white" }} className="nav-text">
            Go Live
          </span> */}
        </button>
      </Link>
    </Stack>
  );
};

export default Navbar;
