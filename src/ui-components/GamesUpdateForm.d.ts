/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Games } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GamesUpdateFormInputValues = {
    name?: string;
    Release_date?: string;
    Description?: string;
    Image?: string;
    Developer?: string;
};
export declare type GamesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Release_date?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
    Developer?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamesUpdateFormOverridesProps = {
    GamesUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    Release_date?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
    Image?: FormProps<TextFieldProps>;
    Developer?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GamesUpdateFormProps = React.PropsWithChildren<{
    overrides?: GamesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    games?: Games;
    onSubmit?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onSuccess?: (fields: GamesUpdateFormInputValues) => void;
    onError?: (fields: GamesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onValidate?: GamesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GamesUpdateForm(props: GamesUpdateFormProps): React.ReactElement;
