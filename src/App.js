import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import Login from "./pages/login/Login";
import VinSearch from "./pages/vin-search/VinSearch";

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}>
          <Route path="/vin-search" element={<VinSearch />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
