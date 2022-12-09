/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonalPlaylistCreateFormInputValues = {
    Title?: string;
    Description?: string;
};
export declare type PersonalPlaylistCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalPlaylistCreateFormOverridesProps = {
    PersonalPlaylistCreateFormGrid?: FormProps<GridProps>;
    Title?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalPlaylistCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonalPlaylistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonalPlaylistCreateFormInputValues) => PersonalPlaylistCreateFormInputValues;
    onSuccess?: (fields: PersonalPlaylistCreateFormInputValues) => void;
    onError?: (fields: PersonalPlaylistCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PersonalPlaylistCreateFormInputValues) => PersonalPlaylistCreateFormInputValues;
    onValidate?: PersonalPlaylistCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalPlaylistCreateForm(props: PersonalPlaylistCreateFormProps): React.ReactElement;
