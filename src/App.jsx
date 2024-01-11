import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginWith from "./components/LoginWith";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./Auth/RequireAuth";
import PublicAuth from "./Auth/PublicAuth";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicAuth />}>
          <Route path="/" element={<LoginWith />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
