function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
(function () {
  emailjs.init("ILuQ6IdFvsmUNMJpD"); // Replace with your EmailJS user/public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_1bm3nar", "template_4ljwkbs", this).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed to send message. Please try again later.");
      console.log(error);
    }
  );
});
