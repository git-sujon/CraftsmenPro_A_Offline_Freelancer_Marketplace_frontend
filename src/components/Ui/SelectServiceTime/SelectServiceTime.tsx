"use client";

import React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
const format = "HH:mm";
dayjs.extend(customParseFormat);
const SelectServiceTime = () => {

    const onChange = (value: Dayjs | null, dateString: string) => {
        if (value !== null) {
          console.log(value, dateString);
        }
      };
      

  return (
    <TimePicker
      key="unique-time-picker-keysas"
      defaultValue={dayjs("09:00", format)}
      format={format}
      size="large"
      onChange={onChange}
      className="w-full text-center"
    />
  );
};

export default SelectServiceTime;
