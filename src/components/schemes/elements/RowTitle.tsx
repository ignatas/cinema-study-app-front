import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  height: 30px;
  width: 80px;
  margin-left: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
`;

const RowTitle = ({ row }: { row: number }) => <Container>row {row}</Container>;

export default RowTitle;
