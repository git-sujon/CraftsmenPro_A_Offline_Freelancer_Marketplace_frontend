import { CollapseProps } from "antd";

export const faqItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "How do I create an account?",
    children: (
      <p>
        Creating an account is easy. Click on the Sign Up button, fill in your
        details, and you’re all set!
      </p>
    ),
  },
  {
    key: "2",
    label: "How can I find services on CraftsmenPro?",
    children: (
      <p>
        You can search for services by entering keywords in the search bar or
        browsing categories.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is my personal information secure?",
    children: (
      <p>
        Yes, we take your privacy seriously. Your information is securely stored
        and protected.
      </p>
    ),
  },
  {
    key: "4",
    label: "How can I contact a service provider?",
    children: (
      <p>
        You can send a message to the service provider through our platform once
        you`ve logged in.
      </p>
    ),
  },
  {
    key: "5",
    label: "How do I book a service?",
    children: (
      <p>
        Click on the service you want, select a time slot, and confirm your
        booking. It`s that simple!
      </p>
    ),
  },
  {
    key: "6",
    label: "Can I cancel a booking?",
    children: (
      <p>
        Yes, you can cancel your booking with the service provider`s approval.
      </p>
    ),
  },
];
