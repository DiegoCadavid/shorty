import React, { useState } from "react";

interface IOption {
  name: string;
  value: string | number;
}

interface Props {
  options: IOption[];
}

const Switch = ({ options }: Props) => {
  //Value of the selected option
  const [optionSelect, setOptionSelect] = useState<string | number>(
    options[0].value || ""
  );

  const handleClick = (value: string | number) => {
    setOptionSelect(value);
  };

  return (
    <div className="flex h-fit w-full border border-brd">
      {options.map((option) => {
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              handleClick(option.value);
            }}
            className={` ${
              option.value === optionSelect
                ? "bg-primary-300 text-white"
                : "bg-transparent text-muted hover:bg-primary-300/10"
            }  p-3 uppercase font-bold w-full`}>
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default Switch;
