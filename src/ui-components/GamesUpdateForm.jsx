/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Games } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function GamesUpdateForm(props) {
  const {
    id,
    games,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    Release_date: undefined,
    Description: undefined,
    Image: undefined,
    Developer: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Release_date, setRelease_date] = React.useState(
    initialValues.Release_date
  );
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Image, setImage] = React.useState(initialValues.Image);
  const [Developer, setDeveloper] = React.useState(initialValues.Developer);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...gamesRecord };
    setName(cleanValues.name);
    setRelease_date(cleanValues.Release_date);
    setDescription(cleanValues.Description);
    setImage(cleanValues.Image);
    setDeveloper(cleanValues.Developer);
    setErrors({});
  };
  const [gamesRecord, setGamesRecord] = React.useState(games);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Games, id) : games;
      setGamesRecord(record);
    };
    queryData();
  }, [id, games]);
  React.useEffect(resetStateValues, [gamesRecord]);
  const validations = {
    name: [],
    Release_date: [],
    Description: [],
    Image: [{ type: "URL" }],
    Developer: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          Release_date,
          Description,
          Image: Image || undefined,
          Developer,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Games.copyOf(gamesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "GamesUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              Release_date,
              Description,
              Image,
              Developer,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Release date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={Release_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Release_date: value,
              Description,
              Image,
              Developer,
            };
            const result = onChange(modelFields);
            value = result?.Release_date ?? value;
          }
          if (errors.Release_date?.hasError) {
            runValidationTasks("Release_date", value);
          }
          setRelease_date(value);
        }}
        onBlur={() => runValidationTasks("Release_date", Release_date)}
        errorMessage={errors.Release_date?.errorMessage}
        hasError={errors.Release_date?.hasError}
        {...getOverrideProps(overrides, "Release_date")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Release_date,
              Description: value,
              Image,
              Developer,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Release_date,
              Description,
              Image: value,
              Developer,
            };
            const result = onChange(modelFields);
            value = result?.Image ?? value;
          }
          if (errors.Image?.hasError) {
            runValidationTasks("Image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("Image", Image)}
        errorMessage={errors.Image?.errorMessage}
        hasError={errors.Image?.hasError}
        {...getOverrideProps(overrides, "Image")}
      ></TextField>
      <TextField
        label="Developer"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Developer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              Release_date,
              Description,
              Image,
              Developer: value,
            };
            const result = onChange(modelFields);
            value = result?.Developer ?? value;
          }
          if (errors.Developer?.hasError) {
            runValidationTasks("Developer", value);
          }
          setDeveloper(value);
        }}
        onBlur={() => runValidationTasks("Developer", Developer)}
        errorMessage={errors.Developer?.errorMessage}
        hasError={errors.Developer?.hasError}
        {...getOverrideProps(overrides, "Developer")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
