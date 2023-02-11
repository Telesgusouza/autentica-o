import { BrowserRouter, Routes, Route } from "react-router-dom";

import AccountEnter from "../components/AccountEnter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountEnter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
