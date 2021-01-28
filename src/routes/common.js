import React from 'react';
import { CommonActions, StackActions, DrawerActions } from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params) => {
    navigationRef.current?.dispatch(
        CommonActions.navigate({
            name,
            params
        })
    );
};

const push = (name, params) => {
    navigationRef.current?.dispatch(
        StackActions.push({
            name,
            params
        })
    );
};

const goBack = () => {
    navigationRef.current?.dispatch(CommonActions.goBack({}));
};

const replace = (name, params) => {
    navigationRef.current?.dispatch(
        StackActions.replace({
            name,
            params
        })
    );
};

const resetPage = (name, params) => {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            actions: [CommonActions.navigate({ name, params })]
        })
    );
};

const toggleDrawer = () => {
    navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

const openDrawer = () => {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};

const popToTop = () => {
    navigationRef.current?.dispatch(StackActions.popToTop());
};

export default {
    navigationRef,
    navigate,
    push,
    goBack,
    resetPage,
    replace,
    openDrawer,
    toggleDrawer,
    closeDrawer,
    popToTop
};
