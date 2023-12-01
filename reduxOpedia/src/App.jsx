import { useState } from "react";
import Header from "./app/layout/Header";
import Counter from "./app/components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Counter />
      </div>
    </>
  );
}

export default App;
