import React, { useState } from "react";
import {
  CardComments,
  CardContainer,
  CardContent,
  ColCard,
  NameInput,
  EditCardButton,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  cardsArraySlice,
  commentsSlice,
  popupSlice,
  RootState,
} from "../../utils/state-reducers";
import { StoreDispatchType } from "../../utils/store";
import { CardSelector } from "../../utils/state-selectors";
interface Props {
  keyProp: number;
}

export const ColumnCard: React.FC<Props> = ({ keyProp }) => {
  const { card, comments } = useSelector((state: RootState) =>
    CardSelector(state, { key: keyProp })
  );

  const [changeNameState, setChangeNameState] = useState<boolean>(false);
  const [rightClickState, setRightClickState] = useState<boolean>(false);

  const dispatch: StoreDispatchType = useDispatch();

  function onRightClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    e.preventDefault();
    setRightClickState((pS) => !pS);
  }

  function onEditBlur(e: React.ChangeEvent<HTMLInputElement>): void {
    setChangeNameState((pS) => !pS);
  }

  function onDeleteClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    dispatch(cardsArraySlice.actions.cardsArrayRemove(card.key));
    dispatch(commentsSlice.actions.commArrayCardIdRemove(keyProp));
  }

  function nameInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const v: string = e.target.value;
    if (v.trim() === "") return;
    dispatch(
      cardsArraySlice.actions.cardsArrayChange({
        ...card,
        name: v,
      })
    );
  }

  function togglePopup(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    dispatch(popupSlice.actions.changePopup(card.key));
  }

  return (
    <CardContainer>
      <ColCard onContextMenu={onRightClick}>
        {!changeNameState && (
          <CardContent onClick={togglePopup} empty={comments.length === 0}>
            {card.name}
          </CardContent>
        )}
        {changeNameState && (
          <NameInput
            type="text"
            value={card.name}
            onChange={nameInput}
            onBlur={onEditBlur}
          />
        )}
        <EditCardButton
          onClick={() => setChangeNameState((prevState) => !prevState)}
          empty={comments.length === 0}
        >
          <FontAwesomeIcon icon={faEdit} />
        </EditCardButton>
        {comments.length !== 0 && (
          <CardComments>
            <FontAwesomeIcon icon={faComment} /> : {comments.length}
          </CardComments>
        )}
        {rightClickState && (
          <CardComments onClick={onDeleteClick}>
            <FontAwesomeIcon icon={faTimes} />
          </CardComments>
        )}
      </ColCard>
    </CardContainer>
  );
};
