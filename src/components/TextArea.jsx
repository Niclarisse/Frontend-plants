import React from "react";

const TextArea = ({
  labelFor,
  labelText,
  name,
  errors,
  placeholder,
  customClass,
  inputStyle,
  isRequired,
  register,
  onChange,
  value,
  setValue = false,
}) => {
  if (setValue) {
    // setValue(name, value);
  }
  /* Format error message to remove the tick and capitilize the first letter */
  let fieldName = name.replace(/-/gi, " ");
  fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  return register ? (
    <div className={`flex flex-col justify-start items-start ${customClass}`}>
      <label htmlFor={labelFor} className="font-nunito font-normal mb-1">
        {labelText}
      </label>
      <textarea
        {...register(name, {
          required: {
            value: isRequired,
            message: `${fieldName} is required`,
          },
        })}
        className={`bg-darkGrey appearance-none relative block w-full px-3 py-2  placeholder-gray-500 focus:outline-none focus:border-primary focus:z-10 sm:text-sm rounded-md ${inputStyle}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div className="">
        <small className="font-nunito text-red-600">
          {isRequired && errors[name] && errors[name].message}
        </small>
      </div>
    </div>
  ) : (
    <div className={`flex flex-col justify-start items-start ${customClass}`}>
      <label htmlFor={labelFor} className="font-nunito font-normal mb-1">
        {labelText}
      </label>
      <textarea
        className={`rounded-md appearance-none relative block w-full px-3 py-2 border border-primary/[0.40] placeholder-gray-500 focus:outline-none focus:border-primary focus:z-10 sm:text-sm ${inputStyle}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextArea;
