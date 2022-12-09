/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PersonalPlaylist } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonalPlaylistUpdateFormInputValues = {
    Title?: string;
    Description?: string;
};
export declare type PersonalPlaylistUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalPlaylistUpdateFormOverridesProps = {
    PersonalPlaylistUpdateFormGrid?: FormProps<GridProps>;
    Title?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalPlaylistUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonalPlaylistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    personalPlaylist?: PersonalPlaylist;
    onSubmit?: (fields: PersonalPlaylistUpdateFormInputValues) => PersonalPlaylistUpdateFormInputValues;
    onSuccess?: (fields: PersonalPlaylistUpdateFormInputValues) => void;
    onError?: (fields: PersonalPlaylistUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PersonalPlaylistUpdateFormInputValues) => PersonalPlaylistUpdateFormInputValues;
    onValidate?: PersonalPlaylistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalPlaylistUpdateForm(props: PersonalPlaylistUpdateFormProps): React.ReactElement;
