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
      gap: 100px;
    }
    padding: 30px 150px;
    color: white;
    
    background: linear-gradient(90deg, rgb(206,214, 242) 1%, rgb(50, 72, 150, 0.8) 60%,rgb(186, 57, 64,0.6) 100%);
    
    .contact {
      @media (width < 800px)  {
        margin-bottom: 7%;
      }
      @media (width >= 1000px)  {
        min-width: 300px;
      }
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
      <div className="contact">
        <span className="caption">
          Do you have any questions or comments? <Link href="mailto:turbulence@lists.johnshopkins.edu">Contact us</Link>
        </span>
      </div>
      <span className="caption">
        <b>Disclaimer:</b> While many efforts have been made to ensure that these data are accurate and reliable within the
        limits of the current state of the art, neither JHU nor any other party involved in creating, producing or
        delivering the website shall be liable for any damages arising out of users' access to, or use of, the website
        or web services. Users use the website and web services at their own risk. JHU does not warrant that the functional
        aspects of the website will be uninterrupted or error free, and may make changes to the site without notice.
        Last updated: 9/24/2020 12:01:37 PM
      </span>
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