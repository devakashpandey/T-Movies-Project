import { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataFromApi } from "./config/api";

function App() {
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <>
      <h1>AKASH PANDEY</h1>

      <ToastContainer />
    </>
  );
}

export default App;
