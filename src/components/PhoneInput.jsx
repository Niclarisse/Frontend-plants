import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent = ({
  label,
  inputValue,
  country,
  onlyCountries,
  handleChange,
  handlePhone,
  error,
  customClass,
  register,
  setValue,
  background = '',
  borderColor = '#ddd',
  ...props
}) => {
  let onChange;
  let name;
  let control = [];
  let rules;

  // noRegister && ({ onChange } = noRegister);
  register && ({ control, name, rules } = register);

  useEffect(() => {
    if (setValue) {
      setValue(register.name, inputValue);
    }
  }, [setValue, inputValue]);

  return (
    <div className={`flex flex-col ${customClass}`}>
      <h1 className=" font-nunito font-normal text-black mb-1">{label}</h1>

      <Controller
        className="w-full"
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div className="w-full">
            <PhoneInput
              country={'rw'}
              value={inputValue}
              onChange={(value, data, e, formattedValue) => {
                onChange(value);
                handleChange(value, data, e, formattedValue);
              }}
              inputStyle={{
                width: '100%',
                border: `1px solid ${borderColor}`,
                height: '45px',
                background: `${background}`,
              }}
              buttonStyle={{
                border: 'none',
              }}
            />
            <div className="">
              <small className="font-nunito text-red-600">{error}</small>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default PhoneInputComponent;
