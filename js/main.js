window.addEventListener("load", IplDiscord)
window.addEventListener("load", initServerData)
function initServerData() {
  console.log('https://mcapi.us/server/status?ip=' + 'play.imperialmc.it' + '&port=' + '25565')
  fetch('https://mcapi.us/server/status?ip=' + 'play.imperialmc.it' + '&port=' + '25565')
    .then(response => response.json())
    .then(data => handleServerStatus(data));

  function handleServerStatus(data) {
    const playerCounter = document.getElementById("players-mc");
    playerCounter.innerHTML = data.players.now;
  }
}
function IplDiscord() {
  const discord = "959811887757938748";
  fetch(`https://discordapp.com/api/guilds/${discord}/widget.json`)
    .then(result => result.json().then(data =>
      document.getElementById("players-ds").innerHTML = data.presence_count
    ));
}


/* Modal */
var modal = document.getElementById('modal');
var btn = document.getElementById('clickModal');
var close = document.getElementsByClassName('close')[0];

btn.addEventListener('click', openModal);
window.addEventListener('click', wClose);

function openModal() {
    var text = document.getElementById('copy').innerHTML;
    navigator.clipboard.writeText(text);
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
function wClose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

/* Slider grab */

var swiper = new Swiper(".swiper-cont", {
  slidesPerView: 3,
  spaceBetween: 30,
  centerSlide: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
          slidesPerView: 2,
      },
      1100: {
          slidesPerView: 3,
      },
  },
});