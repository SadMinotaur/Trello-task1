import React, { useState } from "react";
import { ColumnNameInput, ColumnBorder, ColumnNameDiv, ColumnAddCardDiv, ButtonDiv } from "./styles";
import { ColumnCard } from "../Columncard";
import { useStateValue } from "../AppContext/GlobalContext";

interface Props {
  id: number;
  initName: string;
}

export const BoardColumn: React.FC<Props> = ({ id, initName }) => {

  const { state, reducer } = useStateValue()

  const [name, setName] = useState<string>(initName);
  const [cardInput, setCardInput] = useState<string>("");

  const [nameInputState, setNameInputState] = useState<boolean>(false);
  const [newCardState, setNewCardState] = useState<boolean>(false);

  function saveNewCard() {
    if (cardInput.trim() === "") return;
    setCardInput("");
    reducer({
      type: "ADD_CARD",
      payload: {
        id: state.cards.length,
        name: cardInput,
        author: state.user,
        desc: "",
        columnId: id
      }
    });
    setNewCardState(pS => !pS);
  }

  function nameInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const v: string = e.target.value;
    if (v.trim() === "") return;
    setName(v);
  }

  function onBlurInput() {
    reducer({ type: "CHANGE_COL_NAME", payload: { id: id, name: name } });
    setNameInputState(pS => !pS);
  }

  return <ColumnBorder>
    {!nameInputState && <ColumnNameDiv
      onClick={() => setNameInputState(pS => !pS)}>
      {name}
    </ColumnNameDiv>}
    {nameInputState && <ColumnNameInput
      value={name}
      type="text"
      onMouseOver={e => e.currentTarget.focus()}
      onChange={nameInputChange}
      onBlur={onBlurInput}
    />}
    {state.cards.map((card) => card.idColumn === id && <ColumnCard
      key={card.id}
      id={card.id}
    />)}
    {!newCardState && <ColumnAddCardDiv
      onClick={() => setNewCardState(pS => !pS)}>
      Add new card
    </ColumnAddCardDiv>}
    {newCardState && <ColumnNameInput
      onMouseOver={e => e.currentTarget.focus()}
      value={cardInput}
      onChange={e => setCardInput(e.target.value)}
      placeholder="Add new card"
    />}
    {newCardState && <ButtonDiv>
      <button className="btn primary" onClick={saveNewCard}>
        Add card
      </button>
      <button className="btn" onClick={() => setNewCardState(pS => !pS)}>
        Cancel
      </button>
    </ButtonDiv>}
  </ColumnBorder>
}