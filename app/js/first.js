const texts = ["Web pages", "Web apps"];
const h1 = document.querySelector("#first>h1");
function switchText() {
  setTimeout(() => {
    h1.innerHTML = texts[0];
    let i = 1;
    setInterval(() => {
      h1.innerHTML = texts[i];
      i == 1 ? (i = 0) : i++;
    }, 3000);
  }, 1000);
}
export default switchText;
