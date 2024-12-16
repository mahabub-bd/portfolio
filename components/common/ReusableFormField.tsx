import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ReusableFormFieldProps {
  name: string;
  placeholder: string;
  description: string;
  inputType?: "input" | "textarea" | "select";
  selectOptions?: { value: string; label: string; disabled?: boolean }[]; // For select fields
}

const ReusableFormField: React.FC<ReusableFormFieldProps> = ({
  name,
  placeholder,
  description,
  inputType = "input",
  selectOptions,
}) => {
  const { control } = useFormContext(); // Access the form context

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            {inputType === "textarea" ? (
              <textarea
                {...field}
                placeholder={placeholder}
                className="border rounded-md text-sm p-2 w-full"
              />
            ) : inputType === "select" && selectOptions ? (
              <select
                {...field}
                className="border rounded-md p-[6px] w-full font-sans text-gray-600 focus:outline-none"
              >
                {selectOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                placeholder={placeholder}
                {...field}
                className="bg-white"
              />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {/* Display validation error */}
          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ReusableFormField;
