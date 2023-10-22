"use client";
import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { Alert, Calendar } from "antd";

const ServiceCalender = () => {
  const [value, setValue] = useState(() => dayjs(Date.now()));
  const [selectedValue, setSelectedValue] = useState(() => dayjs(Date.now()));

  console.log("selectedValue:", selectedValue);

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <div>
      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <Calendar
        fullscreen={false}
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default ServiceCalender;
