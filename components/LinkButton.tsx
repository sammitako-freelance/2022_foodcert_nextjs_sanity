import cx from "classnames";
import Link from "next/link";

type Props = {
  pathLink: string;
  title: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
};

export default function LinkButton({
  pathLink,
  title,
  textColor,
  backgroundColor,
  borderColor,
}: Props) {
  return (
    <Link
      href={pathLink}
      className={`${backgroundColor} ${textColor} ${
        borderColor && "border"
      } ${borderColor} 
      uppercase py-3 px-6 rounded-3xl font-bold text-sm hover:drop-shadow-md hover:opacity-80`}
    >
      {title}
    </Link>
  );
}
