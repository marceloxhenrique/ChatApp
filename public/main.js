const socket = io("ws://localhost:3000");
const button = document.querySelector("button");
const loginSection = document.querySelector("#login");
const signupSection = document.querySelector("#signup");

const signupLink = document.getElementById("signupLink");
signupLink.addEventListener("click", () => {
  loginSection.classList.toggle("dont-show-signup");
  signupSection.classList.toggle("dont-show-signup");
});

const loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", () => {
  loginSection.classList.toggle("dont-show-signup");
  signupSection.classList.toggle("dont-show-signup");
});

const password = document.querySelector("#signupPassword");
const email = document.querySelector("#signupEmail");
const handleSignUp = async (e) => {
  e.preventDefault();

  if (!isValidEmail(email.value) || !isValidPassword(password.value)) {
    alert("Must be a valid email and a password must have at least 6 characters");
  }
  try {
    const result = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    console.log(result);
  } catch (error) {
    console.log("Something ent worng", error);
  }
};

const isValidEmail = (email) => {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmail.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  const validPassword = /^.{6,}/;
  return validPassword.test(String(password));
};

const regiteruse = document.querySelector("#signup");
regiteruse.addEventListener("submit", handleSignUp);

const list = document.getElementById("list");
socket.on("message", (msg) => {
  const newItem = document.createElement("li");
  newItem.textContent = msg;
  list?.appendChild(newItem);
});
