const letterContent = document.getElementById("letter-content");
const changeMessageButton = document.getElementById("change-message");

let messages = [
    "Dari saat pertama kali aku melihatmu, aku tahu kaulah orang yang tepat untukku. Kau begitu lucu, aku mengira kau adalah kucing cemberut.",
    "Senyummu menerangi duniaku, dan cintamu mengisi hatiku dengan sukacita. Bahkan saat kau membuat wajah cemberut.",
    "Aku tidak bisa membayangkan hidupku tanpamu. Kaulah segalanya bagiku, bahkan kau selalu mencuri makananku.",
    "Aku mencintaimu lebih dari kata-kata bisa mengatakannya. Bahkan kau selalu meninggalkan kaus kakimu di lantai."
];

let currentMessageIndex = 0;

function changeMessage() {
    letterContent.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

changeMessageButton.addEventListener("click", changeMessage);

// Start with the first message
changeMessage();

// Animasi pop up
document.querySelector(".grumpy-cat").addEventListener("click", function() {
    letterContent.classList.add("reveal");
});
