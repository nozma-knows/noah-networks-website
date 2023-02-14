import React from "react";
import { FieldErrors, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Autocomplete, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./FormTheme";

export interface AutocompleteOptionsProps {
  value: string;
  label: string;
}

// TextField Props
interface AutocompleteFieldProps {
  control: any;
  multiple?: boolean;
  name: string;
  value?: AutocompleteOptionsProps | string;
  options: AutocompleteOptionsProps[] | string[];
  placeholder: string;
  required?: string;
  disabled?: boolean;
  errors: FieldErrors;
}

export default function AutocompleteField({
  control,
  multiple = false,
  name,
  value,
  options,
  placeholder,
  required,
  disabled = false,
  errors,
}: AutocompleteFieldProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={`w-full ${errors[`${name}`] ? "" : "pb-5"}`}>
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          render={({ field }) => {
            return (
              <Autocomplete
                {...field}
                multiple={multiple}
                value={value}
                options={options}
                getOptionLabel={(option: AutocompleteOptionsProps | string) =>
                  typeof option === "string" ? option : option.label
                }
                placeholder={placeholder}
                disabled={disabled}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder={placeholder}
                  />
                )}
                onChange={(_, data) => field.onChange(data)}
              />
            );
          }}
        />
        <div className="self-end w-full">
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <div className="flex justify-end w-full text-red-500 text-sm font-bold">
                {message}
              </div>
            )}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
