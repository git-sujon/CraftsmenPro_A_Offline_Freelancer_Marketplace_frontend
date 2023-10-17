"use client";

import { Collapse } from "antd";
import SectionSubPera from "@/components/Ui/Typography/SectionSubPera";
import SectionTitle from "@/components/Ui/Typography/SectionTitle";
import { faqItems } from "@/constants/FrequentlyAskedQuestions";

const FAQ = () => {
  return (
    <div className="max-width py-20">
      {/* section header  */}
      <div>
        <SectionTitle
          text="Frequently Asked Questions"
          textAlign="text-center"
        />
        <SectionSubPera
          text="Got questions? We've got answers! Check out our frequently asked questions"
          textAlign="text-center"
        />
      </div>
      <div className="mt-10 mx-auto max-w-4xl">
        <Collapse
          accordion
          items={faqItems}
          className="rounded-none"
          size="middle"
          ghost
          expandIconPosition="end"
        />
      </div>
    </div>
  );
};

export default FAQ;
