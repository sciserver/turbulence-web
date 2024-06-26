import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styled = styled.div<{ bannerwidth: number }>`  
  position: relative;
  text-align: center;
  color: white;
  background-image: url("https://kubetest.sciserver.org/peppermint-juli/turbulence/web/Smokesheet-snapshot-JHTDB.mp4");
  background-size: ${props => props.bannerwidth}px 200px;
  height: 200px;
  width: ${props => props.bannerwidth};
  
  h1
  {
    text-shadow: 0px 0px 5px #000000cc;
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
    <h1 className="centered">Johns Hopkins Turbulence Databases</h1>
  </Styled>;
};