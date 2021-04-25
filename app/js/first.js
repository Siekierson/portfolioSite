const texts = ["Web pages", "Web apps"];
const h1 = document.querySelector("#first>h1");
// h1.textContent = texts[0];
const switchText = () => {
  let i = 0;
  while (i < 2) {
    setTimeout(() => console.log(texts[i]), 1000);
    i++;
  }
};
export default switchText;
