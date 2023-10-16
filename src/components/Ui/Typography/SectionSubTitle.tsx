import React from "react";

const SectionSubTitle = ({
  text,
  textAlign,
}: {
  text: string;
  textAlign: string;
}) => {
  console.log("textAlign:", textAlign);
  return <h2 className={`text-textSecondary text-sm leading-7   ${textAlign}`}>{text}</h2>;
};

export default SectionSubTitle;
