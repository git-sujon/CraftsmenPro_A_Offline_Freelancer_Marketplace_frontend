import React from "react";

const DescriptionParagraph = ({ description }: { description: string }) => {
  const paragraphs = description.split("</p>");

  return (
    <div>
      {paragraphs?.map((paragraph, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: `${paragraph}</p>` }}
          className="mb-5"
        />
      ))}
    </div>
  );
};

export default DescriptionParagraph;
