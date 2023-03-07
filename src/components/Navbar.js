import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { xs: "40px", sm: "122px" },
        mt: { xs: "20px", sm: "32px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: "none", color: "#3a1212", borderBottom:"3px solid #ff2625" }}>
          Home{" "}
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;