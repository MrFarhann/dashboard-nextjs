import React from "react";
import {SvgIconsProps} from "@/types/types";

export function Arrow({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M0.645817 0.147077C0.840731 -0.0485327 1.15731 -0.0490966 1.35292 0.145817L6.83741 5.6108C7.05312 5.82574 7.05312 6.17505 6.83741 6.39L1.35292 11.855C1.15731 12.0499 0.840731 12.0493 0.645817 11.8537C0.450903 11.6581 0.451467 11.3415 0.647077 11.1466L5.81166 6.0004L0.647077 0.854183C0.451467 0.659268 0.450903 0.342687 0.645817 0.147077Z"
                fill={`${color === "#4F52B2" || color === "#ffffff" ? color : "#616161"}`}/>
        </svg>
    )
}

export function Bell({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M12 2.49634C16.0499 2.49634 19.3567 5.69108 19.4958 9.74539L19.5 9.99634V14.0933L20.88 17.2493C20.949 17.4072 20.9847 17.5777 20.9847 17.7501C20.9847 18.4405 20.425 19.0001 19.7347 19.0001L15 19.0016C15 20.6585 13.6568 22.0016 12 22.0016C10.4023 22.0016 9.09633 20.7527 9.00508 19.1779L8.99954 18.9993L4.27485 19.0001C4.10351 19.0001 3.93401 18.9649 3.77685 18.8966C3.14365 18.6216 2.8533 17.8853 3.12834 17.2521L4.49999 14.0943V9.99623C4.50059 5.84144 7.85208 2.49634 12 2.49634ZM13.4995 18.9993L10.5 19.0016C10.5 19.83 11.1716 20.5016 12 20.5016C12.7797 20.5016 13.4204 19.9067 13.4931 19.1461L13.4995 18.9993ZM12 3.99634C8.67983 3.99634 6.00047 6.67059 5.99999 9.99634V14.406L4.65601 17.5001H19.3525L18 14.4069L18.0001 10.0092L17.9964 9.78399C17.8853 6.55052 15.2416 3.99634 12 3.99634Z"
                fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
        </svg>
    );
}

export function Calendar({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M17.75 3.5C19.5449 3.5 21 4.95507 21 6.75V18.25C21 20.0449 19.5449 21.5 17.75 21.5H6.25C4.45507 21.5 3 20.0449 3 18.25V6.75C3 4.95507 4.45507 3.5 6.25 3.5H17.75ZM19.5 9H4.5V18.25C4.5 19.2165 5.2835 20 6.25 20H17.75C18.7165 20 19.5 19.2165 19.5 18.25V9ZM7.75 15C8.44036 15 9 15.5596 9 16.25C9 16.9404 8.44036 17.5 7.75 17.5C7.05964 17.5 6.5 16.9404 6.5 16.25C6.5 15.5596 7.05964 15 7.75 15ZM12 15C12.6904 15 13.25 15.5596 13.25 16.25C13.25 16.9404 12.6904 17.5 12 17.5C11.3096 17.5 10.75 16.9404 10.75 16.25C10.75 15.5596 11.3096 15 12 15ZM7.75 11C8.44036 11 9 11.5596 9 12.25C9 12.9404 8.44036 13.5 7.75 13.5C7.05964 13.5 6.5 12.9404 6.5 12.25C6.5 11.5596 7.05964 11 7.75 11ZM12 11C12.6904 11 13.25 11.5596 13.25 12.25C13.25 12.9404 12.6904 13.5 12 13.5C11.3096 13.5 10.75 12.9404 10.75 12.25C10.75 11.5596 11.3096 11 12 11ZM16.25 11C16.9404 11 17.5 11.5596 17.5 12.25C17.5 12.9404 16.9404 13.5 16.25 13.5C15.5596 13.5 15 12.9404 15 12.25C15 11.5596 15.5596 11 16.25 11ZM17.75 5H6.25C5.2835 5 4.5 5.7835 4.5 6.75V7.5H19.5V6.75C19.5 5.7835 18.7165 5 17.75 5Z"
                fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
        </svg>
    );
}

