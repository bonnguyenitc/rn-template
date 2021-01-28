// import firebase from 'react-native-firebase';
// import { Platform } from 'react-native';

// const CHANNEL_ID = 'notification-channel';
// const CHANNEL_NAME = 'Notification Name';
// const CHANNEL_DESCRIPTION = 'Notification Description';

// const createChannel = () => {
//     const channel = new firebase.notifications.Android.Channel(
//         CHANNEL_ID,
//         CHANNEL_NAME,
//         firebase.notifications.Android.Importance.Max
//     ).setDescription(CHANNEL_DESCRIPTION);
//     firebase.notifications().android.createChannel(channel);
// };

// const requestPermission = async () => {
//     try {
//         return await firebase.messaging().requestPermission();
//     } catch (error) {
//         // console.log(error);
//     }
// };

// const displayNotification = (message) => {
//     const notification = new firebase.notifications.Notification({
//         sound: 'default',
//         show_in_foreground: true
//     })
//         .setNotificationId(message._messageId || message._notificationId)
//         .setTitle(message._data.title || message.title)
//         .setBody(message._data.body || message.body)
//         .setData({
//             type: message._data.type,
//             objectId: message._data.objectId
//         });
//     const os = Platform.OS;
//     if (os === 'android') {
//         notification.android.setChannelId(CHANNEL_ID);
//         notification.android.setAutoCancel(true);
//         notification.android.setSmallIcon('@drawable/ic_notify_icon');
//         notification.android.setPriority(firebase.notifications.Android.Priority.High);
//         notification.android.setBadgeIconType(firebase.notifications.Android.BadgeIconType.Small);
//         notification.android.setShowWhen();
//     }
//     firebase.notifications().displayNotification(notification);
// };

// const removeNotification = (notificationId) =>
//     firebase.notifications().removeDeliveredNotification(notificationId);

// const subcribeTopic = (topicName) => {
//     firebase.messaging().subscribeToTopic(topicName);
// };

// class Notification {
//     static init() {
//         createChannel();
//     }

//     static async checkPermission() {
//         const able = await firebase.messaging().hasPermission();
//         if (!able) {
//             await requestPermission();
//         }
//         Notification.init();
//     }

//     static getFcmToken() {
//         return firebase.messaging().getToken();
//     }

//     static registerListener(onNotificationOpen) {
//         this.notificationOpenedListener = firebase
//             .notifications()
//             .onNotificationOpened((notificationOpen) => {
//                 // Get the action triggered by the notification being opened
//                 // const action = notificationOpen.action;
//                 // Get information about the notification that was opened
//                 const { notification } = notificationOpen;
//                 const { data } = notification;
//                 // Notification.handleOpenNotification(data)
//                 onNotificationOpen && onNotificationOpen(data);
//                 // hidden notification
//                 removeNotification(notification._notificationId);
//             });

//         this.messagingListener = firebase.messaging().onMessage((message) => {
//             // Process your message as required
//             displayNotification(message);
//         });

//         this.notificationListener = firebase.notifications().onNotification((message) => {
//             // Process your message as required
//             displayNotification(message);
//         });

//         firebase
//             .notifications()
//             .getInitialNotification()
//             .then((notificationOpen) => {
//                 if (notificationOpen) {
//                     const { notification } = notificationOpen;
//                     const { data } = notification;
//                     // Notification.handleOpenNotification(data)
//                     onNotificationOpen && onNotificationOpen(data);
//                     removeNotification(notification._notificationId);
//                 }
//             });
//     }

//     static removeListener() {
//         this.notificationListener && this.notificationListener();
//         this.messagingListener && this.messagingListener();
//         this.notificationOpenedListener && this.notificationOpenedListener();
//     }
// }

// const Firebase = {
//     Notification,
//     subcribeTopic
// };

// export default Firebase;
