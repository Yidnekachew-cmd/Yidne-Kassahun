import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./components/site/HomePage";
import { ContentProvider } from "./lib/content";

// The admin is only downloaded by people who open /admin.
const AdminPage = lazy(() => import("./admin/AdminPage"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContentProvider>
            <HomePage />
          </ContentProvider>
        }
      />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div className="gradient_bg min-h-screen" />}>
            <AdminPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <ContentProvider>
            <HomePage />
          </ContentProvider>
        }
      />
    </Routes>
  );
}

export default App;
