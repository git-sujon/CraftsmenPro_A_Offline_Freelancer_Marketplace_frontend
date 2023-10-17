import React from "react";

const SectionSubPera = ({
  text,
  textAlign,
}: {
  text: string;
  textAlign?: string;
}) => {
  console.log("textAlign:", textAlign);
  return <h2 className={`text-textSecondary text-sm leading-7   ${textAlign ? textAlign : "" }`}>{text}</h2>;
};

export default SectionSubPera;
