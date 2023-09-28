import "./App.css";
import axios from "axios";

function App() {
  const hanldeSubmit = async (e) => {
    e.preventDefault();

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE1YzU2MzgzNzU4M2JhMzc3Yjk0ZjgiLCJyb2xlcyI6WyJjdXN0b21lciJdLCJpYXQiOjE2OTU5MjYzODIsImV4cCI6MTY5NTkyOTk4Mn0.OvcI_DxYHZjBPujlmx4hyAAtK8V4-Gw4c4OvU-h5osY";
    try {
      const res = await axios.get("http://localhost:4000/auth/me", { headers: { Authorization: `Bearer ${token}` } });

      console.log(res, "response");
      console.log(res.data, "response and data");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <button onClick={hanldeSubmit}>Ok</button>
    </>
  );
}

export default App;
