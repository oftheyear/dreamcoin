// Matrix Effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "!@#$%^&*()_+-=~`<>?|{}[]";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(canvas.height / fontSize);

function drawMatrix() {
    ctx.fillStyle = "rgba(18, 18, 18, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px Courier New`;
    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]--;
        if (drops[i] < 0 && Math.random() > 0.975) {
            drops[i] = canvas.height / fontSize;
        }
    }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const newColumns = Math.floor(canvas.width / fontSize);
    drops.length = newColumns;
    drops.fill(canvas.height / fontSize);
});

// Popup Handling
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showMetricsPopup() {
    document.getElementById("metricsPopup").style.display = "block";
}

function closeMetricsPopup() {
    document.getElementById("metricsPopup").style.display = "none";
}

function showTokenPopup() {
    document.getElementById("tokenPopup").style.display = "block";
}

function closeTokenPopup() {
    document.getElementById("tokenPopup").style.display = "none";
}

function showTeamPopup() {
    document.getElementById("teamPopup").style.display = "block";
}

function closeTeamPopup() {
    document.getElementById("teamPopup").style.display = "none";
}
