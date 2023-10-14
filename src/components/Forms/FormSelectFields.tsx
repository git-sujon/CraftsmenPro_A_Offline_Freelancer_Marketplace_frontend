"use client";
import { ISelectOptions } from "@/types/common";
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";



interface ISelectFieldProps {
  name: string;
  options: ISelectOptions[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: ISelectOptions;
  placeholder?: string;
}

const FormSelectFields = ({
  name,
  options,
  label,
  placeholder,
}: ISelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label}

      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size="large"
            options={options}
            value={value}
            placeholder={placeholder}
            className="w-full"
   
          />
        )}
      />
    </>
  );
};

export default FormSelectFields;