export function Call({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M7.05658 2.91795L8.22358 2.56619C9.54608 2.16755 10.9591 2.81179 11.5254 4.07161L12.4271 6.07733C12.9098 7.15117 12.6554 8.41317 11.7944 9.21612L10.3001 10.6096C10.2564 10.6503 10.2288 10.7053 10.2221 10.7647C10.1778 11.1618 10.447 11.9352 11.0673 13.0095C11.5183 13.7908 11.9266 14.3387 12.2741 14.6468C12.5162 14.8615 12.6494 14.9079 12.7062 14.891L14.7165 14.2764C15.8421 13.9323 17.0619 14.3426 17.7506 15.2971L19.0313 17.0721C19.8374 18.1893 19.6925 19.7306 18.6922 20.6779L17.8058 21.5173C16.8494 22.4231 15.4879 22.7606 14.2191 22.4065C11.465 21.6378 8.99572 19.3137 6.78384 15.4826C4.56889 11.6462 3.7917 8.34173 4.50815 5.56994C4.83602 4.30146 5.80215 3.29607 7.05658 2.91795ZM7.48948 4.35413C6.73682 4.581 6.15715 5.18423 5.96043 5.94532C5.35778 8.27684 6.04663 11.2057 8.08288 14.7326C10.1164 18.2548 12.3054 20.315 14.6224 20.9617C15.3836 21.1742 16.2006 20.9717 16.7744 20.4282L17.6608 19.5888C18.1154 19.1582 18.1813 18.4576 17.8149 17.9498L16.5342 16.1748C16.2211 15.741 15.6667 15.5544 15.155 15.7109L13.1397 16.327C11.97 16.6757 10.9083 15.7342 9.76823 13.7595C8.99993 12.4288 8.64183 11.4001 8.7314 10.5982C8.7778 10.1827 8.97137 9.79763 9.27709 9.51254L10.7714 8.11909C11.1628 7.75411 11.2784 7.18047 11.059 6.69237L10.1573 4.68665C9.89989 4.114 9.25762 3.82116 8.65648 4.00236L7.48948 4.35413Z"
                fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
        </svg>
    );
}

