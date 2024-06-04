import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

export default function MultiSelect({
  label,
  hidden,
  customClass,
  options,
  defaultValue,
  placeholder = 'Select...',
  register,
  noRegister,
  error,
  handleChange,
  setValue = false,
  Styles,
  ...props
}) {
  let onChange;
  let name;
  let control = [];
  let rules;

  noRegister && ({ onChange } = noRegister);
  register && ({ control, name, rules } = register);

  useEffect(() => {
    if (setValue) {
      setValue(register.name, defaultValue);
    }
  }, [setValue, register.name, defaultValue]);

  return register ? (
    <div className={`flex flex-col ${customClass} ${hidden ? ' hidden' : ''}`}>
      <h1 className="font-rubik font-normal text-black mb-1">{label}</h1>
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
              {...props}
            />
            <div className="">
              <small className="font-rubik text-red-600">{error}</small>
            </div>
          </div>
        )}
      />
    </div>
  ) : (
    <div className={`flex flex-col ${customClass} ${hidden ? ' hidden' : ''}`}>
      <h1 className="font-rubik font-normal text-black">{label}</h1>
      <CustomSelect
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        options={options}
        {...props}
      />
    </div>
  );
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : '#01A653',
    marginBottom: '2px',
    '&:hover': {
      backgroundColor: '#01A653',
      color: 'white',
    },
  }),
  valueLabel: (styles) => ({
    ...styles,
    text: 'white',
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 'none' : '1px solid #F3F1FF',
    boxShadow: state.isFocused ? '0 0 0 1px #ddd' : null,
    '&:hover': {
      border: state.isFocused ? 'none' : '1px solid #F3F1FF',
    },
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
  }),
  multiValue: (base, state) => ({
    ...base,
    backgroundColor: state.isDisabled ? null : '#ddd',
    // borderRadius: "10px",
    margin: '2px',
  }),
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
      className="my-react-select-container "
      classNamePrefix="my-react-select"
      styles={customStyles}
      defaultValue={value || defaultValue}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      isSearchable
      isMulti
      isLoading={false}
      {...props}
    />
  );
}
