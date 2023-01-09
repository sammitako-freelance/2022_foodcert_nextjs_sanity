"use client";

import { ThreeDots } from "react-loader-spinner";

type Props = {};

const Loader = (props: Props) => {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color="#4C8381"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      // wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
