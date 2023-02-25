import { BrowserRouter, Routes, Route } from "react-router-dom";

import AccountEnter from "../pages/AccountEnter";
import ConfigUser from "../pages/ConfigUser";
import {RouteWrapper} from "../RouteWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <RouteWrapper isPrivate={false}> <AccountEnter /> </RouteWrapper>} />
          <Route path="/home" element={ <RouteWrapper isPrivate={true}> <ConfigUser /> </RouteWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
