import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import nsf from '../../public/nsf-logo.png';
import idies from '../../public/idies-logo.png';
import sciserver from '../../public/sciserver-logo.png';

const Styled = styled.footer<{ footerwidth: number }>`  
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  padding: 30px;
  background: linear-gradient(90deg, rgb(206,214, 242) 1%, rgb(50, 72, 150, 0.8) 60%,rgb(186, 57, 64,0.6) 100%);
  width: ${props => props.footerwidth};
  height: auto;
  
  .agencies {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    align-self: center;
  }

  .agency {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 270px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 50px;

    .contact {
      min-width: 300px;
    }
  }
`;

export const Footer = () => {

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
    <div className="agencies">
      <div className="agency">
        <span className="caption">The JHTDB project is funded by the US <Link href="https://www.nsf.gov" target="_blank">National Science Foundation</Link>. </span>
        <Image src={nsf} width={45} alt="National Science Foundation (NSF) logo" />
      </div>
      <div className="agency">
        <span className="caption"> JHTDB operations are supported by <Link href="http://idies.jhu.edu/" target="_blank">IDIES</Link>.</span>
        <Image src={idies} height={25} alt="Institute for Data Intensive Engineering and Science (IDIES) logo" />
      </div>
      <div className="agency">
        <span className="caption"> JHTDB data may also be accessed via <Link href="https://www.sciserver.org/datasets/" target="_blank">SciServer</Link>.</span>
        <Image src={sciserver} height={45} alt="Sciserver logo" />
      </div>
    </div>
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
  </Styled>;
};