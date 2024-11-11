var tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

tl.from(".projectHeading", {
  x: -5,
  opacity: 0,
  duration: 0.4,
});
tl.from(".navbar h4", {
  y: -10,
  opacity: 0,
  duration: 0.3, // Faster animation duration for navbar items
  stagger: 0.1, // Faster stagger for a quick cascading effect
});
gsap.utils.toArray(".project").forEach((project) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top 80%", // Trigger animation as each project reaches 80% of the viewport
      toggleActions: "play none none reverse",
    },
    y: 30, // Slight upward movement
    opacity: 0, // Fade-in effect
    duration: 0.5,
    stagger: 0.1,
  });
});

// Cursor Animation Setup
const cursor = document.querySelector(".cursor");

// Initial cursor setup with GSAP
gsap.set(cursor, {
  xPercent: -50,
  yPercent: -50,
});

// Smooth cursor animation
gsap.to(
  {},
  {
    duration: 0.001,
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });
    },
  },
);

// Track mouse position
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Define dark background elements
const darkElements = document.querySelectorAll(
  ".btn1, .btn2, .btn3, .btn4, .cloneme, .navbar, .projectbtn ",
);

// Add listeners for dark background elements
darkElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    // Change cursor image on hover
    cursor.style.backgroundImage =
      "url('https://daks2k3a4ib2z.cloudfront.net/5e87e737ee7085b9ba02c101/5e8a4a62ab1cf8419ea62647_cursor-pointer%402x.png')";
    // Ensures the image fits within the cursor element
  });

  element.addEventListener("mouseleave", () => {
    // Revert cursor to default style when leaving element
    cursor.style.backgroundImage = "";
  });
});

// Hide cursor when leaving window
document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

// Show cursor when entering window
document.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});

// Click animation
document.addEventListener("mousedown", () => {
  gsap.to(cursor, {
    duration: 0.2,
    scale: 0.8,
    ease: "power2.out",
  });
});

document.addEventListener("mouseup", () => {
  gsap.to(cursor, {
    duration: 0.2,
    scale: 1,
    ease: "power2.out",
  });
});
