import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  seatFreeBg,
  seatFreeTxt,
  seatReservedBg,
  seatReservedTxt,
  seatPurchasedBg,
  seatPurchasedTxt,
  seatSelectedBg,
  seatSelectedTxt,
  goldColor
} from '../../../constants';

const Container = styled.div<any>`
  width: 30px;
  height: 30px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  background: ${({ theme }: any) => theme.bgColor};
  color: ${({ theme }: any) => theme.txtColor};
  font-size: 0.75rem;
  cursor: ${({ isFree }: any) => (isFree ? 'pointer' : 'not-allowed')};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const SeatItem = ({ row, seat, category, isReserved, isOrdered }: any) => {
  const computeColors = () => {
    if (isReserved) {
      return {
        bgColor: seatReservedBg,
        txtColor: seatReservedTxt
      };
    }
    if (isOrdered) {
      return {
        bgColor: seatPurchasedBg,
        txtColor: seatPurchasedTxt
      };
    }
    if (category === 'vip') {
      return {
        bgColor: goldColor,
        txtColor: seatFreeTxt
      };
    }
    return {
      bgColor: seatFreeBg,
      txtColor: seatFreeTxt
    };
  };

  const [isSelected, setSelected] = useState(false);
  const [theme, setTheme] = useState(computeColors());

  useEffect(() => {
    if (isSelected) {
      setTheme({
        bgColor: seatSelectedBg,
        txtColor: seatSelectedTxt
      });
    } else {
      setTheme(computeColors());
    }
  });

  const toggleSelect = (e: any) => {
    if (isReserved || isOrdered) {
      return;
    }
    setSelected(!isSelected);
  };

  return (
    <Container
      isFree={!isReserved && !isOrdered}
      theme={theme}
      category={category}
      onClick={toggleSelect}
      data-seat={seat}
      data-row={row}
      data-free={!isReserved && !isOrdered}
      data-selected={!isSelected}
    >
      {seat}
    </Container>
  );
};

export default SeatItem;
