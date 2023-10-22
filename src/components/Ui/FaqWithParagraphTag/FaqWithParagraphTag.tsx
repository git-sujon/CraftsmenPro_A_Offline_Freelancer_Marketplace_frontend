import { Collapse } from 'antd';

const { Panel } = Collapse;

const FaqWithParagraphTag = ({ faqs }:{faqs:any}) => {
  return (
    <div className="max-w-4xl">
      <Collapse accordion className="rounded-none" size="middle" ghost expandIconPosition="end">
        {faqs?.map((faq:any) => (
          <Panel header={faq.label} key={faq.key}>
            <div dangerouslySetInnerHTML={{ __html: faq.children }}></div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FaqWithParagraphTag;
