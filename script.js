function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dateTimeString = `${day} - ${month} - ${year} , ${hours} : ${minutes} : ${seconds}`;
    document.getElementById('dateTime').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call to set the time immediately