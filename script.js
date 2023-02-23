function showNotification() {
    const { Notification } = window;
    if (Notification && Notification.permission === 'granted') {
        new Notification('You received a message on Instagram!');
    }
    else if (Notification && Notification.permission !== 'denied') {
        Notification.requestPermission((permission) => {
            if (permission === 'granted') {
                new Notification('You received a message on Instagram!');
            }
        });
    }
}
