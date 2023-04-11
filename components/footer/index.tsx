import Link from "next/link";
// import { FooterSection } from "../../typings";

// type Props = {
//   footer: FooterSection;
// };

const year = new Date().getFullYear();

const Footer = () => {
  // console.log(footer);
  return (
    <footer className=" bg-[#243665] text-[#f1f1e7] px-2 pt-6 pb-4 font-Noto space-y-1">
      <div className="justify-center items-center md:space-x-8 md:flex">
        <div className="uppercase font-bold w-auto md:w-20 text-center md:text-lg">
          House Boutique
        </div>
        <div className=" hidden w-[1px] h-16 md:h-12 bg-[#f1f1e7] md:block"></div>
        <div className="flex flex-col text-center mt-4 md:text-left md:mt-0">
          <div className="text-xs">
            서울시 종로구 종로 33 그랑서울타워1, 7층 (03159)
          </div>
          <div className="text-xs">사업자등록번호: 881-86-01514</div>
          <div className="text-xs md:flex">
            <div>TEL: 070 - 7011 - 3131</div>
            <div className="hidden bg-[#f1f1e7] w-[1px] h-auto md:block md:mx-2"></div>
            <div>E-mail: info@house-boutique.net</div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center flex flex-col pt-4">
        <div className="pb-1">{year} © House Boutique. All rights reserved</div>
        {/* LOGIN PAGE */}
        {/* <Link
          href="/studio"
          rel="noopener noreferrer"
          target="_blank"
          className="inline italic"
        >
          manager
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
