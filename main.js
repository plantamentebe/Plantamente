// Efeito scroll
window.addEventListener('scroll', () => {
  const elementos = document.querySelectorAll('.scroll-animar');
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add('aparecer');
    }
  });
});
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({ trigger: ".pin-section", start: "top top", end: "bottom top", pin: true, scrub: 1 });
gsap.from(".card", {
  y: 100, opacity: 0, stagger: 0.3,
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
