import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destinationClicked } from "../../redux/slice/destinationSlice";

function DestinationList() {
  const destinationList = useSelector(
    (state) => state.destinationStore.destinations
  );
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row  justify-center">
      {destinationList.map((destination, index) => {
        return (
          <div className="space-between p-2 " key={index}>
            <div>{destination.name}</div>
            <div>
              <button
                className="bg-green-400 rounded-2xl"
                onClick={() => dispatch(destinationClicked(destination))}
              >
                Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DestinationList;
