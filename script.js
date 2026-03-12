// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// Animate skill bars when skills section appears
const skillBars = document.querySelectorAll(".bar");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector("#skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

function toggleCertificates(id) {
    const cert = document.getElementById(id);

    if (cert.style.display === "block") {
        cert.style.display = "none";
    } else {
        cert.style.display = "block";
    }
}

