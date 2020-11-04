import styledComponentsTS from 'styled-components-ts'
import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const ColCard = styled.div`
    border-radius: 5px;
    background: white;
    text-align: start;
    width: 100%;
    margin: 5px 0 5px 0;
    text-indent: 10px;
    line-height: 25px;
`

export const CardComments = styled.div`
    margin: 0 0 0 2px;
    font-size: 7px;
`

interface CardContentProps {
  empty: boolean;
}

export const CardContent = styledComponentsTS<CardContentProps>(styled.div)`
    text-indent: 10px;
    padding: ${props => props.empty ? '7px 0 7px 0' : '7px 0 0 0'};
    font-size: 15px;
    line-height: 15px;
`

export const EditCardButton = styledComponentsTS<CardContentProps>(styled.div)`
    margin: ${props => props.empty ? '-28px  0 0 200px' : '-20px  0 0 200px'};
`

export const PopupTitle = styled.div`
    font-weight: bold;
    text-align: center;
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: white;
    background: #999999;
    border-radius: 2px;
`

export const NameInput = styled.input`
    width: 190px;
    margin: -25px 0 5px 0;
`

export const PopupContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`