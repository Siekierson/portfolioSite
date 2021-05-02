const playOnHover = () => {
  const vids = document.querySelectorAll(".singleProj>video");
  vids.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      item.play();
    });
    item.addEventListener("mouseout", function (e) {
      item.pause();
    });
  });
};
export default playOnHover;
