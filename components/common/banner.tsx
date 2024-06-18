import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import banner from '../../public/Smokesheet.gif';
import placeholder from '../../public/Smokesheet-placeholder.png';

const Styled = styled.div<{ bannerwidth: number }>`  
  position: relative;
  text-align: center;
  color: white;
  background-image: url("Smokesheet-placeholder.png");
  background-size: ${props => props.bannerwidth}px 200px;
  height: 200px;
  width: ${props => props.bannerwidth};

  img{
    filter: blur(3px);
  }

  h1
  {
    filter: blur(0px);
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

  const [bannerwidth, setBannerWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleWindowResize = () => {
    setBannerWidth(window.innerWidth);
  };

  // ON MOUNT: UI config
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setBannerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log({ isLoading });

  }, [isLoading]);

  return <Styled {...{ bannerwidth }}>
    <Image
      src={placeholder}
      width={bannerwidth}
      height={200}
      alt="Tubulence simulation visualization gif"
      onLoad={() => setIsLoading(false)}
    />
    <h1 className="centered">Johns Hopkins Turbulence Databases</h1>
  </Styled>;
};