export function Chat({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_2_44512)">
                <path
                    d="M12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5C10.3817 22.5 8.81782 22.1146 7.41286 21.388L3.58704 22.4553C2.92212 22.641 2.23258 22.2525 2.04691 21.5876C1.98546 21.3676 1.98549 21.1349 2.04695 20.9151L3.11461 17.0922C2.38637 15.686 2 14.1203 2 12.5C2 6.97715 6.47715 2.5 12 2.5ZM12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 13.9696 3.87277 15.3834 4.57303 16.6375L4.72368 16.9072L3.61096 20.8914L7.59755 19.7792L7.86709 19.9295C9.12006 20.6281 10.5322 21 12 21C16.6944 21 20.5 17.1944 20.5 12.5C20.5 7.80558 16.6944 4 12 4ZM8.75 13.5H13.2483C13.6625 13.5 13.9983 13.8358 13.9983 14.25C13.9983 14.6297 13.7161 14.9435 13.35 14.9932L13.2483 15H8.75C8.33579 15 8 14.6642 8 14.25C8 13.8703 8.28215 13.5565 8.64823 13.5068L8.75 13.5H13.2483H8.75ZM8.75 10H15.2545C15.6687 10 16.0045 10.3358 16.0045 10.75C16.0045 11.1297 15.7223 11.4435 15.3563 11.4932L15.2545 11.5H8.75C8.33579 11.5 8 11.1642 8 10.75C8 10.3703 8.28215 10.0565 8.64823 10.0068L8.75 10H15.2545H8.75Z"
                    fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
            </g>
            <defs>
                <clipPath id="clip0_2_44512">
                    <path
                        d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z"
                        fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export function Close({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z"
                fill={`${color ? color : "#242424"}`}/>
        </svg>
    );
}

export function File({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M6 2.5C4.89543 2.5 4 3.39543 4 4.5V20.5C4 21.6046 4.89543 22.5 6 22.5H18C19.1046 22.5 20 21.6046 20 20.5V10.3278C20 9.79733 19.7893 9.28863 19.4142 8.91355L13.5864 3.08579C13.2114 2.71071 12.7027 2.5 12.1722 2.5H6ZM5.5 4.5C5.5 4.22386 5.72386 4 6 4H12V8.5C12 9.60457 12.8954 10.5 14 10.5H18.5V20.5C18.5 20.7761 18.2761 21 18 21H6C5.72386 21 5.5 20.7761 5.5 20.5V4.5ZM17.3793 9H14C13.7239 9 13.5 8.77614 13.5 8.5V5.12066L17.3793 9Z"
                fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
        </svg>
    );
}

export function Lens({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.83879 10.5217 8.06586 9.72656 9.01962L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.68 14.0271 13.4106 14.0464 13.2157 13.9114L13.1464 13.8536L9.01962 9.72656C8.06586 10.5217 6.83879 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1Z"
                fill={`${color?.length === 4 || color?.length === 7 ? color : "#616161"}`}/>
        </svg>
    );
}

export function Logo({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_2_44529)">
                <path d="M4.19304 18.2978H6.96104L3.76801 6.5H1L4.19304 18.2978Z" fill={`${color === "#4F52B2" || color === "#ffffff" ? color : "#616161"}`}/>
                <path d="M9.72981 18.2978H6.96085L10.1548 6.5H12.9228L9.72981 18.2978Z" fill={`${color === "#4F52B2" || color === "#ffffff" ? color : "#616161"}`}/>
                <path d="M13.8452 18.2978H11.0772L14.2712 6.5H17.0392L13.8452 18.2978Z" fill={`${color === "#4F52B2" || color === "#ffffff" ? color : "#616161"}`}/>
                <path d="M20.2322 18.2978H23.0002L19.8072 6.5H17.0392L20.2322 18.2978Z" fill={`${color === "#4F52B2" || color === "#ffffff" ? color : "#616161"}`}/>
            </g>
            <defs>
                <clipPath id="clip0_2_44529">
                    <path
                        d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z"
                        fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export function Maximize({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75325 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75325 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z"
                fill={`${color ? color : "#242424"}`}/>
        </svg>
    );
}

export function Minimize({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z"
                fill={`${color ? color : "#242424"}`}/>
        </svg>
    );
}

export function More({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M3.25 2C3.25 2.69036 2.69036 3.25 2 3.25C1.30964 3.25 0.75 2.69036 0.75 2C0.75 1.30964 1.30964 0.75 2 0.75C2.69036 0.75 3.25 1.30964 3.25 2ZM8.25 2C8.25 2.69036 7.69036 3.25 7 3.25C6.30964 3.25 5.75 2.69036 5.75 2C5.75 1.30964 6.30964 0.75 7 0.75C7.69036 0.75 8.25 1.30964 8.25 2ZM12 3.25C12.6904 3.25 13.25 2.69036 13.25 2C13.25 1.30964 12.6904 0.75 12 0.75C11.3096 0.75 10.75 1.30964 10.75 2C10.75 2.69036 11.3096 3.25 12 3.25Z" fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
        </svg>
    );
}

export function PlusOutline({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_2_44520)">
                <path
                    d="M12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25V11.75H16.25C16.6642 11.75 17 12.0858 17 12.5C17 12.9142 16.6642 13.25 16.25 13.25H12.75V16.75C12.75 17.1642 12.4142 17.5 12 17.5C11.5858 17.5 11.25 17.1642 11.25 16.75V13.25H7.75C7.33579 13.25 7 12.9142 7 12.5C7 12.0858 7.33579 11.75 7.75 11.75H11.25V8.25C11.25 7.83579 11.5858 7.5 12 7.5ZM3 6.75C3 4.95507 4.45507 3.5 6.25 3.5H17.75C19.5449 3.5 21 4.95507 21 6.75V18.25C21 20.0449 19.5449 21.5 17.75 21.5H6.25C4.45507 21.5 3 20.0449 3 18.25V6.75ZM6.25 5C5.2835 5 4.5 5.7835 4.5 6.75V18.25C4.5 19.2165 5.2835 20 6.25 20H17.75C18.7165 20 19.5 19.2165 19.5 18.25V6.75C19.5 5.7835 18.7165 5 17.75 5H6.25Z"
                    fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
            </g>
            <defs>
                <clipPath id="clip0_2_44520">
                    <path
                        d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z"
                        fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export function Team({className}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M21.0343 10.0012H16.8733L15.7123 10.9402V15.5972C15.7123 17.3262 17.1133 18.7282 18.8423 18.7282C20.5723 18.7282 21.9733 17.3262 21.9733 15.5972V10.9402C21.9733 10.4222 21.5533 10.0012 21.0343 10.0012Z"
                fill="#5059C9"/>
            <path d="M22 7C22 8.104 21.105 9 20 9C18.895 9 18 8.104 18 7C18 5.896 18.895 5 20 5C21.105 5 22 5.896 22 7Z"
                  fill="#5059C9"/>
            <path
                d="M9.89211 10.0046H17.0961C17.5921 10.0046 17.9941 10.4066 17.9941 10.9026V16.5946C17.9941 19.0306 16.0201 21.0046 13.5841 21.0046H13.4041C10.9681 21.0046 8.99411 19.0306 8.99411 16.5946V10.9026C8.99411 10.4066 9.39611 10.0046 9.89211 10.0046Z"
                fill="#7B83EB"/>
            <path
                d="M16.9066 6.00002C16.9066 7.60502 15.6056 8.90702 13.9996 8.90702C12.3946 8.90702 11.0936 7.60502 11.0936 6.00002C11.0936 4.39502 12.3946 3.09302 13.9996 3.09302C15.6056 3.09302 16.9066 4.39502 16.9066 6.00002Z"
                fill="#7B83EB"/>
            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
                  d="M15.0001 8.68149V8.00049C15.0001 7.45049 14.5281 7.00049 13.9511 7.00049H11.2711C11.6881 8.09449 12.7391 8.87549 13.9801 8.87549C14.3401 8.87549 14.6821 8.80149 15.0001 8.68149ZM8.99411 10.9025C8.99411 10.4065 9.39611 10.0045 9.89211 10.0045H15.0001V17.8395C15.0001 18.3895 14.3821 19.0005 13.7451 19.0005H9.71511C9.26211 18.3075 8.99411 17.4835 8.99411 16.5945V10.9025Z"
                  fill="black"/>
            <path
                d="M3 18C2.45 18 2 17.55 2 17V7C2 6.45 2.45 6 3 6H13C13.55 6 14 6.45 14 7V17C14 17.55 13.55 18 13 18H3Z"
                fill="#4B53BC"/>
            <path d="M11.0001 10.0001H8.83511V15.8201H7.41211V10.0001H5.23511V8.57007H11.0001V10.0001Z" fill="white"/>
        </svg>
    );
}

export function Teams({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_2_44516)">
                <path
                    d="M14.754 10.5C15.7205 10.5 16.504 11.2835 16.504 12.25V16.999C16.504 19.4848 14.4888 21.5 12.003 21.5C9.51712 21.5 7.50193 19.4848 7.50193 16.999V12.25C7.50193 11.2835 8.28543 10.5 9.25193 10.5H14.754ZM14.754 12H9.25193C9.11386 12 9.00193 12.1119 9.00193 12.25V16.999C9.00193 18.6564 10.3455 20 12.003 20C13.6604 20 15.004 18.6564 15.004 16.999V12.25C15.004 12.1119 14.8921 12 14.754 12ZM3.75 10.5L7.13128 10.4991C6.78791 10.9145 6.56424 11.4325 6.51312 12.0002L3.75 12C3.61193 12 3.5 12.1119 3.5 12.25V15.4988C3.5 16.8802 4.61984 18 6.00124 18C6.20123 18 6.39574 17.9765 6.58216 17.9322C6.66687 18.4361 6.82156 18.9167 7.03487 19.364C6.70577 19.453 6.35899 19.5 6.00124 19.5C3.79142 19.5 2 17.7086 2 15.4988V12.25C2 11.2835 2.7835 10.5 3.75 10.5ZM16.8747 10.4991L20.25 10.5C21.2165 10.5 22 11.2835 22 12.25V15.5C22 17.7091 20.2091 19.5 18 19.5C17.6436 19.5 17.298 19.4534 16.9691 19.3659C17.184 18.9177 17.3388 18.4371 17.425 17.9331C17.6092 17.977 17.8019 18 18 18C19.3807 18 20.5 16.8807 20.5 15.5V12.25C20.5 12.1119 20.3881 12 20.25 12L17.4928 12.0002C17.4417 11.4325 17.218 10.9145 16.8747 10.4991ZM12 3.5C13.6569 3.5 15 4.84315 15 6.5C15 8.15685 13.6569 9.5 12 9.5C10.3431 9.5 9 8.15685 9 6.5C9 4.84315 10.3431 3.5 12 3.5ZM18.5 4.5C19.8807 4.5 21 5.61929 21 7C21 8.38071 19.8807 9.5 18.5 9.5C17.1193 9.5 16 8.38071 16 7C16 5.61929 17.1193 4.5 18.5 4.5ZM5.5 4.5C6.88071 4.5 8 5.61929 8 7C8 8.38071 6.88071 9.5 5.5 9.5C4.11929 9.5 3 8.38071 3 7C3 5.61929 4.11929 4.5 5.5 4.5ZM12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5ZM18.5 6C17.9477 6 17.5 6.44772 17.5 7C17.5 7.55228 17.9477 8 18.5 8C19.0523 8 19.5 7.55228 19.5 7C19.5 6.44772 19.0523 6 18.5 6ZM5.5 6C4.94772 6 4.5 6.44772 4.5 7C4.5 7.55228 4.94772 8 5.5 8C6.05228 8 6.5 7.55228 6.5 7C6.5 6.44772 6.05228 6 5.5 6Z"
                    fill={`${color === "#4F52B2" ? color : "#616161"}`}/>
            </g>
            <defs>
                <clipPath id="clip0_2_44516">
                    <path
                        d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z"
                        fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
}

export function Tick({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5Z"
                fill="white"/>
            <path
                d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM7.10356 4.10355L4.85357 6.35356C4.65831 6.54883 4.34173 6.54883 4.14646 6.35357L3.14645 5.35357C2.95119 5.1583 2.95118 4.84172 3.14644 4.64646C3.34171 4.45119 3.65829 4.45119 3.85355 4.64645L4.50001 5.29291L6.39644 3.39645C6.59171 3.20119 6.90829 3.20118 7.10355 3.39644C7.29881 3.59171 7.29882 3.90829 7.10356 4.10355Z"
                fill={"#13A10E"}/>
        </svg>
    );
}

export function Quick({className}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M9.51562 6C9.23948 6 9.01562 6.22386 9.01562 6.5C9.01562 6.77614 9.23948 7 9.51562 7H12.2929L8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L13 7.70711V10.4844C13 10.7605 13.2239 10.9844 13.5 10.9844C13.7761 10.9844 14 10.7605 14 10.4844V6.5C14 6.22386 13.7761 6 13.5 6H9.51562ZM12.7656 17C14.0136 17 15.0481 16.0855 15.2354 14.8901C16.2572 14.5761 17 13.6248 17 12.5V5.5C17 4.11929 15.8807 3 14.5 3H7.5C6.36321 3 5.40363 3.75875 5.10007 4.79744C3.90947 4.98887 3 6.02104 3 7.26562V13.5C3 15.433 4.567 17 6.5 17H12.7656ZM4 7.26562C4 6.61252 4.4174 6.0569 5 5.85098V12.5C5 13.8807 6.11929 15 7.5 15H14.1803C13.9744 15.5826 13.4187 16 12.7656 16H6.5C5.11929 16 4 14.8807 4 13.5V7.26562ZM7.5 4H14.5C15.3284 4 16 4.67157 16 5.5V12.5C16 13.3284 15.3284 14 14.5 14H7.5C6.67157 14 6 13.3284 6 12.5V5.5C6 4.67157 6.67157 4 7.5 4Z"
                fill="#424242"/>
        </svg>
    );
}

export function Bot({className}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M17.753 13.9999C18.9957 13.9999 20.003 15.0073 20.003 16.2499V17.155C20.003 18.2487 19.5256 19.2879 18.6958 20.0003C17.1303 21.3442 14.89 22.0011 12 22.0011C9.1105 22.0011 6.87168 21.3445 5.30882 20.0008C4.48019 19.2884 4.00354 18.25 4.00354 17.1572V16.2499C4.00354 15.0073 5.0109 13.9999 6.25354 13.9999H17.753ZM17.753 15.4999H6.25354C5.83933 15.4999 5.50354 15.8357 5.50354 16.2499V17.1572C5.50354 17.8129 5.78953 18.4359 6.28671 18.8634C7.54479 19.945 9.4408 20.5011 12 20.5011C14.56 20.5011 16.4578 19.9447 17.7187 18.8622C18.2166 18.4347 18.503 17.8112 18.503 17.155V16.2499C18.503 15.8357 18.1673 15.4999 17.753 15.4999ZM11.8986 2.00733L12.0003 2.00049C12.38 2.00049 12.6938 2.28264 12.7435 2.64872L12.7503 2.75049L12.7495 3.49949L16.25 3.49999C17.4926 3.49999 18.5 4.50735 18.5 5.74999V10.2546C18.5 11.4972 17.4926 12.5046 16.25 12.5046H7.75C6.50736 12.5046 5.5 11.4972 5.5 10.2546V5.74999C5.5 4.50735 6.50736 3.49999 7.75 3.49999L11.2495 3.49949L11.2503 2.75049C11.2503 2.37079 11.5325 2.057 11.8986 2.00733L12.0003 2.00049L11.8986 2.00733ZM16.25 4.99999H7.75C7.33578 4.99999 7 5.33578 7 5.74999V10.2546C7 10.6688 7.33578 11.0046 7.75 11.0046H16.25C16.6642 11.0046 17 10.6688 17 10.2546V5.74999C17 5.33578 16.6642 4.99999 16.25 4.99999ZM9.74929 6.49999C10.4393 6.49999 10.9986 7.05932 10.9986 7.74928C10.9986 8.43925 10.4393 8.99857 9.74929 8.99857C9.05932 8.99857 8.5 8.43925 8.5 7.74928C8.5 7.05932 9.05932 6.49999 9.74929 6.49999ZM14.242 6.49999C14.932 6.49999 15.4913 7.05932 15.4913 7.74928C15.4913 8.43925 14.932 8.99857 14.242 8.99857C13.5521 8.99857 12.9927 8.43925 12.9927 7.74928C12.9927 7.05932 13.5521 6.49999 14.242 6.49999Z"
                fill="#5B5FC7"/>
        </svg>
    );
}

