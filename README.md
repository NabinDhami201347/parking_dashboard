```tsx
import "./App.css";

import { publicApi } from "./api";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { setToken } = useAuth();
  const hanldeSubmit = async (e) => {
    e.preventDefault();

    //  { headers: { Authorization: `Bearer ${token}` } });
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE1YzU2MzgzNzU4M2JhMzc3Yjk0ZjgiLCJyb2xlcyI6WyJjdXN0b21lciJdLCJpYXQiOjE2OTU5MjYzODIsImV4cCI6MTY5NTkyOTk4Mn0.OvcI_DxYHZjBPujlmx4hyAAtK8V4-Gw4c4OvU-h5osY";

    // try {
    //   const res = await publicApi.post("/register", {
    //     name: "Anup Pandey",
    //     email: "anuxssp@sanup.com",
    //     password: "123gdysdbd",
    //   });

    //   console.log(res, "response");
    //   console.log(res.data, "response and data");
    // } catch (error) {
    //   console.log("error", error);
    // }

    try {
      const res = await publicApi.post("/admin", {
        email: "nabindhami14@gmail.com",
        password: "20134444 7",
      });
      setToken(res.data.accessToken);
      console.log(res, "response");
      console.log(res.data, "response and data");
    } catch (error) {
      console.log("error", error.response.data.message);
    }
  };
  return (
    <>
      <button onClick={hanldeSubmit}>Ok</button>
    </>
  );
}

export default App;
```

```tsx
const token = localStorage.getItem("access_token");

const fetchUser = async () => {
  try {
    const res = await privateApi.get("/auth/me");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchUser();
}, [token]);
```
