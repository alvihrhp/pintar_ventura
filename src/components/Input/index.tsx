import React from "react";
/** Types */
import { Input as InputType } from "const/types";

interface Props {
  input: InputType;
  inputs: InputType[];
  setInputs: React.Dispatch<React.SetStateAction<InputType[]>>;
  style: string;
}

const Input: React.FC<Props> = ({ input, inputs, setInputs, style }) => {
  const handleInputChange = (value: string, id: string) => {
    const newInputs: InputType[] = inputs.map((elInput: InputType) => {
      if (elInput.id === id) {
        return {
          ...elInput,
          value,
        };
      }
      return {
        ...elInput,
      };
    });

    setInputs(newInputs);
  };

  return (
    <input
      type={input.type}
      id={input.id}
      value={input.value}
      placeholder={input.placeholder}
      className={style}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        handleInputChange(e.currentTarget.value, e.currentTarget.id)
      }
    />
  );
};

export default Input;
