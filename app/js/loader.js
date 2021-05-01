function loader() {
  document.getElementById("all").style.display = "none";
  const myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("all").style.display = "block";
}
