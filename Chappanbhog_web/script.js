const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const header = $("#header");
const topBtn = $("#topBtn");
const progress = $("#scrollProgress");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
  topBtn.classList.toggle("show", window.scrollY > 500);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
});

$("#topBtn").addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

$("#menuBtn").addEventListener("click", () => $("#navbar").classList.toggle("open"));

$$(".navbar a").forEach(link => {
  link.addEventListener("click", () => $("#navbar").classList.remove("open"));
});

const sections = $$("main section[id]");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  $$(".navbar a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
});

$("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  $("#themeBtn").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark");$("#themeBtn").textContent="☀";}

$$(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    $$(".food-card").forEach(card => card.classList.toggle("hide", filter !== "all" && card.dataset.category !== filter));
  });
});

$$(".heart").forEach(btn => btn.addEventListener("click", () => {
  btn.classList.toggle("liked");
  btn.textContent = btn.classList.contains("liked") ? "♥" : "♡";
}));

const modal = $("#loginModal");
$("#loginBtn").addEventListener("click", () => modal.classList.add("show"));
$("#closeModal").addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("show"); });

$("#loginForm").addEventListener("submit", e => {
  e.preventDefault();
  $("#formMessage").textContent = "User login successful!.";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:.12});
$$(".reveal").forEach(el => observer.observe(el));
