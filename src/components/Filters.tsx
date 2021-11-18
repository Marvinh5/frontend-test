import React from "react";
import styled from "styled-components";
import { categories } from "../data/categories";
import { prices } from "../data/prices";
import ClearAll from "./ClearAll";
import Caret from "./icons/Caret";
import CheckMarkOval from "./icons/CheckMarkOval";
import { OutsideOval } from "./icons/Oval";
import Radio from "./icons/Radio";

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
`;
const StyledLabel = styled.div`
  font-size: 16px;
  letter-spacing: 1px;
  color: #606060;
`;

const StyledOpenNow = styled.button`
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 108px;
  font-size: 16px;
  padding: 4px 4px 4px 0;
  margin-left: 24px;
  background: none;
`;

const OptionLabelContainer = styled.button<{ width: number }>`
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  padding: 4px 4px 4px 0;
  margin-left: 24px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: ${(props) => props.width}px;
  background: none;
`;

const StyledOpenNowLabel = styled.span`
  margin-left: 8px;
  width: 84px;
  white-space: nowrap;
  color: #002b56;
`;

const StyledPriceLabel = styled(StyledOpenNowLabel)`
  margin-left: 0;
  text-align: start;
`;

const OptionsContainer = styled.div<{ width: number }>`
  background: #ffffff;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #c8c8c8;
  flex-direction: column;
  display: flex;
  position: absolute;
  justify-content: flex-start;
  padding: 11px 16px 0 11px;
  top: 100%;
  width: ${(props) => props.width}px;
`;

const StyledOption = styled.span`
  font-size: 16px;
  color: #606060;
  text-transform: capitalize;
  text-align: start;
  margin-bottom: 11px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledNameLabel = styled.span`
  margin-left: 8px;
`;

function Option({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected: boolean;
}) {
  return (
    <StyledOption>
      {" "}
      {!selected ? <OutsideOval /> : <CheckMarkOval />}{" "}
      <StyledNameLabel>{children}</StyledNameLabel>
    </StyledOption>
  );
}

export function Filters() {
  const [openNow, setOpenNow] = React.useState(false);

  return (
    <StyledFilterContainer>
      <StyledLabel>Filter By:</StyledLabel>
      <StyledOpenNow onClick={() => setOpenNow(!openNow)}>
        <Radio selected={openNow}></Radio>
        <StyledOpenNowLabel>Open Now</StyledOpenNowLabel>
      </StyledOpenNow>
      <OptionLabelContainer width={97}>
        <StyledPriceLabel>Price</StyledPriceLabel>
        <Caret up={true} />
        <OptionsContainer width={97}>
          {prices.map((price) => (
            <Option selected={price == "$"} key={price}>
              {price}
            </Option>
          ))}
        </OptionsContainer>
      </OptionLabelContainer>

      <OptionLabelContainer width={193}>
        <StyledPriceLabel>Categories</StyledPriceLabel>
        <Caret up={true} />
        <OptionsContainer width={193}>
          {categories.map((category) => (
            <Option selected={category == "Italian"} key={category}>
              {category}
            </Option>
          ))}
        </OptionsContainer>
      </OptionLabelContainer>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      />
      <ClearAll />
    </StyledFilterContainer>
  );
}
