"use client"

import React from 'react';
import { Select } from 'antd';
import { cityOptions } from '@/constants/common';

const SearchAndFilter: React.FC = () => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={cityOptions}
  />
);

export default SearchAndFilter;