export function Menu({className}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
                fill="#424242"/>
        </svg>
    );
}

export function Circle({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z"
                  fill={color === "#ffffff" ? color : "#424242"}/>
        </svg>
    );
}

export function SmallArrow({className, color}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M2.14645 4.64645C2.34171 4.45118 2.65829 4.45118 2.85355 4.64645L6 7.79289L9.14645 4.64645C9.34171 4.45118 9.65829 4.45118 9.85355 4.64645C10.0488 4.84171 10.0488 5.15829 9.85355 5.35355L6.35355 8.85355C6.15829 9.04882 5.84171 9.04882 5.64645 8.85355L2.14645 5.35355C1.95118 5.15829 1.95118 4.84171 2.14645 4.64645Z"
                fill={color === "#ffffff" ? color : "#424242"}/>
        </svg>
    );
}

export function Setting({className}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M1.91075 7.38266C2.28004 6.24053 2.88839 5.19213 3.69109 4.30364C3.82683 4.15339 4.03978 4.09984 4.23044 4.16802L6.14873 4.85392C6.6688 5.03977 7.24107 4.76883 7.42692 4.24875C7.4452 4.19762 7.45927 4.14507 7.469 4.09173L7.83446 2.08573C7.8708 1.88627 8.02398 1.7285 8.22227 1.6863C8.80246 1.5628 9.39734 1.5 10 1.5C10.6023 1.5 11.1968 1.56273 11.7767 1.68607C11.9749 1.72824 12.1281 1.88591 12.1645 2.08529L12.531 4.09165C12.6301 4.63497 13.1509 4.9951 13.6942 4.89601C13.7476 4.88627 13.8002 4.87219 13.8512 4.85395L15.7696 4.16802C15.9602 4.09984 16.1732 4.15339 16.3089 4.30364C17.1116 5.19213 17.72 6.24053 18.0893 7.38266C18.1516 7.57534 18.0915 7.78658 17.9371 7.91764L16.3823 9.23773C15.9613 9.5952 15.9098 10.2263 16.2673 10.6473C16.3024 10.6887 16.3409 10.7271 16.3823 10.7623L17.9371 12.0824C18.0915 12.2134 18.1516 12.4247 18.0893 12.6173C17.72 13.7595 17.1116 14.8079 16.3089 15.6964C16.1732 15.8466 15.9602 15.9002 15.7696 15.832L13.8513 15.1461C13.3312 14.9602 12.759 15.2312 12.5731 15.7512C12.5548 15.8024 12.5408 15.8549 12.531 15.9085L12.1645 17.9147C12.1281 18.1141 11.9749 18.2718 11.7767 18.3139C11.1968 18.4373 10.6023 18.5 10 18.5C9.39734 18.5 8.80246 18.4372 8.22227 18.3137C8.02398 18.2715 7.8708 18.1137 7.83446 17.9143L7.46902 15.9084C7.36993 15.365 6.84916 15.0049 6.30583 15.104C6.25241 15.1137 6.19987 15.1278 6.14881 15.1461L4.23044 15.832C4.03978 15.9002 3.82683 15.8466 3.69109 15.6964C2.88839 14.8079 2.28004 13.7595 1.91075 12.6173C1.84845 12.4247 1.90852 12.2134 2.06289 12.0824L3.61773 10.7623C4.03872 10.4048 4.09021 9.77373 3.73274 9.35274C3.69759 9.31135 3.65913 9.27288 3.61775 9.23775L2.06289 7.91764C1.90852 7.78658 1.84845 7.57534 1.91075 7.38266ZM2.9713 7.37709L4.26499 8.47546C4.34778 8.54576 4.42471 8.62269 4.49501 8.70548C5.20995 9.54746 5.10697 10.8096 4.26497 11.5246L2.9713 12.6229C3.26335 13.4051 3.6848 14.1322 4.21623 14.7751L5.81221 14.2044C5.91449 14.1679 6.01958 14.1397 6.12643 14.1202C7.21307 13.922 8.25462 14.6423 8.45281 15.729L8.75678 17.3975C9.16465 17.4655 9.58 17.5 10 17.5C10.4197 17.5 10.8348 17.4656 11.2424 17.3976L11.5472 15.7289C11.5667 15.6221 11.5949 15.517 11.6314 15.4147C12.0031 14.3746 13.1477 13.8327 14.1879 14.2044L15.7838 14.7751C16.3152 14.1322 16.7367 13.4051 17.0287 12.6229L15.735 11.5245C15.6522 11.4542 15.5753 11.3773 15.505 11.2945C14.7901 10.4525 14.8931 9.1904 15.7351 8.47544L17.0287 7.37709C16.7367 6.59486 16.3152 5.86783 15.7838 5.22494L14.1878 5.79559C14.0855 5.83214 13.9804 5.8603 13.8736 5.87979C12.787 6.07796 11.7454 5.3577 11.5473 4.27119L11.2424 2.60235C10.8348 2.53443 10.4197 2.5 10 2.5C9.58 2.5 9.16465 2.53448 8.75678 2.60249L8.45279 4.27105C8.43331 4.37791 8.40515 4.48299 8.3686 4.58527C7.99689 5.62542 6.85236 6.1673 5.81213 5.79556L4.21623 5.22494C3.6848 5.86783 3.26335 6.59486 2.9713 7.37709ZM7.50001 10C7.50001 8.61929 8.6193 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.6193 12.5 7.50001 11.3807 7.50001 10ZM8.50001 10C8.50001 10.8284 9.17159 11.5 10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17159 8.5 8.50001 9.17157 8.50001 10Z"
                fill="#424242"/>
        </svg>
    );
}

