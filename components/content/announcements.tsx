import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { AppContext } from 'context';
import { mediaQuery } from 'components/common/layout';

// Media
import announcements from 'public/announcements.json'
import isotropicImage from 'public/datasets/isotropic.jpg';
import mhdImage from 'public/datasets/mhd-large.jpeg';
import channelImage from 'public/datasets/channel-vert.jpeg';
import hbdtImage from 'public/datasets/rstrt_0285_density.png';

const Styled = styled.div`
  
  @media (width >= ${mediaQuery}px)  {
    display: flex;
    gap: 5%;
    margin-left: -5%;
  }

  .image-group {
    display: flex;
    flex-direction: column;
    gap: 3%;
    
    .image {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Announcements: FC = () => {

  //Config
  const router = useRouter();

  //Context
  const { setTabOption } = useContext(AppContext);

  //App State
  const [displayImageGroup, setDisplayImageGroup] = useState<boolean>(true);

  const handleWindowWidth = () => {
    if (window.innerWidth >= mediaQuery) {
      setDisplayImageGroup(true);
      return;
    }
    setDisplayImageGroup(false);
  };

  // ON MOUNT: UI config
  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);
    setTabOption(router.asPath.split('/')[1]);

    handleWindowWidth();
  }, []);

  return (
    <Styled>
      {displayImageGroup &&
        <div className="image-group">
          <div className="image">
            <Image src={isotropicImage} width={250} alt="Forced isotropic turbulence figure" />
            <span className="caption">Forced Isotropic Turbulence</span>
          </div>
          <div className="image">
            <Image src={mhdImage} width={250} alt="MHD turbulence figure" />
            <span className="caption">Forced MHD Turbulence</span>
          </div>
          <div className="image">
            <Image src={channelImage} width={250} alt="Channel Flow figure" />
            <span className="caption">Channel Flow</span>
          </div>
          <div className="image">
            <Image src={hbdtImage} width={250} alt="HBDT figure" />
            <span className="caption">HB Driven Turbulence</span>
          </div>
        </div>
      }
      <div className="content">
        <h1>Past Announcements</h1>
        {announcements.map(a =>
          <>
            <p>
              ✪   <strong>{a.title}</strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: a.content }}></p>
          </>
        )}
      </div>
    </Styled>
  );
};