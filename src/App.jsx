import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import AuthContext, { AuthProvider } from "./context/authContext";
import { useState } from "react";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
