import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useReactQueryMutation } from "./mutate";

const ids = [1, 2];

function App() {
  const [id, setId] = useState(null);
  const { mutate } = useReactQueryMutation();

  return (
    <>
      <input
        placeholder="new id"
        type="number"
        onChange={(e) => setId(parseInt(e.target.value, 10))}
      />
      <button onClick={() => mutate(id)}>post</button>
    </>
  );
}

export default App;
