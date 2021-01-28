import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import DialogContainer from 'components/DialogContainer';

const DESTROY_TIMEOUT = 500;

class Dialog {
    constructor() {
        this.dialogs = [];
    }

    get currentDialog() {
        return this.dialogs[this.dialogs.length - 1];
    }

    add(props, callback) {
        const dialog = new RootSiblings(
            (
                <DialogContainer
                    {...props}
                    onDismissed={() => {
                        this.onDialogDismissed(props.onDismissed);
                    }}
                />
            ),
            callback
        );
        this.dialogs.push(dialog);
    }

    destroy() {
        const dialog = this.dialogs.pop();
        setTimeout(() => {
            dialog && dialog.destroy();
        }, DESTROY_TIMEOUT);
    }

    onDialogDismissed = (onDismissed) => {
        onDismissed && onDismissed();
        this.destroy();
    };

    update = (props, callback) => {
        this.currentDialog.update(
            <DialogContainer
                {...props}
                onDismissed={() => {
                    this.onDialogDismissed(props.onDismissed);
                }}
            />,
            callback
        );
    };

    show = (props, callback) => {
        this.add(props, callback);
    };

    dismiss = (callback) => {
        this.destroy();
        callback && callback();
    };

    dismissAll = (callback) => {
        this.dialogs.forEach(() => {
            this.dismiss(callback);
        });
    };
}

export default new Dialog();
