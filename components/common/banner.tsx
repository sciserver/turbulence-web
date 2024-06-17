import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import banner from '../../public/Smokesheet.gif';

const Styled = styled.div`  
  position: relative;
  text-align: center;
  color: white;

  img{
    filter: blur(3px);
  }

  h1
  {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Banner = () => {

  const [bannerWidth, setBannerWidth] = useState<number>(0);

  const handleWindowResize = () => {
    setBannerWidth(window.innerWidth);
  };

  // ON MOUNT: UI config
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setBannerWidth(window.innerWidth);
  }, []);

  return <Styled>
    <Image src={banner} width={bannerWidth} height={200} alt="Tubulence simulation visualization gifs" />
    <h1 className="centered">Johns Hopkins Turbulence Databases</h1>
  </Styled>;
};