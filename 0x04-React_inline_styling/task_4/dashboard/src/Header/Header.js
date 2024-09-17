import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#282c34",
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  logo: {
    height: "40vmin",
    pointerEvents: "none"
  }
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
