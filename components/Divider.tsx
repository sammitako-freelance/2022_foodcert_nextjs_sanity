import React from "react";

type Props = {};

const Divider = (props: Props) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-custom-dark-gray"></div>
      {/* <span class="flex-shrink mx-4 text-gray-400">Content</span> */}
      <div className="flex-grow border-t border-custom-dark-gray"></div>
    </div>
  );
};

export default Divider;
