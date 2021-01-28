/* eslint-disable import/prefer-default-export */
import React from 'react';
import ModalConfirm from 'components/modal-content/ModalConfirm';
import ModalError from 'components/modal-content/ModalError';
import Dialog from '../utils/dialog';

export const hideCurrentModal = () => Dialog.dismiss();

export const showDialogConfirm = (props) => {
    hideCurrentModal();
    Dialog.show({
        children: <ModalConfirm {...props} />
    });
};

export const showDialogError = (props) => {
    hideCurrentModal();
    Dialog.show({
        children: <ModalError {...props} />,
        isNoClickBackdrop: true
    });
};
