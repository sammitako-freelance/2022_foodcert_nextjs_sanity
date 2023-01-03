import Image from "next/image";
import React from "react";
// import Input from "./Input";
import { useForm } from "react-hook-form";

type Props = {};

const ContactCard = (props: Props) => {
  const submitEmail = process.env.SUBMIT_EMAIL;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  // const autoHyphen = (target: any) => {
  //   if (target !== undefined)
  //     target.value = target.value
  //       .replace(/[^0-9]/g, "")
  //       .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  // };
  return (
    <section className="flex flex-col lg:flex-row items-center bg-[#F5F5F4] rounded-lg shadow-lg">
      {/* INPUTS */}
      <div className="flex flex-col py-8 px-6 sm:p-10 text-left w-full">
        <form
          target="_blank"
          onSubmit={onSubmit}
          method="POST"
          // action="https://formsubmit.io/send/hansaem.pk@gmail.com"
          // action={`https://formsubmit.co/${submitEmail}`}
          action={`https://formsubmit.co/p.hansaem@hotmail.com`}
          encType="multipart/form-data"
        >
          {/* NAME */}
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-500"
          >
            Your name*
          </label>
          <div id="name" className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type="text"
              id="name"
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder="이름"
              {...register("name", {
                required: true,
                minLength: 2,
              })}
            />
            {errors.name && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors.name?.type === "required" && "필수 항목 입니다."}
                {errors.name?.type === "minLength" &&
                  "2글자 이상으로 입력 하세요."}
              </p>
            )}
          </div>
          {/* TEL */}
          <label
            htmlFor="tel"
            className="block text-sm font-medium text-gray-500"
          >
            Phone number*
          </label>
          <div id="tel" className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type="text"
              id="tel"
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder="01012345678"
              // onInput={autoHyphen}
              {...register("tel", {
                required: true,
                pattern: /^(\d{2,3})(\d{3,4})(\d{4})$/,
              })}
            />

            {errors.tel && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors.tel?.type === "required" && "필수 항목 입니다."}
                {errors.tel?.type === "pattern" && "입력을 다시 확인해주세요."}
              </p>
            )}
          </div>
          {/* EMAIL */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-500"
          >
            Email address*
          </label>
          <div id="email" className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type="text"
              id="email"
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder="house-boutique@email.com"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />

            {errors.email && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors.email.type === "required" && "필수 항목 입니다."}
                {errors.email.type === "pattern" && "입력을 다시 확인해주세요."}
              </p>
            )}
          </div>

          {/* FILES */}
          <div className="text-custom-black text-sm py-1">
            업로드 파일의 사이즈 합이{" "}
            <span className="text-custom-blue font-bold">5MB 미만</span>이어야
            합니다.
          </div>
          <label
            htmlFor="uploadOne"
            className="input-file-button block text-sm font-medium text-gray-500"
          >
            File upload 1*
          </label>
          <div id="uploadOne" className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type="file"
              id="uploadOne"
              className="block w-full shadow-sm text-sm text-custom-dark-gray file:mr-4 file:py-2 file:px-4
              file:rounded-l-md file:border-0
              file:text-sm
              file:bg-custom-black file:text-custom-beige
              hover:file:bg-opacity-70
              hover:cursor-pointer file:hover:cursor-pointer
              "
              {...register("uploadOne", {
                required: true,
              })}
            />
            {errors?.uploadOne && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors?.uploadOne.type === "required" && "필수 항목 입니다."}
              </p>
            )}
          </div>

          <label
            htmlFor="uploadTwo"
            className="input-file-button block text-sm font-medium text-gray-500"
          >
            File upload 2*
          </label>
          <div id="uploadTwo" className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type="file"
              id="uploadTwo"
              className="block w-full shadow-sm text-sm text-custom-dark-gray file:mr-4 file:py-2 file:px-4
              file:rounded-l-md file:border-0
              file:text-sm
              file:bg-custom-black file:text-custom-beige
              hover:file:bg-opacity-70
              hover:cursor-pointer file:hover:cursor-pointer
              "
              {...register("uploadTwo", {
                required: true,
              })}
            />
            {errors?.uploadTwo && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors?.uploadTwo.type === "required" && "필수 항목 입니다."}
              </p>
            )}
          </div>

          {/* SUBJECT */}
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-500"
          >
            Subject*
          </label>
          <div id="subject" className="mt-2 rounded-md mb-5 last:mb-0">
            <input
              type="text"
              id="subject"
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder="제목"
              {...register("subject", {
                required: true,
                minLength: 2,
              })}
            />
            {errors?.subject && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors?.subject.type === "required" && "필수 항목 입니다."}
                {errors?.subject.type === "minLength" &&
                  "2글자 이상으로 입력 바랍니다."}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-500"
          >
            Your message*
          </label>
          <div id="message" className="mt-2 rounded-md mb-5 last:mb-0">
            <textarea
              id="message"
              className="text-gray-500 shadow-sm placeholder:text-custom-dark-gray bg-[#F5F5F4] block focus:bg-white w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:border-custom-black focus:ring-custom-black focus:ring-1 text-sm"
              placeholder="문의 사항을 적어주세요."
              {...register("message", {
                required: true,
                minLength: 2,
              })}
            />

            {errors?.message && (
              <p className="text-red-400 mt-1 text-xs ml-1">
                {errors?.message.type === "required" && "필수 항목 입니다."}
                {errors?.message.type === "minLength" &&
                  "2글자 이상으로 입력 바랍니다."}
              </p>
            )}
          </div>
          {/* <input name="_formsubmit_id" type="text" className="hidden" /> */}

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row py-6 md:py-8">
            <div className="mx-auto">
              <button
                type="submit"
                className="bg-custom-black text-custom-beige uppercase tracking-wider py-3 px-8 md:px-10 rounded-md font-bold text-sm drop-shadow-md border-2 border-custom-black hover:bg-[#F5F5F4] hover:text-custom-black hover:cursor-pointer"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* GOOGLE MAP */}
      <div className="self-start w-full h-full lg:rounded-tr-lg bg-gray-500 hidden sm:block">
        <div>지도 자리</div>
      </div>
      <style jsx>{`
        textarea {
          resize: none;
          height: 300px;
        }
      `}</style>
    </section>
  );
};

export default ContactCard;
