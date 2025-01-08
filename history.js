// Scroll Animation for Monuments
document.addEventListener("scroll", () => {
    const monuments = document.querySelectorAll(".monument");
    const triggerBottom = window.innerHeight * 0.8;
  
    monuments.forEach((monument) => {
      const top = monument.getBoundingClientRect().top;
  
      if (top < triggerBottom) {
        monument.classList.add("active");
      }
    });
  });
  
  // Parallax Effect
  document.addEventListener("scroll", () => {
    const monuments = document.querySelectorAll(".monument");
    monuments.forEach((monument) => {
      const depth = monument.getAttribute("data-depth");
      const offset = window.pageYOffset * depth * 0.1;
      monument.style.transform = `translateY(${offset}px)`;
    });
  });
  
  // Interactive Map Placeholder
  document.getElementById("map").addEventListener("click", () => {
    alert("Interactive map functionality is a placeholder for demonstration.");
  });
  