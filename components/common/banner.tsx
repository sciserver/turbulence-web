import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { hostURL } from 'pages/_app';

const Styled = styled.div<{ bannerwidth: number }>`  
  position: relative;
  color: white;
  height: 200px;
  width: ${props => props.bannerwidth};
  
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: fill;
  }
  
  h1
  {
    text-shadow: 0px 0px 5px #000000cc;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Banner = () => {

  const [bannerwidth, setBannerWidth] = useState<number>(0);

  const handleWindowResize = () => {
    setBannerWidth(window.innerWidth);
  };

  // ON MOUNT: UI config
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setBannerWidth(window.innerWidth);
  }, []);

  return <Styled {...{ bannerwidth }}>
    <video src={`${hostURL}Smokesheet-snapshot-JHTDB.mp4`} autoPlay loop muted />
    <h1 className="centered">Johns Hopkins Turbulence Database</h1>
  </Styled>;
};