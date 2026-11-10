// Mobile navigation toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

// Newsletter sign-up.
// With no mailing-list service connected yet, this opens a pre-filled email
// to Kate. To use a provider (Mailchimp, Buttondown, etc.), set the form's
// `action` to the provider's endpoint and remove the data-mailto attribute.
(function () {
  var form = document.querySelector(".signup[data-mailto]");
  if (!form) return;
  var status = form.querySelector(".status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var email = form.querySelector("input[type=email]").value.trim();
    var to = form.getAttribute("data-mailto");
    var subject = "Newsletter sign-up";
    var body = "Please add " + email + " to the Write of Hand newsletter.";
    window.location.href =
      "mailto:" + to +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    if (status) status.textContent = "Thanks! Your email app should open so you can send the request.";
  });
})();

// Footer year
(function () {
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
