import React from 'react';
import { ToastCautionIcon, ToastErrorIcon, ToastSuccessIcon } from 'components/Assets';
import { classnames } from 'utils/index';

export const Toast: React.FC<{

    toast: { id: string, text: string, actionType: "success" | "error" | "caution" },

    onClick(): void

}> = ({ toast, ...props }) => {

    const svgIcon = () => {

        if (toast.actionType === "success") return ToastSuccessIcon;

        if (toast.actionType === "error") return ToastErrorIcon;

        return ToastCautionIcon;

    };

    const toastClass = () => {

        switch (toast.actionType) {

            case "caution":

                return "toast-caution";

            case "error":

                return "toast-error";

            case "success":

                return "toast-success";

            default:

                return "";

        }

    };

    return (
        <>
            <div
                className={classnames('toast', toastClass())}
                onClick={() => props.onClick()}
            >
                <div className="toast-container">
                    {toast.actionType && <span className='toast-container-icon' dangerouslySetInnerHTML={{ __html: svgIcon() }} />}
                    <span>{toast.text}</span>
                </div>
            </div>
        </>
    );
};
