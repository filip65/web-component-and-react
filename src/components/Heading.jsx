import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Heading = ({ text }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My heading: {text}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click: {count}
      </button>
    </div>
  );
};

export default Heading;
