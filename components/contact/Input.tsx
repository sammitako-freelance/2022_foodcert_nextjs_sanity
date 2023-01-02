import { useForm } from "react-hook-form";

type Props = {
  labelFor: string;
  labelName: string;
  type: string;
  placeholder: string;
  error: any;
};

const Input = ({ labelFor, labelName, type, placeholder, error }: Props) => {
  console.log(error);
  return (
    <>
      {labelFor === "name" && (
        <>
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />
            {error.name && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error.name?.type === "required" && "필수 항목 입니다."}
                {error.name?.type === "minLength" &&
                  "2글자 이상으로 입력 바랍니다."}
              </p>
            )}
          </div>
        </>
      )}

      {labelFor === "tel" && (
        <>
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />

            {error.tel && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error.tel?.type === "required" && "필수 항목 입니다."}
                {error.tel?.type === "pattern" && "입력을 다시 확인해주세요."}
              </p>
            )}
          </div>
        </>
      )}
      {labelFor === "email" && (
        <>
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />

            {error.email && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error.email.type === "required" && "필수 항목 입니다."}
                {error.email.type === "pattern" && "입력을 다시 확인해주세요."}
              </p>
            )}
          </div>
        </>
      )}

      {labelFor === "subject" && (
        <>
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />

            {error.subject && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error.subject?.type === "required" && "필수 항목 입니다."}
                {error.subject?.type === "minLength" &&
                  "2글자 이상으로 입력 바랍니다."}
              </p>
            )}
          </div>
        </>
      )}
      {labelFor === "fileOne" && (
        <>
          <label
            htmlFor={labelFor}
            className="input-file-button block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="block w-full shadow-sm text-sm text-custom-dark-gray file:mr-4 file:py-2 file:px-4
              file:rounded-l-md file:border-0
              file:text-sm
              file:bg-custom-black file:text-custom-beige
              hover:file:bg-opacity-70
              hover:cursor-pointer file:hover:cursor-pointer
              "
              placeholder={placeholder}
            />
            {error?.uploadOne && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error?.uploadOne.type === "required" && "필수 항목 입니다."}
              </p>
            )}
          </div>
        </>
      )}

      {labelFor === "fileTwo" && (
        <>
          <label
            htmlFor={labelFor}
            className="input-file-button block text-sm font-medium text-gray-500"
          >
            {labelName}*
          </label>
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type={type}
              name={labelFor}
              id={labelFor}
              className="block w-full shadow-sm text-sm text-custom-dark-gray file:mr-4 file:py-2 file:px-4
              file:rounded-l-md file:border-0
              file:text-sm
              file:bg-custom-black file:text-custom-beige
              hover:file:bg-opacity-70
              hover:cursor-pointer file:hover:cursor-pointer
              "
              placeholder={placeholder}
            />
            {error?.uploadTwo && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error?.uploadTwo.type === "required" && "필수 항목 입니다."}
              </p>
            )}
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
          <div id={labelFor} className="mt-2 rounded-md mb-5 last:mb-0">
            <textarea
              name={labelFor}
              id={labelFor}
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder={placeholder}
            />

            {error?.message && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {error?.message.type === "required" && "필수 항목 입니다."}
                {error?.message.type === "minLength" &&
                  "2글자 이상으로 입력 바랍니다."}
              </p>
            )}
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
