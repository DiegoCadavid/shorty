import React from "react";

interface Props {
  label: string;
  placeholder: string;
  type: "text" | "password";
  message?: JSX.Element
}

const InputText = ({ label, placeholder, type, message }: Props) => {
  return (
    <div className="w-full">
      <>
        <label
          htmlFor={label}
          className="font-secondary text-primary-500 font-medium capitalize">
          {label}
        </label>
        <input
          type={type}
          name={label}
          id={label}
          placeholder={placeholder}
          className="block border border-brd p-3 outline-none w-full mt-1 focus:ring focus:ring-primary-300 ring-offset-1"
        />
        {message}
      </>
    </div>
  );
};

export default InputText;
