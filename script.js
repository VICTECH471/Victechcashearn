let balance = 0;
let taps = 0;

document.getElementById('tap-button').addEventListener('click', () => {
  balance += 0.001; // earn $0.001 per tap
  taps++;
  document.getElementById('balance').innerText = `Balance: $${balance.toFixed(2)}`;
  document.getElementById('taps').innerText = `Taps: ${taps}`;
});

