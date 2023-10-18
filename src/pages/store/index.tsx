import React from 'react';
import { LandingLayout } from 'layout';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';

const Store: React.FC<Props> = ({ isMobile, deviceWidth }) => {
  return (
    <LandingLayout
      headTitle={'WETALKSOUND | STORE'}
      isMobile={isMobile}
      deviceWidth={deviceWidth}
      showFooter={true}
      showHeader={false}
    >
      <ComponentHolder
        className="page-zero no-border page-agency page-store"
        style={{ backgroundImage: `url(assets/background/jerseys.png)` }}
        bodyClass="page-agency-caption"
      >
        <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active={'/store'} />

        <div className="page-store-text">
          <h1> Coming Soon </h1>
        </div>
      </ComponentHolder>
    </LandingLayout>
  );
};

export default Store;

interface Props {
  isMobile: boolean;
  deviceWidth: number;
}
