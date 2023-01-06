import Image from "next/image";
import LogoImg from "../../public/icons/house-boutique-logo.png";
const StudioLogo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center">
      <Image
        className="rounded object-cover bg-gray-200"
        width={50}
        height={50}
        src={LogoImg}
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
};

export default StudioLogo;
