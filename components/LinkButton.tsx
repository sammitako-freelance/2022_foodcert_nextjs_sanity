import cx from "classnames";

type Props = {
  title: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
};

export default function LinkButton({
  title,
  textColor,
  backgroundColor,
  borderColor,
}: Props) {
  return (
    <button
      className={`${backgroundColor} ${textColor} ${
        borderColor && "border"
      } ${borderColor} 
      uppercase py-3 px-6 rounded-3xl font-bold text-sm hover:drop-shadow-md`}
    >
      {title}
    </button>
  );
}
