import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SongProvider } from "./context/Song";
import AllRoutes from "./AllRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SongProvider>
          <AllRoutes />
        </SongProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
