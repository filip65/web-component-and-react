import "./App.css";
import "./web";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setInterval(() => {
      setToken(Math.random().toString());
    }, 2000);
  }, []);

  return (
    <>
      <my-chat token={token}></my-chat>
    </>
  );
}

export default App;
