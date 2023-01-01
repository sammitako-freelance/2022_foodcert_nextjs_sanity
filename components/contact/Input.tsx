import React from "react";

type Props = {
  labelFor: string;
  labelName: string;
  type: string;
  placeholder: string;
};

const Input = ({ labelFor, labelName, type, placeholder }: Props) => {
  return (
    <>
      {type === "file" && (
        <>
          <label
            htmlFor={labelFor}
            className="input-file-button block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div
            id={labelFor}
            className="mt-2 rounded-md shadow-sm mb-7 last:mb-0"
          >
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="block w-full text-sm text-custom-dark-gray file:mr-4 file:py-2 file:px-4
              file:rounded-l-md file:border-0
              file:text-sm
              file:bg-custom-black file:text-custom-beige
              hover:file:bg-opacity-70
              hover:cursor-pointer file:hover:cursor-pointer
              "
              placeholder={placeholder}
            />
          </div>
        </>
      )}

      {type === "textarea" && (
        <>
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div
            id={labelFor}
            className="mt-2 rounded-md shadow-sm mb-7 last:mb-0"
          >
            <textarea
              name={labelFor}
              id={labelFor}
              className="text-gray-500 placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-3 pl-5 pr-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />
          </div>
        </>
      )}

      {type === "text" && (
        <>
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div
            id={labelFor}
            className="mt-2 rounded-md shadow-sm mb-7 last:mb-0"
          >
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />
          </div>
        </>
      )}
      <style jsx>{`
        textarea {
          resize: none;
          height: 300px;
        }
      `}</style>
    </>
  );
};

export default Input;
