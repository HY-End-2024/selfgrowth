import styled from "styled-components";
import ToolTipDiv from "./ToolTip";
import { View } from "../App";

const MainButtons = styled.button<{ $currentButton?: View }>`
  display: flex;
  position: relative;

  align-items: center;
  vertical-align: center;

  color: white;
  font-weight: bold;
  font-size: 28px;

  background: #c5d887;
  &:hover {
    background: #ffd66c;
    transition: 0.5s;
    box-shadow: inset 0 0 10px #999;
  }

  &:hover > ${ToolTipDiv} {
    display: block;
  }

  padding: 8px 16px;
  margin: 0 64px;
  width: 152px;
  height: 52px;
  border-radius: 50px;
  border: none;

  box-shadow: 1px 2px 4px 1px #999;

  justify-content: center;
`;

export default MainButtons;
