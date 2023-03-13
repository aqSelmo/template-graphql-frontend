import React from 'react';
import GlobalStyles from '../../../globalstyle';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;800&display=swap" rel="stylesheet" />
      </Helmet>
    </>
  );
};

export default Head;
