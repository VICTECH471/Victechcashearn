document.getElementById('withdraw-button').addEventListener('click', function() {
  var notification = document.getElementById('notification');
  notification.innerHTML = 'Withdrawal request sent successfully!';
  notification.style.display = 'block';
  setTimeout(function() {
    notification.style.display = 'none';
  }, 3000);
});
document.getElementById('message').innerHTML = 'Withdrawal request sent successfully!' ;

