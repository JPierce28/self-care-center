var messageButton = document.querySelector(".message-button");
var deleteMessageButton = document.querySelector(".message-delete");
var affirmationRadio = document.querySelector("#affirmation");
var mantraRadio = document. querySelector("#mantra");
var positiveMessage = document.querySelector("#positive-message");

var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."]

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."]

var currentMessage;
messageButton.addEventListener("click", randomMessage);
deleteMessageButton.addEventListener("click", deleteMessage);
window.addEventListener("load", homeView);

function homeView() {
  document.getElementById("delete-message").hidden = true;
};

function randomMessage() {
  var currentMessage = "";
  document.getElementById("meditate-icon").style.display = "none";
  document.getElementById("delete-message").hidden = false;
  if (mantraRadio.checked){
    var currentMessage = mantras[Math.floor(Math.random()*mantras.length)];
    positiveMessage.innerText = currentMessage;
  };
  if (affirmationRadio.checked) {
    var currentMessage = affirmations[Math.floor(Math.random()*affirmations.length)];
    positiveMessage.innerText = currentMessage;
  };
};

function deleteMessage() {
  for (var i = 0; i < mantras.length; i++){
    if (positiveMessage.innerText === mantras[i]){
    mantras.splice(i, 1);
    positiveMessage.innerText = "That message has been deleted! Please select another message."
    };
  };
  for (var i = 0; i < affirmations.length; i++){
    if(positiveMessage.innerText === affirmations[i]){
      affirmations.splice(i, 1);
      positiveMessage.innerText = "That message has been deleted! Please select another message."
    };
  };
};
