// scripts.js

// Function เพื่อส่งคำสั่งไปยัง backend API และอัพเดท Console
async function sendCommand(command) {
    const response = await fetch('https://YOUR_BACKEND_URL/command', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command: command })
    });
    const data = await response.json();
    updateConsole(data.output); // เรียกใช้ฟังก์ชัน updateConsole เพื่ออัพเดท Console
}

// Function เพื่อเริ่มเซิร์ฟเวอร์
function startServer() {
    sendCommand('start'); // เรียกใช้ฟังก์ชัน sendCommand ด้วยคำสั่ง 'start'
}

// Function เพื่อหยุดเซิร์ฟเวอร์
function stopServer() {
    sendCommand('stop'); // เรียกใช้ฟังก์ชัน sendCommand ด้วยคำสั่ง 'stop'
}

// Function เพื่ออัพเดท Console
function updateConsole(message) {
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML += message + '\n'; // เพิ่มข้อความลงใน Console
    consoleElement.scrollTop = consoleElement.scrollHeight; // อัพเดทการแสดงผลให้แสดงที่บนสุดของ Console
}

// Function เริ่มต้นการทำงาน เมื่อหน้าเว็บโหลดเสร็จ
window.onload = function() {
    updateConsole('Console initialized...\n'); // อัพเดท Console ด้วยข้อความเริ่มต้น
};
