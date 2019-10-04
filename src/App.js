import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const styles = {
  app: {
    color: "black",
    backgroundColor: "#FAEBD7",
  },
};
function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
