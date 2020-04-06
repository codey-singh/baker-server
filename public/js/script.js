/*
 *
 * @author Bhajanpreet Singh
 * @description minimal js functionality to run accordions
 * and code to get year from current date
 * */

(function () {
  //Code for current year in the span.year
  var element = document.querySelector("span.year");
  element.textContent = new Date().getFullYear();

  //Code for accordion
  var accordions = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $(".bt").on("click", () => {
    $(".navigation").toggle("slow", function () {
      // Animation complete.
    });
  });

  $(".buy").on("submit", (event) => {
    alert("Order successful Payment is on delivery!");
    event.target.submit();
  });
})();
function increase(id) {
  let element = $("#qty_" + id);
  let data = +element.html();
  if (data !== 10) {
    data++;
  }
  if (data === 10) {
    alert("You cant order more than 10 items of one type");
  }
  element.html(data);
}

function decrease(id) {
  let element = $("#qty_" + id);
  let data = +element.html();
  if (data !== 0) {
    data--;
  }
  if (data === 1) {
    let conf = confirm("Do you want to remove this item?");
    if (conf) {
      $(`div_${id}`).remove();
    }
  }
  element.html(data);
}

function goTo(path) {
  window.location.href = path;
}
