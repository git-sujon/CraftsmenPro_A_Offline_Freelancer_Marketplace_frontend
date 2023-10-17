import React from "react";

const SectionTitle = ({
  text,
  textAlign,
}: {
  text: string;
  textAlign?: string;
}) => {
  return <h2 className={`text-textPrimary text-xl md:text-3xl   ${textAlign ? textAlign : "" }`}>{text}</h2>;
};

export default SectionTitle;
