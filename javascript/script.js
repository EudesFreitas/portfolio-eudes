 const button = document.getElementById("toggleTheme");
  const html = document.documentElement;

  button.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.removeAttribute("data-theme");
      button.textContent = "🌙";
    } else {
      html.setAttribute("data-theme", "dark");
      button.textContent = "☀️";
    }
  });