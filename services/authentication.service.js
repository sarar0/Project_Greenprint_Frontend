import decode from "jwt-decode";

function setToken(token) {
  localStorage.setItem("jwtToken", token);
}
