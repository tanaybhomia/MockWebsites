// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
gsap.from(".navbar", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".navbar",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    // markers: true, // Uncomment for debugging
  },
});

// Hero Text Animation
gsap.from(".herotxt p", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".herotxt",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// Logos Animation
gsap.from(".logos .logo-img", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".logos",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// About Section Animation
const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutgrid",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

aboutTimeline
  .from(".about", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".abouttxt",
    {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  ); // Slight overlap for better visual effect

// Showcase Section Animation
const showcaseTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".showcase",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

showcaseTimeline
  .from(".showcase .showcasetext", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
  })
  .from(
    ".showcaseimg img",
    {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

// Contact Section Animation
gsap.from(".contact-column", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// Services Section Animation
gsap.from(".service", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".servicesgrid",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// "How We Work" Steps Animation
gsap.from(".steps .step", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".steps",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// Footer Animation
gsap.from(".footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 70%",
    toggleActions: "play none none reverse",
  },
});

// Animations for Influencers page
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Influencers Text Animation
gsap.from(".influencerstxt", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".influencerstxt",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

// Influencer Cards Animation
gsap.from(".influencer", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".influencers",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

// See More Button Animation
gsap.from(".seeMore", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".seeMore",
    start: "top 90%",
    end: "top 70%",
    toggleActions: "play none none reverse",
  },
});

// Request Form Section Animation
const requestTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".request",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
});

requestTimeline
  .from(".address", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".form",
    {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.7"
  )
  .from(
    ".input-field",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".submit-btn",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "-=0.3"
  );

// Footer Animation
const footerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 70%",
    toggleActions: "play none none reverse",
  },
});

footerTimeline
  .from(".socials", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".logo",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );
