import React from 'react';
import './styles/main.css';
import Header from './components/Header';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header title="검색" />
      <div>App with TypeScript</div>
    </>
  );
};

export default App;
