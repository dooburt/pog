import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

import "./styles/app.css";

library.add(faChevronDown);

export default function App() {
  return (
    <>
      <Helmet>
        <title>Pog - Errant servers be gone!</title>
        <meta name="description" content="Errant servers be gone" />
      </Helmet>

      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
