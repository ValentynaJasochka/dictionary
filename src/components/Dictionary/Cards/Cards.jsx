import { useState } from "react";
import {
  CardWrapper,
  Card,
  CardInner,
  CardFront,
  CardBack,
  NavButtons,
  Button
} from "./Cards.styled";
import { words } from "./utils/enums";

export const Cards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = words[index];

  const handleNext = () => {
    setFlipped(false);
    if (index < words.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    setFlipped(false);
    if (index > 0) setIndex(index - 1);
  };

  return (
    <CardWrapper>
      <Card onClick={() => setFlipped(!flipped)}>
        <CardInner flipped={flipped}>
          <CardFront>{current.word}</CardFront>
          <CardBack>{current.translate}</CardBack>
        </CardInner>
      </Card>

      <NavButtons>
        <Button onClick={handlePrev} disabled={index === 0}>
          ◀
        </Button>
        <span>{index + 1} / {words.length}</span>
        <Button onClick={handleNext} disabled={index === words.length - 1}>
          ▶
        </Button>
      </NavButtons>
    </CardWrapper>
  );
};