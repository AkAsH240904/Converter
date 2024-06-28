 const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.onresult = function (event) {
    const result = event.results[0][0].transcript;
    document.querySelector('.txt').value = result;
  };
  document.querySelector('.bt').addEventListener('click', function () {
    recognition.start();
  });