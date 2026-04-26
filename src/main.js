const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
const scrollBtn = document.getElementById("scrollToTopBtn");
// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.transform = "scale(1)";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.transform = "scale(0)";
  }
});
// Scroll to top smoothly when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
gsap.registerPlugin(ScrollTrigger);
// Helper function to apply gsap.from/to animations to all elements with the same class
function animateFromClass(className, fromVars, toVars) {
  gsap.utils.toArray(`.${className}`).forEach((el) => {
    gsap.fromTo(el, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: toVars.scrollTrigger?.start || "top 80%",
        toggleActions:
          toVars.scrollTrigger?.toggleActions || "play none none none",
      },
    });
  });
}
// box1
animateFromClass(
  "box1",
  { duration: 1, y: 50, opacity: 0, ease: "power2.out" },
  { duration: 1, y: 0, opacity: 1, ease: "power2.out" }
);
// box2
gsap.utils.toArray(".box2").forEach((el) => {
  gsap.fromTo(
    el,
    { rotation: 0, scale: 0.5, opacity: 0 },
    {
      duration: 1.5,
      rotation: 360,
      scale: 1,
      opacity: 1,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
// box3 - looping animation
gsap.utils.toArray(".box3").forEach((el) => {
  gsap.to(el, {
    duration: 1,
    scale: 1.2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play pause resume pause",
    },
  });
});
// box4
animateFromClass(
  "box4",
  { duration: 1, x: 100, opacity: 0, ease: "back.out(1.7)" },
  { duration: 1, x: 0, opacity: 1, ease: "back.out(1.7)" }
);
// box5
gsap.utils.toArray(".box5").forEach((el) => {
  gsap.fromTo(
    el,
    { x: 0 },
    {
      duration: 0.1,
      x: 10,
      yoyo: true,
      repeat: 5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
// box6
gsap.utils.toArray(".box6").forEach((el) => {
  gsap.fromTo(
    el,
    { scale: 0.6, rotation: 15, opacity: 0 },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
// box7
gsap.utils.toArray(".box7").forEach((el) => {
  gsap.fromTo(
    el,
    { rotation: 0, y: 0, opacity: 0 },
    {
      rotation: 360,
      y: -30,
      opacity: 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play pause resume pause",
      },
    }
  );
});
// box8
gsap.utils.toArray(".box8").forEach((el) => {
  gsap.fromTo(
    el,
    { scale: 0.7, y: -20, rotation: -10, opacity: 0 },
    {
      scale: 1,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
// box9
gsap.utils.toArray(".box9").forEach((el) => {
  gsap.to(el, {
    x: 30,
    rotation: 10,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play pause resume pause",
    },
  });
});
// box10
gsap.utils.toArray(".box10").forEach((el) => {
  gsap.fromTo(
    el,
    { x: -100, opacity: 0, scale: 1 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
// box12
animateFromClass(
  "box12",
  { opacity: 0 },
  { opacity: 1, duration: 0.3, delay: 0.5, ease: "power1.inOut" }
);
gsap.utils.toArray(".box11").forEach((el, i) => {
  gsap.fromTo(
    el,
    {
      transformPerspective: 800,
      opacity: 0,
      scale: 0.5,
      rotationY: 90,
      transformOrigin: "center center",
      z: -200,
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      ease: "power3.out",
      delay: i * 0.3, // تأخير متزايد لكل عنصر (0.3 ثانية مثلاً)
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: function () {
        gsap.set(el, {
          transform: `translateZ(${this.targets()[0]._gsap.z}px) rotateY(${
            this.targets()[0]._gsap.rotationY
          }deg) scale(${this.targets()[0]._gsap.scale})`,
        });
      },
    }
  );
});
gsap.utils.toArray(".step").forEach((step, i) => {
  gsap.from(step, {
    opacity: 0,
    y: 50 * (Math.random() > 0.5 ? 1 : -1), // حركة عشوائية صعود أو هبوط
    duration: 1,
    delay: i * 0.3,
    ease: "power3.out",
  });
});
gsap.fromTo(
  "#animatedSection",
  { scale: 2, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
);
