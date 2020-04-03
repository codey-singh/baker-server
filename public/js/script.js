/*
 *
 * @author Bhajanpreet Singh
 * @description minimal js functionality to run accordions
 * and code to get year from current date
 * */

(function() {
  //Code for current year in the span.year
  var element = document.querySelector("span.year");
  element.textContent = new Date().getFullYear();

  //Code for accordion
  var accordions = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
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
    $(".navigation").toggle("slow", function() {
      // Animation complete.
    });
  });
})();
