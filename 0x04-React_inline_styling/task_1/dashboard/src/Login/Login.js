import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  margin: {
    margin: "20px"
  }
});

function Login() {
  return (
    <React.Fragment>
      <p className={css(styles.margin)}>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input>
        <button>OK</button>
      </form>
    </React.Fragment>
  );
}

export default Login;
