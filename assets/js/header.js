// promo bar
const promoTrack = document.querySelector(".promo-box");
const promoContent = document.querySelector(".promo-content");
for (let i = 0; i < 2; i++) {
  const clone = promoContent.cloneNode(true);
  promoTrack.appendChild(clone);
}
