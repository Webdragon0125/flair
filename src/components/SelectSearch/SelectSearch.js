import React, { useState, useEffect } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const CustomSelectSearch = ({ props }) => {
  const { Option } = Select;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <CustomSelect
        showSearch
        placeholder={props.flg === 1 ? "From" : "To"}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        style={{
          width: 200,
          overflow: "hidden",
          fontSize: 20,
        }}
      >
        <Option value="New York">New York</Option>
        <Option value="BeiJing">BeiJing</Option>
        <Option value="London">London</Option>
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CustomSelect = styled(Select)``;

export default CustomSelectSearch;