export function Unroll({className}: SvgIconsProps): React.ReactElement {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M10.5 3L16.5428 3.00182L16.6281 3.01661L16.691 3.03779L16.767 3.07719L16.8221 3.11759L16.8824 3.17788L16.9112 3.21534L16.9533 3.2886L16.9834 3.37186L16.9979 3.45421L17 3.5V9.5C17 9.77614 16.7761 10 16.5 10C16.2545 10 16.0504 9.82312 16.0081 9.58988L16 9.5V4.706L4.706 16H9.5C9.74546 16 9.94961 16.1769 9.99194 16.4101L10 16.5C10 16.7455 9.82312 16.9496 9.58988 16.9919L9.5 17L3.47964 16.9996L3.4112 16.9921L3.30896 16.9622L3.23299 16.9228L3.17786 16.8824L3.11758 16.8221L3.08884 16.7847L3.04674 16.7114L3.01661 16.6281L3.01109 16.605C3.00383 16.5713 3 16.5361 3 16.5L3.00546 16.5739L3.00182 16.5428L3 10.5C3 10.2239 3.22386 10 3.5 10C3.74546 10 3.94961 10.1769 3.99194 10.4101L4 10.5V15.292L15.292 4H10.5C10.2545 4 10.0504 3.82312 10.0081 3.58988L10 3.5C10 3.22386 10.2239 3 10.5 3Z"
                fill="#424242"/>
        </svg>
    );
}