import React from "react";
import { Col, Button, Row } from "antd";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import FormDatePicker from "./FormDatePicker";
import FormTimePicker from "./FormTimePicker";
import { FiTrash2 } from "react-icons/fi";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import dayjs, {Dayjs} from 'dayjs';
const FormSelectMultipleDateTime = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availableTimeSlots",
  });

  // Add one set of fields initially
  if (fields.length === 0) {
    append({ date: undefined, time: undefined });
  }

  return (
    <>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
        <Row className=" text-lg font-bold  flex items-center ml-[-15px] gap-x-10">
          <p className="underline text-textSecondary"> Time Schedule:</p>

          <Button
            onClick={() => append({ date: undefined, time: undefined })}
            type="primary"
            className=""
          >
            <BiSolidMessageSquareAdd /> add
          </Button>
        </Row>
      </Col>

      <Col className="mt-3">
        <p className="text-textSecondary   font-semibold mt-1 italic ">
          (please select at one least time schedule of a day):
        </p>
      </Col>
      {fields.map((field, index) => (
        <Row className="flex items-center gap-x-20" key={field.id}>
          <div>
            <Col className="my-3">
              <Controller
                control={control}
                name={`availableTimeSlots[${index}].date`}
                render={({ field }) => (
                  <FormDatePicker
                    name={field.name}
                    size="large"
                    label="Select Date"
                  />
                )}
              />
            </Col>

            <Col className="mt-3">
              <Controller
                control={control}
                name={`availableTimeSlots[${index}].time`}
                render={({ field }) => (
                  <FormTimePicker name={field.name} label="Select Time" />
                )}
              />
            </Col>
          </div>
          {index > 0 && (
            <Button
              onClick={() => remove(index)}
              type="primary"
              className="mt-5"
            >
              <FiTrash2 />
            </Button>
          )}
        </Row>
      ))}
    </>
  );
};

export default FormSelectMultipleDateTime;
