import React from "react";
import styled, {css} from "styled-components";
import { prices } from "../../data/prices";
import ClearAll from "./ClearAll";
import Caret from "../icons/Caret";
import CheckMarkOval from "../icons/CheckMarkOval";
import { OutsideOval } from "../icons/Oval";
import Radio from "../icons/Radio";
import {useAppContext} from "../../business_logic/AppProvider";

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #E6E6E6;
  border-top: 1px solid #E6E6E6;
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

const OptionsContainer = styled.div<{ width: number, open: boolean }>`
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
  transition: all 0.2s ease-in-out;
  opacity: 1;
  ${(props)=>!props.open && css`top: -100%;opacity:0;pointer-events: none;`}
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
    onClick
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick:VoidFunction
}) {
  return (
    <StyledOption onClick={onClick}>
      {" "}
      {!selected ? <OutsideOval /> : <CheckMarkOval />}{" "}
      <StyledNameLabel>{children}</StyledNameLabel>
    </StyledOption>
  );
}

const OptionsHandler = ({children, name, width}: {children:React.ReactNode, name:string, width:number}) =>{
    const [open, setOpen] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(()=> {
        const element = ref.current;
        if(element) {
            const listener = (event:MouseEvent)=> {
                if(element  && !element.contains(event.target as HTMLElement)) {
                    setOpen(false);
                }
            };
            document.addEventListener('click', listener);

            return () => {
                document.removeEventListener('click', listener);
            }
        }
    }, [ref])

    return (<div ref={ref}><OptionLabelContainer width={width}  onClick={()=>setOpen(!open)}>
        <StyledPriceLabel>{name}</StyledPriceLabel>
        <Caret up={open} />
        <OptionsContainer width={width} open={open}>
            {children}
        </OptionsContainer>
    </OptionLabelContainer>
    </div>);
}

export function Filters() {
  const {filters,onSetOpenNow, onSetPrice, onSetCategory, categories, onSetDefault}=  useAppContext()

  return (
    <StyledFilterContainer>
      <StyledLabel>Filter By:</StyledLabel>
      <StyledOpenNow onClick={onSetOpenNow(!filters.openNow)}>
        <Radio selected={filters?.openNow ?? false} />
        <StyledOpenNowLabel>Open Now</StyledOpenNowLabel>
      </StyledOpenNow>
     <OptionsHandler width={97} name={"Price"}>
          {prices.map((price) => (
            <Option onClick={onSetPrice(price)} selected={price == filters.price} key={price}>
              {price}
            </Option>
          ))}
     </OptionsHandler>
        <OptionsHandler name="Categories" width={193}>
            {categories.map((category) => (
                <Option onClick={onSetCategory(category.value)} selected={category.value == filters.category} key={category.value}>
                    {category.label}
                </Option>
            ))}
        </OptionsHandler>

      <div
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      />
      <ClearAll onClick={onSetDefault()} />
    </StyledFilterContainer>
  );
}
