import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import React, { ReactElement } from "react";

type CustomFormParams = {
  formControl: UseFormReturn<any>;
  label: string;
  labelColor?: string;
  name: string;
  children: ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomForm = ({
  formControl,
  label,
  labelColor,
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
            <FormLabel className="text-gray-200">{label}</FormLabel>
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
