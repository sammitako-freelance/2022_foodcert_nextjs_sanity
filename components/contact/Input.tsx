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
            className="mt-2 rounded-md shadow-sm w-[20rem] mb-7 last:mb-0"
          >
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 placeholder:text-custom-dark-gray block bg-[#F5F5F4] w-full rounded-md border-gray-300 focus:bg-white focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
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
            className="mt-2 rounded-md shadow-sm w-[20rem] mb-7 last:mb-0"
          >
            <textarea
              name={labelFor}
              id={labelFor}
              className="text-gray-500 placeholder:text-custom-dark-gray block bg-[#F5F5F4] w-full rounded-md border-gray-300 px-5 focus:bg-white focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
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
            className="mt-2 rounded-md shadow-sm w-[20rem] mb-7 last:mb-0"
          >
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 placeholder:text-custom-dark-gray block bg-[#F5F5F4] w-full rounded-md border-gray-300 px-5 focus:bg-white focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
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
