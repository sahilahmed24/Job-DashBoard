import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./pages";
import { AllJobs, Stats, SharedLayout } from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
