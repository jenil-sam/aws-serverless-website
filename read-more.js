document.querySelectorAll('.read-more-button').forEach(button => {
  button.addEventListener("click", () => {
    const container = button.closest("div[class^='container-']");
    const text = container.querySelector('.read-more-text');

    text.classList.toggle("show");
    container.classList.toggle("expanded");

    button.textContent = text.classList.contains("show") ? "Read Less" : "Read More";
  });
});
