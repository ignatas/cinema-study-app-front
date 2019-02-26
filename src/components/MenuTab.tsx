import * as React from 'react';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';

const TabContainer = styled(Tab)<any>`
  && {
    font-family: 'Bitter', serif;
  }
`;

interface Props {
  value: string;
  label: string;
  to: string;
}

const MenuTab = ({ value, label, to }: Props) => (
  <TabContainer value={value} label={label} component={Link} to={to} />
);

export default MenuTab;
