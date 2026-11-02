 // Mobile navigation
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    // Close mobile menu after selecting a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });

    // Automatically update copyright year
    document.getElementById("year").textContent =
      new Date().getFullYear();

    // Reveal sections when they enter the viewport
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(element => {
      revealObserver.observe(element);
    });

    // Animate skill bars
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.dataset.level;
          entry.target.style.width = level + "%";
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".bar-fill").forEach(bar => {
      skillObserver.observe(bar);
    });

    
// Mini move circle
function circleMouseFollower(){
    window.addEventListener("mousemove" , function(dets){
        document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px ,${dets.clientY}px)`;
    })
}
 circleMouseFollower();