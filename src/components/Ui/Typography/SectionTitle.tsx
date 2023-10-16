import React from "react";

const SectionTitle = ({
  text,
  textAlign,
}: {
  text: string;
  textAlign: string;
}) => {
  console.log("textAlign:", textAlign);
  return <h2 className={`text-textPrimary text-3xl  ${textAlign}`}>{text}</h2>;
};

export default SectionTitle;
