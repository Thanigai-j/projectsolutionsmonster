$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});
/*
$(function () {
  $(".dropdown").on("click", function (e) {
    $(".content-wrapper").addClass("overlay");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
    }
  });
});

$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});


$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".login-popup .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".login-popup").addClass("visible");
});

$(".login-popup .close").click(function () {
  $(".login-popup").removeClass("visible");
});

*/

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});







document.getElementById('coversion-form').addEventListener('click', convertor);

function convertor(e) {

  let input_type = document.getElementById('input-type').value;
  let output_type = document.getElementById('output-type').value;
  let input_value = document.getElementById('input-value').value;
  let dif = parseInt(output_type) - parseInt(input_type);
  let sign;
  if ((dif) == 0) {
    document.getElementById('output-value').innerHTML = input_value;

  }
  else if (dif > 0) {
    sign = 1;
  }
  else {
    sign = 0;
  }
  if (dif != 0) {
    switch (input_type) {

      case "1":
        convert(input_value, 8, Math.abs(dif), sign);
        break;
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        convert(input_value, 1024, Math.abs(dif), sign);
        break;


    }
  }
}
function convert(value, factor, n, sign) {
  let a = Math.pow(1000, n - 1);
  let ans;
  console.log(n);
  if (sign == 1) {
    ans = value / (factor * a);
  }
  else {
    ans = value * (factor * a);
  }
  document.getElementById('output-value').innerHTML = ans;
}



const upload = document.querySelector(".svg-circleplus");
upload.addEventListener("click", () => {
  // console.log("Work");
  const uplink = "./upload.html";

  window.open(uplink, "_self");

})













function ytdown() {
  let x = document.getElementById("inlink").value;
  // document.getElementById("txt").innerHTML = x;

  const myArray = x.split("=");
  const vid = myArray['1'];
  const slink = "https://save.tube/download/video/https%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253D";
  const golink = slink + vid;
  window.open(golink, "_blank");

}


function login() {


  const loglink = "./login.html";

  window.open(loglink, "_blank");

}




let uploadBlock = document.querySelector("body > div.app > div.wrapper > div.main-container > div.content-wrapper > div:nth-child(4) > ul");
console.log(uploadBlock);

/*
<li class="adobe-product">
        <div class="products">
          
         <img style="height: 28px;; width: 28px; margin-right: 0.8rem;" src="">
         App
        </div>
        <span class="status">
         <span class="status-circle green"></span>
         Latest</span>
         <div class="button-wrapper">
         <a href=""> <button class="content-button status-button">Download</button></a>
          
         </div>
       </li>

*/

function upt() {
  uploadBlock.innerHTML += `<li class="adobe-product">
  <div class="products">
    ${"ftt"}
   <img style="height: 28px;; width: 28px; margin-right: 0.8rem;" src="">
   App
  </div>
  <span class="status">
   <span class="status-circle green"></span>
   Latest</span>
   <div class="button-wrapper">
   <a href="${"ghjhg"}"> <button class="content-button status-button">Download</button></a>
   </div>
  </li>`
}