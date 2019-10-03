import React from "react";
import logo from "./images/fola.svg";
import "./App.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  description: {
    maxWidth: "35%",
    fontSize: "1.2rem",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "2rem" }}>Food Oasis Los Angeles</p>

        <section style={styles.container}>
          <article style={styles.description}>
            Food Oasis LALA (FOLA) shows you places to find healthy food in Los
            Angeles - whether you are looking to buy, grow, or need access to
            free food.
          </article>
        </section>
      </header>
    </div>
  );
}

export default App;
