import React, { FunctionComponent } from 'react';

interface Props {
  title: string,
};

const Header: FunctionComponent<Props> = ({ title }) => (
  <header>
    <h2>{title}</h2>
  </header>
);

export default Header;
