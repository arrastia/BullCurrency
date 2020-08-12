import React, { Fragment, useRef, useState } from 'react';

import { GiReceiveMoney } from 'react-icons/gi';
import { GrBitcoin, GrPaypal } from 'react-icons/gr';

import bitcoin from 'assets/svg/bitcoin.svg';
import paypal from 'assets/svg/paypal.svg';

import { Styles } from './SupportUs.styles';

import { Button } from 'views/.components/Button';

import { useOnClickOutside } from 'views/.tools/Hooks/useOnClickOutside';

export const SupportUs = () => {
  const [isOpened, setIsOpened] = useState(false);

  const contentRef = useRef(null);

  useOnClickOutside(contentRef, () => onCloseDonate());

  const onCloseDonate = () => setIsOpened(false);

  const onOpenDonate = () => setIsOpened(true);

  const renderDonateButtons = () => [paypal, bitcoin].map(icon => <Button icon={renderDonateIcon(icon)} />);

  const renderDonateIcon = path => <img src={path} alt="Buy me a coffee" />;

  return (
    <Styles.SupportUs className={isOpened ? 'isOpened' : ''} onClick={() => onOpenDonate()}>
      <Styles.Content ref={contentRef}>
        <Styles.InsideContent>{renderDonateButtons()}</Styles.InsideContent>
        <Styles.OutsideContent>
          <GiReceiveMoney />
        </Styles.OutsideContent>
      </Styles.Content>
    </Styles.SupportUs>
  );
};
