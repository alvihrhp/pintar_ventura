import React from "react";

interface Props {
  children: React.ReactNode;
  setLinkPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<Props> = ({ children, setLinkPhoto }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center z-20 bg-black/[0.8] fixed top-0">
      <div
        className="w-full h-full absolute z-30 backdrop-blur-sm cursor-zoom-out"
        onClick={() => setLinkPhoto("")}
      ></div>
      <div className="w-full max-w-[500px] z-40 relative mx-auto py-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;
