import React, { useState, useEffect } from "react";
import api from "./services/api";

function App() {
  const [showOverlay, setShowOverlay] = useState();
  const [pensionnaires, setPensionnaires] = useState();

  const [nom, setNom] = useState("");
  const [espece, setEspece] = useState("");
  const [age, setAge] = useState("");
  const [apparence, setApparence] = useState("");

  const AddVisitOverlay = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = await api.post("/pensionnaire/", nom);

      // Vous pouvez effectuer d'autres actions avec les valeurs du formulaire
      console.log("Formulaire soumis avec les données :", nom);
    };
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-20 rounded-md text-center relative max-h-[80vh] overflow-y-auto">
          <button
            className="absolute top-0 right-0 p-2 cursor-pointer"
            onClick={() => setShowOverlay(false)}
          >
            X
          </button>

          <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              required
            />

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    );
  };

  const getPensionnaires = async () => {
    const response = await api.get(`/pensionnaire`);
    setPensionnaires(response.data);
  };

  useEffect(() => {
    getPensionnaires();
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex">
          <main className="overflow-y-scroll w-full">
            <h1>lvzfrbshgdhvgbkx</h1>
            <AddVisitOverlay />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
