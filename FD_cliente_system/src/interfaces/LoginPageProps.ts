import { Children } from "react";

export interface LoginPageProps {
    type: string;
    placeholder: string;
    icon: string;
    onChange: any;
    autocomplete: any;
}

export interface LoginErroMessage {
    error: string;
}

export interface ProtectedProps {
    children: JSX.Element
}