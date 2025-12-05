import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 320px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #3ac27b; /* зелений фон */
  border-radius: 12px;
  backface-visibility: hidden;
  font-size: 28px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBack = styled(CardFront)`
  background-color: #2e7dff; /* синя сторона */
  transform: rotateY(180deg);
`;

export const NavButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button`
  background: #ddd;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;