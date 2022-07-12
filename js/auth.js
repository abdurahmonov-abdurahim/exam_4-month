"use strict";

const token = window.localStorage.getItem("token");

if (!token) {
  window.location.replace("index.html");
}

logoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");

  window.location.replace("index.html");
});