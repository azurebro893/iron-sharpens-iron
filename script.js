const affirmations = [
    { s: "Proverbs 27:17", a: "Iron sharpens iron, and one man sharpens another." },
    { s: "Joshua 1:9", a: "Be strong and courageous. Do not be afraid; the Lord your God is with you." },
    { s: "Psalm 133:1", a: "How good and pleasant it is when God’s people live together in unity!" },
    { s: "1 Peter 2:17", a: "Show proper respect to everyone, love the family of believers." },
    { s: "Micah 6:8", a: "To act justly and to love mercy and to walk humbly with your God." }
];

let resetTimer; // Variable to hold the countdown

function updateDateTime() {
    const now = new Date();
    document.getElementById('date-display').innerText = now.toLocaleDateString();
    document.getElementById('time-display').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function showMeetingInfo() {
    // Clear the Bible verse and bring back the address
    document.getElementById('scripture').innerText = '';
    document.getElementById('affirmation').innerText = '';
    document.getElementById('meeting-info').style.display = 'block';
}

document.getElementById('affirmation-btn').addEventListener('click', () => {
    // 1. Stop any existing countdown
    clearTimeout(resetTimer);

    // 2. Hide meeting info and show the Word
    document.getElementById('meeting-info').style.display = 'none';
    
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById('scripture').innerText = random.s;
    document.getElementById('affirmation').innerText = random.a;

    // 3. Start a new countdown (30000ms = 30 seconds)
    resetTimer = setTimeout(() => {
        showMeetingInfo();
    }, 30000); 
});

// Run clock
setInterval(updateDateTime, 1000);
updateDateTime();