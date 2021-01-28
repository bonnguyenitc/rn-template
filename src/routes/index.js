import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import NActions from 'routes/common';
import LoginScreen from 'screens/login-screen';
import SplashScreen from 'screens/splash-screen';
import { theme } from 'theme';
import { observer } from 'mobx-react-lite';
import { useStores } from 'stores';
import ModalWaiting from 'components/modal-content/ModalWaiting';
import { iOS } from 'constant/platform';
import RouterName from './router-name';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const TransportTab = () => {
//     const themes = useTheme();
//     const deliveryTabOption = {
//         activeTintColor: themes.colors.primary,
//         inactiveTintColor: themes.colors.inactiveIconTab,
//         allowFontScaling: true
//     };
//     const optionTab1 = {
//         title: strings('transport.tab.bucket_loading'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.icon_delivery} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     const optionTab2 = {
//         title: strings('transport.tab.passing_a_bucket'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.delivery_tab_2} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     const optionTab3 = {
//         title: strings('transport.tab.transfer_bucket'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.delivery_tab_3} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     const optionTab4 = {
//         title: strings('transport.tab.destination'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.delivery_tab_4} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     return (
//         <Tab.Navigator tabBarOptions={deliveryTabOption} backBehavior="initialRoute">
//             <Tab.Screen
//                 options={optionTab1}
//                 name={RouterName.TRANSPORT_BUCKET_LOADING}
//                 component={TransportBucketLoadingScreen}
//             />
//             <Tab.Screen
//                 options={optionTab2}
//                 name={RouterName.TRANSPORT_PASSING_A_BUCKET}
//                 component={TransportPassingABucketScreen}
//             />
//             <Tab.Screen
//                 options={optionTab3}
//                 name={RouterName.TRANSPORT_TRANSFER_BUCKET}
//                 component={TransportTransferScreen}
//             />
//             <Tab.Screen
//                 options={optionTab4}
//                 name={RouterName.TRANSPORT_DESTINATION}
//                 component={TransportDestinationScreen}
//             />
//         </Tab.Navigator>
//     );
// };

// const BucketStack = () => {
//     const option = {
//         header: () => null
//     };
//     return (
//         <Stack.Navigator initialRouteName={RouterName.DELIVERY_BUCKET_LIST}>
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_BUCKET_LIST}
//                 component={DeliveryBucketScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_BUCKET_LUGGAGE}
//                 component={DeliveryLuggageListScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_BUCKET_RELEASE}
//                 component={DeliveryBucketReleaseScreen}
//             />
//         </Stack.Navigator>
//     );
// };

// const ScheduleStack = () => {
//     const option = {
//         header: () => null
//     };
//     return (
//         <Stack.Navigator initialRouteName={RouterName.DELIVERY_SCHEDULE_BUCKET}>
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_SCHEDULE_BUCKET}
//                 component={DeliveryScheduleScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_SCHEDULE_DETAIL_LUGGAGE}
//                 component={DeliveryDetailLuggageScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_SCHEDULE_SCAN_LUGGAGE}
//                 component={DeliveryScheduleScanLuggageScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_SCHEDULE_SELECT_TYPE}
//                 component={DeliveryScheduleSelectTypeScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_SCHEDULE_TAKE_ENVIDENT}
//                 component={DeliveryScheduleTakeEnvidentScreen}
//             />
//         </Stack.Navigator>
//     );
// };

// const DeliveryFinishedStack = () => {
//     const option = {
//         header: () => null
//     };
//     return (
//         <Stack.Navigator initialRouteName={RouterName.DELIVERY_FINISHED_LUGGAGE}>
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_FINISHED_LUGGAGE}
//                 component={DeliveryFinishedScreen}
//             />
//             <Stack.Screen
//                 options={option}
//                 name={RouterName.DELIVERY_FINISHED_DETAIL_LUGGAGE}
//                 component={DeliveryFinishedLuggageScreen}
//             />
//         </Stack.Navigator>
//     );
// };

// const DeliveryTab = () => {
//     const themes = useTheme();
//     const deliveryTabOption = {
//         activeTintColor: themes.colors.primary,
//         inactiveTintColor: themes.colors.inactiveIconTab
//     };
//     const optionTab1 = {
//         title: strings('delivery.tab.delivery_loading'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.icon_delivery} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     const optionTab2 = {
//         title: strings('delivery.tab.delivery_bucket'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.delivery_tab_3} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     const optionTab3 = {
//         title: strings('delivery.tab.delivery_schedule'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.icon_file} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     const optionTab4 = {
//         title: strings('delivery.tab.delivery_finished'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.icon_menu} style={tintColor} resizeMode="contain" />;
//         }
//     };

//     const optionTab5 = {
//         title: strings('delivery.tab.delivery_place'),
//         // eslint-disable-next-line react/prop-types
//         tabBarIcon: ({ color }) => {
//             const tintColor = { tintColor: color };
//             return <Image source={Images.icon_location} style={tintColor} resizeMode="contain" />;
//         }
//     };
//     return (
//         <Tab.Navigator tabBarOptions={deliveryTabOption} lazy={false} backBehavior="initialRoute">
//             <Tab.Screen
//                 options={optionTab1}
//                 name={RouterName.DELIVERY_BUCKET_LOADING}
//                 component={DeliveryBucketLoadingScreen}
//             />
//             <Tab.Screen
//                 options={optionTab2}
//                 name={RouterName.DELIVERY_BUCKET}
//                 component={BucketStack}
//             />
//             <Tab.Screen
//                 options={optionTab3}
//                 name={RouterName.DELIVERY_SCHEDULE}
//                 component={ScheduleStack}
//             />
//             <Tab.Screen
//                 options={optionTab4}
//                 name={RouterName.DELIVERY_FINISHED}
//                 component={DeliveryFinishedStack}
//             />
//             <Tab.Screen
//                 options={optionTab5}
//                 name={RouterName.DELIVERY_PLACE}
//                 component={DeliveryPlaceScreen}
//             />
//         </Tab.Navigator>
//     );
// };

const AuthStack = () => {
    const option = {
        header: () => null
    };
    return (
        <Stack.Navigator>
            <Stack.Screen options={option} name={RouterName.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
    );
};

const MainStack = observer(() => {
    const option = {
        header: () => null
    };
    const { appStore } = useStores();
    return (
        <>
            <StatusBar barStyle={iOS ? 'dark-content' : 'light-content'} />
            <NavigationContainer ref={NActions.navigationRef}>
                <Stack.Navigator headerMode="none">
                    {!appStore.isShowedSplash ? (
                        <Stack.Screen
                            options={option}
                            name={RouterName.SPLASH}
                            component={SplashScreen}
                        />
                    ) : (
                        <Stack.Screen
                            options={option}
                            name={RouterName.LOGIN}
                            component={AuthStack}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
            <ModalWaiting visible={appStore.loading} />
        </>
    );
});

function Root() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <MainStack />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

export default Root;
