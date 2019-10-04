import React from "react";
import MenuButton from "./MenuButton";
import logo from "../images/fola.svg";

const styles = {
  header: {
    display: "flex",
    alignItems: "top",
    minHeight: "3rem",
    width: "100%",
    color: "blanchedalmond",
  },
  logo: {
    width: "4rem",
    height: "2.5rem",
    margin: ".5rem .75rem",
  },
};

export default function Header() {
  return (
    <header style={styles.header}>
      <MenuButton />
      <img src={logo} style={styles.logo} alt="logo" />
    </header>
  );
}
