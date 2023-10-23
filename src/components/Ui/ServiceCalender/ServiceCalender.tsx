"use client";
import React, { useState, useEffect } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { Alert, Calendar, TimePicker } from "antd";
import { setToLocalStorage, getFromLocalStorage } from "@/utils/localStorage";

dayjs.locale("bn-bd");
const ServiceCalender = ({ bookedTimeSlots }: { bookedTimeSlots: any }) => {
  const currentDate = dayjs();

  const storedDateStr = getFromLocalStorage("selectedServicesDate");
  const storedDate = storedDateStr ? dayjs(storedDateStr) : currentDate;

  const [value, setValue] = useState(storedDate);
  const [selectedValue, setSelectedValue] = useState(storedDate);

  const onSelect = (newValue: Dayjs) => {
    const formattedDate = newValue.format(); // Format the date
    setToLocalStorage("selectedServicesDate", formattedDate);
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  const isDateDisabled = (currentDate: Dayjs) => {
    const today = dayjs();
    if (currentDate.isBefore(today, "day")) {
      return true;
    }
    const isBooked = bookedTimeSlots?.some((slot: any) =>
      currentDate.isSame(dayjs(slot.date), "day")
    );
    return isBooked;
  };

  useEffect(() => {
    const storedDateStr = getFromLocalStorage("selectedServicesDate");
    if (storedDateStr) {
      setSelectedValue(dayjs(storedDateStr));
    }
  }, []);

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
        disabledDate={isDateDisabled}
      />

    </div>
  );
};

export default ServiceCalender;
