// Initialize the timeline with a default duration for later sections
var tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

// Speed up .navbar h4 animations
tl.from(".navbar h4", {
  y: -10,
  opacity: 0,
  duration: 0.3, // Faster animation duration for navbar items
  stagger: 0.1, // Faster stagger for a quick cascading effect
});

// Speed up lefthero section (h1 and p tag inside it)
tl.from(".lefthero h1", {
  x: -30,
  opacity: 0,
  duration: 0.4, // Faster animation for h1
})
  .from(
    ".lefthero p",
    {
      x: -30,
      opacity: 0,
      duration: 0.4, // Faster animation for paragraph
      // markers: true,
    },
    "-=0.2",
  ) // Slight overlap for smooth transition
  .from(
    ".cloneme",
    {
      scale: 0.7,
      opacity: 0,
      duration: 0.4, // Faster animation for button
      // markers: true,
    },
    "-=0.2",
  );

// Keep the rest of the animations at a visible pace
tl.from(".righthero img", {
  x: 30,
  opacity: 0,
  duration: 1.2, // Emphasis with a slightly longer duration
});
gsap.from(".projectshowcase .project", {
  scrollTrigger: {
    trigger: ".projectshowcase",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 30, // Small upward motion
  opacity: 0, // Fades in
  duration: 0.8,
  stagger: 0.2, // Staggers the animation
});

// Projects Animation
gsap.from(".projects .project", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    // markers: true, // Uncomment to see trigger points
  },
  y: 30,
  opacity: 0,
  stagger: 0.3,
});

// Blog Animation
gsap.from(".blog", {
  scrollTrigger: {
    trigger: ".third", // Trigger at the third section
    start: "top 80%", // Trigger when top of the section is 75% from viewport top
    end: "bottom 20%", // End animation when bottom of section reaches 20% from viewport top
    toggleActions: "play none none reverse", // Play when scrolled into view, reverse out
  },
  y: 30, // Slide each .blog up 30px into place
  opacity: 0, // Start fully transparent
  duration: 0.8, // Animation duration
  stagger: 0.3, // Delay each .blog by 0.3s for cascading effect
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
