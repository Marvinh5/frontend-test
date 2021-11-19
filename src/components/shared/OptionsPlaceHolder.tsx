import styled from "styled-components";

export const OptionLabelContainer = styled.button<{ width: number }>`
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

export const OptionsStyledLabel =styled.div`
  margin-left: 0;
  text-align: start;
  width: 84px;
  white-space: nowrap;
  color: #002b56;
`;

