//knowing whether the page is online or offline by adding event listners
window.addEventListener('online', ()=> {
    callNotification('online', 'online', '&check;');
}); 

window.addEventListener('offline', ()=> {
    callNotification('offline', 'offline', '&#x26A0');
});

//defining a function to call the notification element
function callNotification(type, statusText, iconHTML){
    //creating variables to store the values by getting its id
    const notification = document.getElementById('notification');
    const status = document.getElementById('status');
    const icon = document.getElementById('icon');

    //assigning the value to change according to the status
    status.innerText = statusText;
    icon.innerHTML = iconHTML;

    notification.classList.remove('offline', 'online');

    //after classes are being removed, some of it's position elements are still being used
    //for that creating a void offset 
    void notification.offsetWidth;
    
    notification.className = type;
}