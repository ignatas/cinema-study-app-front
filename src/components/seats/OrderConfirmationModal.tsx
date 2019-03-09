import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import api from '../../ApiService';
import BonusContainer from '../../components/bonus/BonusContainer';
import { whiteColor, greyColor } from '../../constants';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 500;
`;

const ModalWindow = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  box-shadow: 0px 0px 0px 1px ${greyColor};
  background: ${whiteColor};
`;

const TotalPrice = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const TicketsAmount = styled.div`
  width: 100%;
  font-size: 0.875rem;
`;

const OrderConfirmationModal = ({ order }: any) => {
  /* REMOVE default order value */
  const defaultOrder = {
    sessionId: 1,
    seatsPicked: [{ row: 1, seat: 1 }],
    totalPrice: 10.0
  };

  const { sessionId, seatsPicked } = order || defaultOrder;
  const [totalPrice, setTotalPrice]: [any, any] = useState(
    defaultOrder.totalPrice
  );
  const [loadedBonuses, setLoadedBonuses]: [any, any] = useState(null);
  const [pickedBonuses, setPickedBonuses]: [any, any] = useState(null);

  useEffect(() => {
    if (!loadedBonuses) {
      loadBonuses();
    }
  }, [loadedBonuses, pickedBonuses]);

  const loadBonuses = async () => {
    try {
      const data: any = await api.loadSessionBonuses(sessionId);
      setLoadedBonuses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBonusesUpdate = (type: any, bonus: any) => {
    console.log('type', type);
    console.log('bonus', bonus);
  };

  return (
    <Container>
      <ModalWindow>
        <TotalPrice>Total price: ${totalPrice}</TotalPrice>
        <TicketsAmount>Tickets amount: {seatsPicked.length}</TicketsAmount>
        <BonusContainer
          loadedBonuses={loadedBonuses}
          handleBonusesUpdate={handleBonusesUpdate}
        />
      </ModalWindow>
    </Container>
  );
};

export default connect(({ orders }: { orders: any }) => ({
  order: orders.data
}))(OrderConfirmationModal);
