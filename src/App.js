import React from "react";
import Payment from "./components/Payment";
import Context from "./context";

const App = () => {
  return (
    <div>
      <Context>
        <Payment />
      </Context>
    </div>
  );
};

export default App;
