type Props = {
  title: string;
  textColor: string;
  backgroundColor: string;
};

export default function LinkButton({
  title,
  textColor,
  backgroundColor,
}: Props) {
  return (
    <button
      className={`${backgroundColor} ${textColor} uppercase py-3 px-6 rounded-3xl font-bold text-sm hover:drop-shadow-md`}
    >
      {title}
    </button>
  );
}
