import React from "react";
import { useSelector, useDispatch } from "react-redux";

function DestinationFact() {
  const selectedDestination = useSelector(
    (state) => state.destinationStore.destinationSelected
  );
  if (selectedDestination == undefined) {
    return (
      <div className="text-center pt-4 text-red-400">Select a Destination</div>
    );
  } else {
    return (
      <div className="text-center p-3 m-3">
        <h4 className="text-green-400">{selectedDestination.name}</h4>
        Days Recommended: {selectedDestination.days} <br />
        Fun Fact: {selectedDestination.fact}
      </div>
    );
  }
}

export default DestinationFact;
