import React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';

const format = 'HH:mm';
dayjs.extend(customParseFormat);

const SelectServiceTime = ({ bookedTimeSlots }: { bookedTimeSlots: any }) => {
  const currentHour = dayjs().hour();
  const currentMinute = dayjs().minute();

  const onChange = (value: Dayjs | null, dateString: string) => {
    if (value !== null) {
      console.log(value, dateString);
    }
  };

  const disabledTime: (now: Dayjs) => {
    disabledHours?: () => number[];
    disabledMinutes?: (selectedHour: number) => number[];
  } = (now: Dayjs) => {
    const disabledHours = () => {
      const hours = [];
      for (let hour = 0; hour < currentHour; hour++) {
        hours.push(hour);
      }
      return hours;
    };

    const disabledMinutes = (selectedHour: number) => {
      if (selectedHour === currentHour) {
        const minutes = [];
        for (let minute = 0; minute < currentMinute; minute++) {
          minutes.push(minute);
        }
        return minutes;
      }
      return [];
    };

    return {
      disabledHours: disabledHours,
      disabledMinutes: disabledMinutes,
    };
  };

  const defaultTime = dayjs().hour(currentHour).minute(currentMinute);

  return (
    <TimePicker
      key="unique-time-picker-keysas"
      defaultValue={defaultTime}
      format={format}
      size="large"
      onChange={onChange}
      use12Hours={true}
      className="w-full text-center"
      disabledTime={disabledTime}
    />
  );
};

export default SelectServiceTime;
