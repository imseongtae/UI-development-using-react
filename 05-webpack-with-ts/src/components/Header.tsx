import React from 'react';

interface Props {
  title: string;
}

const Header: React.FunctionComponent<Props> = ({ title }) => (
  <header>
    <h2>{title}</h2>
  </header>
);

export default Header;
