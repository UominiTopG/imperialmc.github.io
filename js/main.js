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

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});