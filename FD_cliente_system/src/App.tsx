import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import {ProtectedRoute} from "../src/protected/ProtectedRoute"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
