import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Chat = ({ token }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Token: {token}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Click {counter}
      </button>
    </div>
  );
};

export default Chat;
