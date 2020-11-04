import styled from "styled-components";
import styledComponentsTS from "styled-components-ts";

interface BackProps {
  display : boolean;
}

export const CardPopupBack = styledComponentsTS<BackProps>(styled.div)`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: ${props => props.display ? "block" : "none"};
`

interface PopupProps {
  width: number;
  height: number;
  display: boolean;
}

export const CardPopup = styledComponentsTS<PopupProps>(styled.div)`
    position: fixed;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    top: 65px;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background: white;
    border-radius: 3px;
    display: ${props => props.display ? "block" : "none"};
`

interface ButtonProps {
  width: number;
  display: boolean;
}

export const ClosePopup = styledComponentsTS<ButtonProps>(styled.button)`
    position: fixed;
    margin: -10px 0 0 ${props => props.width - 10}px;
    border-radius: 50%;
    background: #ffffff;
    border: #767676 1px solid;
    height: 20px;
    width: 20px;
    color: #999999;
    display: ${props => props.display ? "block" : "none"};
`
