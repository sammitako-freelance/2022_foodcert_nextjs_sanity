import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#F1F1E7] font-bold">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F1F1E7] mr-2" />
          Go To Website
        </Link>
        <div className="hidden md:flex p-3 rounded-lg justify-center border-2 border-[#F1F1E7]">
          <h1 className="font-bold text-[#F1F1E7]">
            문의사항: hansaem.pk@gmail.com
          </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
