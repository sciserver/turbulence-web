import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import nsf from 'public/nsf-logo.png';
import idies from 'public/idies-logo.png';
import sciserver from 'public/sciserver-logo.png';
import { useRouter } from 'next/router';

const Styled = styled.footer<{ footerwidth: number }>`  
  display: flex;
  flex-direction: column;
  gap: 30px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 50px;
  width: ${props => props.footerwidth};
  height: auto;
  
  .sponsors {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .agencies {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    align-items: center;
  }

  .info {
    @media (width >= 800px)  {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 100px;
    }
    padding: 30px 150px;
    color: white;
    
    background: linear-gradient(90deg, rgb(206,214, 242) 1%, rgb(50, 72, 150, 0.8) 60%,rgb(186, 57, 64,0.6) 100%);
    
    h2:hover {
      cursor: pointer;
    } 
  }
`;

export const Footer = () => {

  const router = useRouter();

  const [footerwidth, setFooterWidth] = useState<number>(0);

  const handleWindowResize = () => {
    setFooterWidth(window.innerWidth);
  };

  // ON MOUNT: UI config
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setFooterWidth(window.innerWidth);
  }, []);

  return <Styled {...{ footerwidth }}>
    <div className="info">
      <h2 onClick={() => { router.push('/contact') }}>Contact</h2>
      <h2 onClick={() => { router.push('/about') }}>About</h2>
      <h2 onClick={() => { router.push('/legal') }}>Legal</h2>
    </div>
    <div className="sponsors">
      <h4>JHTDB operates with support from:</h4>
      <div className="agencies">
        <Link href="https://www.nsf.gov" target="_blank">
          <Image src={nsf} width={75} alt="National Science Foundation (NSF) logo" />
        </Link>
        <Link href="http://idies.jhu.edu/" target="_blank">
          <Image src={idies} height={45} alt="Institute for Data Intensive Engineering and Science (IDIES) logo" />
        </Link>
        <Link href="https://www.sciserver.org/" target="_blank">
          <Image src={sciserver} height={75} alt="Sciserver logo" />
        </Link>
      </div>
    </div>
  </Styled >;
};