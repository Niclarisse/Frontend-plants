import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const customStyles = {
  valueLabel: (styles) => ({
    ...styles,
    text: "white",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#F3F1FF",
    border: state.isFocused ? "1px solid #F3F1FF" : "none",
    boxShadow: state.isFocused ? "0 0 0 2px #ddd" : null,
    "&:hover": {
      border: state.isFocused ? "1px solid #F3F1FF" : "none",
    },
    height: "40px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#01A653" : "white",
    marginBottom: "2px",
    color: state.isSelected ? "white" : "#01A653",
    "&:hover": {
      backgroundColor: "#01A653",
      color: "white",
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function CustomSelect({
  placeholder,
  name,
  value,
  defaultValue,
  options,
  onChange,
  ...props
}) {
  return (
    <Select
      value={value}
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      styles={customStyles}
      defaultValue={value || defaultValue}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      isSearchable
      isLoading={false}
      {...props}
    />
  );
}

export default function SingleSelect({
  label,
  options,
  hidden,
  customClass,
  defaultValue,
  placeholder = "Select...",
  register,
  noRegister,
  isRequired,
  error,
  handleChange,
  setValue = false,
  unControlledValue = false,
  isDisabled = false,
  ...props
}) {
  let onChange;
  let name;
  let control = [];
  let rules;

  // noRegister && ({ onChange } = noRegister);
  register && ({ control, name, rules } = register);

  useEffect(() => {
    if (setValue) {
      setValue(register.name, defaultValue);
    }
  }, [setValue, defaultValue]);
  return register ? (
    <div className={`flex flex-col ${customClass} ${hidden ? " hidden" : ""}`}>
      <label className=" font-normal text-black mb-1">{label}</label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div>
            <CustomSelect
              placeholder={placeholder}
              options={options}
              value={value ? value : defaultValue}
              onChange={(e) => {
                onChange(e);
                handleChange(e);
              }}
              isDisabled={isDisabled}
              {...props}
            />
            <div className="">
              <small className="font-nunito text-red-600">{error}</small>
            </div>
          </div>
        )}
      />
    </div>
  ) : (
    <div className={`flex flex-col ${customClass} ${hidden ? " hidden" : ""}`}>
      <h1 className=" font-normal text-black mb-1 text-lg">{label}</h1>
      <CustomSelect
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        options={options}
        value={unControlledValue ? unControlledValue : defaultValue}
        {...props}
        isDisabled={isDisabled}
      />
    </div>
  );
}
