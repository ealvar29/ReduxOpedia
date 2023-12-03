import { useState } from "react";
import Header from "./app/layout/Header";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/DestinationList";
import DestinationFact from "./app/components/DestinationFact";
import ResetApp from "./app/components/ResetApp";

function App() {
  return (
    <>
      <div>
        <Header />
        <ResetApp />
        <Counter />
        <div className="p-4 text-center">
          <h4 className="text-green-400">Destination List</h4>
          <DestinationList />
          <DestinationFact />
        </div>
      </div>
    </>
  );
}

export default App;
