import React, { useState } from "react";
/** Components */
import { Input } from "components";
/** Types */
import { Input as InputType } from "const/types";
/** React Router */
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = () => {
  const navigate: NavigateFunction = useNavigate();

  const [inputs, setInputs] = useState<InputType[]>([
    {
      id: "keyword",
      type: "text",
      placeholder: "Search high-resolution images",
      value: "",
    },
  ]);

  const handleSearchForm = (e: React.FormEvent) => {
    e.preventDefault();

    const searchValue = inputs[0].value;

    if (searchValue.length) {
      navigate(`photos/${searchValue}`);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-3">
      <div className="w-full max-w-[600px] ">
        <h1 className="font-semibold text-primary drop-shadow-md">
          Pintar Ventura Group
        </h1>
        <form className="w-full h-full mt-2" onSubmit={handleSearchForm}>
          <Input
            input={inputs[0]}
            inputs={inputs}
            setInputs={setInputs}
            style="w-full shadow-lg rounded py-2 px-3 border border-secondary"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
