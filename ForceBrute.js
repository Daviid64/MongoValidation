// testForceBruteLogin.js
import axios from "axios";

const testLoginBruteForce = async () => {
  const URL = "http://localhost:5000/api/auth/login";

  const payload = {
    email: "david.oguihandy@gmail.com",
    password: "David1234"
  };

  for (let i = 1; i <= 1000000; i++) {
    try {
      const response = await axios.post(URL, payload, {
        withCredentials: true,
      });
      console.log(`Tentative ${i}:`, response.data.message);
    } catch (error) {
      if (error.response) {
        console.log(`Tentative ${i}:`, error.response.status, error.response.data.message);
      } else {
        console.error(`Tentative ${i}: Erreur inconnue`, error.message);
      }
    }
  }
};

testLoginBruteForce();