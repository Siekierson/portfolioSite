const all = document.getElementById("all");
const loadItem = document.getElementById("loader");
function loader() {
  all.style.display = "none";
  setTimeout(showPage, 1500);
}

function showPage() {
  all.style.display = "block";
  loadItem.style.opacity = 0;
  setTimeout(() => (loadItem.style.display = "none"), 2000);
}
