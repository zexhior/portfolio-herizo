import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import React, { ReactElement } from "react";

type CustomFormParams = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  formControl: UseFormReturn<any>;
  label: string;
  name: string;
  children: ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomForm = ({
  formControl,
  label,
  name,
  children,
  ...props
}: CustomFormParams) => {
  return (
    <FormField
      control={formControl.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="mb-3">
            <FormLabel className="text-white">{label}</FormLabel>
            <FormControl>
              {React.isValidElement(children)
                ? React.cloneElement(children, { ...field, ...props })
                : children}
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};

export default CustomForm;
