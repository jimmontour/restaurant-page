(() => {
  const e = document.querySelector("#content");
  (document.createElement("div").innerHTML = "Test"), e.appendChild("div");
})();
