import React, { useState, useEffect } from "react";
/** Components */
import { Input, Modal } from "components";
/** Types */
import { Input as InputType } from "const/types";
/** Helpers */
import { fetchHelper } from "helpers";
/** React Router */
import { useParams, useNavigate, NavigateFunction } from "react-router-dom";

interface Props {}

const Photos: React.FC<Props> = () => {
  const navigate: NavigateFunction = useNavigate();

  const { keyword } = useParams();

  const [inputs, setInputs] = useState<InputType[]>([
    {
      id: "keyword",
      type: "text",
      placeholder: "Search high-resolution images",
      value: String(keyword),
    },
  ]);

  const [data, setData] = useState<{ [key: string]: any }[]>([]);

  const [linkPhoto, setLinkPhoto] = useState<string>("");

  const fetchPhotos = async () => {
    try {
      const response: any = await fetchHelper(
        `/search/photos?query=${keyword}`,
        "GET"
      );

      const { results, total, total_page } = response.data;

      setData(results);
    } catch (error: any) {
      alert(error.response.data.errors[0]);
    }
  };

  const handleSearchForm = (e: React.FormEvent) => {
    e.preventDefault();

    const searchValue = inputs[0].value;

    if (searchValue.length) {
      navigate(`../photos/${searchValue}`, { replace: true });
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [keyword]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-y-hidden">
      {!!linkPhoto.length && (
        <Modal setLinkPhoto={setLinkPhoto}>
          <img className="w-full" src={linkPhoto} alt="" />
        </Modal>
      )}
      <div className="w-full h-full shadow sticky top-0 p-3 z-10 bg-black">
        <form className="w-full h-full" onSubmit={handleSearchForm}>
          <Input
            input={inputs[0]}
            inputs={inputs}
            setInputs={setInputs}
            style="w-full shadow-lg rounded py-2 px-3 border border-secondary"
          />
        </form>
      </div>

      <div className="w-full max-w-[1280px] mt-4 flex flex-wrap justify-between px-3">
        {data.map((photo: { [key: string]: any }, photoIdx: number) => (
          <div
            className="w-[100%] md:w-[30%] h-fit mb-5 rounded shadow bg-neutral"
            key={photoIdx}
          >
            <div className="flex flex-wrap items-center p-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={photo.user.profile_image.small}
              />
              <span className="ml-3 font-semibold">{photo.user.name}</span>
            </div>
            <img
              className="w-full cursor-zoom-in"
              src={photo.urls.small}
              alt={photo.alt_description}
              onClick={() => setLinkPhoto(photo.urls.regular)}
            />
            <div className="p-2">
              <p className="font-medium text-sm">
                {!photo.description ? "No Title" : photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
