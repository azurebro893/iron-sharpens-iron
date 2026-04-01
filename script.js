const affirmations = [
    { s: "Proverbs 27:17", a: "Iron sharpens iron, and one man sharpens another. I will seek godly brotherhood today." },
    { s: "Joshua 1:9", a: "I am strong and courageous. I will not be afraid, for the Lord is with me." },
    { s: "1 Corinthians 16:13", a: "I will stand firm in the faith, act like a man, and be strong." },
    { s: "Psalm 119:9", a: "I keep my way pure by living according to God's Word." }
];

function updateDateTime() {
    const now = new Date();
    document.getElementById('date-display').innerText = now.toLocaleDateString();
    document.getElementById('time-display').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

document.getElementById('affirmation-btn').addEventListener('click', () => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById('scripture').innerText = random.s;
    document.getElementById('affirmation').innerText = random.a;
});

setInterval(updateDateTime, 1000);
updateDateTime();