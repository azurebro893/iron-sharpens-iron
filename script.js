const affirmations = [
    { s: "Proverbs 27:17", a: "Iron sharpens iron, and one man sharpens another." },
    { s: "Joshua 1:9", a: "Be strong and courageous. Do not be afraid; the Lord your God is with you." },
    { s: "Psalm 133:1", a: "How good and pleasant it is when God’s people live together in unity!" },
    { s: "1 Peter 2:17", a: "Show proper respect to everyone, love the family of believers." }
];

function updateDateTime() {
    const now = new Date();
    document.getElementById('date-display').innerText = now.toLocaleDateString();
    document.getElementById('time-display').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

document.getElementById('affirmation-btn').addEventListener('click', () => {
    // Hide meeting info to show affirmation clearly
    document.getElementById('meeting-info').style.display = 'none';
    
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById('scripture').innerText = random.s;
    document.getElementById('affirmation').innerText = random.a;
});

setInterval(updateDateTime, 1000);
updateDateTime();