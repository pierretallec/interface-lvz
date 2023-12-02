import React, { useState, useEffect } from "react";
import api from "./services/api";

function App() {
  const [pensionnaires, setPensionnaires] = useState();

  const getPensionnaires = async () => {
    const response = await api.get(`/pensionnaire`);
    setPensionnaires(response.data);
  };

  const putPensionnaires = async () => {
    const response = await api.put(`/pensionnaire`);
  };

  useEffect(() => {
    getPensionnaires();
    putPensionnaires();
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex">
          <main className="overflow-y-scroll w-full">
            <h1>lvzfrbshgdhvgbkx</h1>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
