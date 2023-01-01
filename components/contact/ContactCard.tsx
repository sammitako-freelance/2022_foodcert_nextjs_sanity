import React from "react";
import Input from "./Input";

type Props = {};

const ContactCard = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#F5F5F4] rounded-lg shadow-lg">
      {/* INPUTS */}
      <div className="flex flex-col p-10 text-left">
        <Input
          labelFor="name"
          labelName="Your name"
          type="text"
          placeholder="이름"
        />
        <Input
          labelFor="tel"
          labelName="Phone number"
          type="text"
          placeholder="010-1234-5678"
        />
        <Input
          labelFor="email"
          labelName="Email address"
          type="text"
          placeholder="house-boutique@email.com"
        />
        <Input
          labelFor="file1"
          labelName="File upload 1"
          type="file"
          placeholder="file"
        />
        <Input
          labelFor="file2"
          labelName="File upload 2"
          type="file"
          placeholder="file"
        />
        <Input
          labelFor="subject"
          labelName="Subject"
          type="text"
          placeholder="제목"
        />
        <Input
          labelFor="message"
          labelName="Your message"
          type="textarea"
          placeholder="문의 사항을 적어주세요."
        />
        <div className="pb-10">
          <div className="text-custom-black text-sm pb-2">
            Please check the box below to proceed.
          </div>
          <div className="text-red-500">캡차 들어갈 자리</div>
        </div>
      </div>
      {/* GOOGLE MAP */}
      <div className="bg-gray-500 self-start w-full h-full lg:rounded-tr-lg">
        <div>지도자리</div>
      </div>
    </div>
  );
};

export default ContactCard;
