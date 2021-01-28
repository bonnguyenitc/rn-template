import firebase from 'react-native-firebase';

const backgroundNotificationHandler = async (message) => {
    const channel = new firebase.notifications.Android.Channel(
        'notification-channel',
        'Notification Channel',
        firebase.notifications.Android.Importance.Max
    ).setDescription('Notification channell');
    // Create the channel
    firebase.notifications().android.createChannel(channel);
    const notification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true
    })
        .setNotificationId(message.messageId)
        .setTitle(message.data.title)
        .setBody(message.data.body)
        .setData({
            type: message.data.type,
            objectId: message.data.objectId
        });
    notification.android.setChannelId('notification-channel');
    notification.android.setAutoCancel(true);
    notification.android.setSmallIcon('@drawable/ic_notify_icon');
    notification.android.setBadgeIconType(firebase.notifications.Android.BadgeIconType.Small);
    notification.android.setPriority(firebase.notifications.Android.Priority.High);

    notification.android.setShowWhen(true);
    firebase.notifications().displayNotification(notification);

    return Promise.resolve();
};
export default backgroundNotificationHandler;
