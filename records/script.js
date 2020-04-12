var list = JSON.parse(localStorage["tetris.records"]);

list = list.sort(function(a, b) {
  let scoreA = a.score;
  let scoreB = b.score;
  if (scoreA > scoreB) return -1;
  if (scoreA < scoreB) return 1;
  return 0;
});

var n = 0;
for (s of list) {
  n += 1;
  document.getElementById('table').innerHTML += "<tr><td>" + n + "</td><td>" + s.user + "</td><td>" + s.score + "</td></tr>"
}

document.addEventListener('keydown', (ev) => {
  if (ev.keyCode == 32) {
    window.location.href = "/game";
  }
});
