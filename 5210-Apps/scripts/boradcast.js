function sendMessage() {
    // Create new broadcast channel
    const channel = new BroadcastChannel('cast');

    // Data taken from textarea input
    let message = document.getElementById('text');

    // Where message will be displayed
    let recieved = document.getElementById('recieved');

    // Send message
    channel.postMessage(message.value);

    // Recieve message
    channel.onmessage = event => {recieved.innerHTML = event.data;}
}