import styled from "styled-components";

export const ColumnNameInput = styled.input`
        width: 220px;
        margin: 0 0 5px 0;
`

export const ColumnNameDiv = styled.div`
        margin: 0 0 5px 0;
        text-align: start;
        text-indent: 10px;
        width: 230px;
        height: 25px;
        line-height: 25px;
        background: #8d8d8d;
        color: white;
        border-radius: 2px;
`

export const ColumnBorder = styled.div`
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 230px;
        height: fit-content;
        background-color: #e6e6e6;
        margin: 10px;    
`

export const ColumnAddCardDiv = styled.div`
        text-align: start;
        text-indent: 10px;
        width: 230px;
        height: 18px;
        font-size: 10px;
        line-height: 20px;
        background: white;
        border-radius: 2px;
        margin: 3px 0 0 0;
        &:hover {
           background: #dedede;
        }
`

export const ButtonDiv = styled.div`
        display: flex;
        width: 200px;
        justify-content: space-around;
`