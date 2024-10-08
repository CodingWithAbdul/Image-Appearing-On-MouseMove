// Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.body.querySelector(".box").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    var images = [
      "https://images.pexels.com/photos/23223610/pexels-photo-23223610/free-photo-of-head-of-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/27241058/pexels-photo-27241058/free-photo-of-puffin-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/28672757/pexels-photo-28672757/free-photo-of-two-ducks-swimming-among-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/28743445/pexels-photo-28743445/free-photo-of-sea-turtle-swimming-under-sunlit-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/18147350/pexels-photo-18147350/free-photo-of-close-up-pn-meerkat-standing-in-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ];

    function image() {
      var arr = Math.floor(Math.random() * 5);
      return arr;
    }

    var ab = image();

    var div = document.createElement("div");
    // console.log(div);
    div.classList.add("imagediv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";
    document.body.append(div);

    var img = document.createElement("img");
    img.setAttribute("src", images[ab]);
    // img.setAttribute("src",`${images[Math.floor(Math.random() * images.length)]}`);  ye trick jo abhi function k sath code chal rha hay us say ziyada better hay.

    div.appendChild(img);

    gsap.to(img, {
      y: "0",
      ease: Power2,
    });
    gsap.to(img, {
      y: "100%",
      ease: Power2,
      delay: 0.5,
    });

    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 400)
);
