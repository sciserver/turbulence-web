import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { AppContext } from 'context';
import { mediaQuery } from 'components/common/layout';

import mainImage from 'public/publications.png';

const Styled = styled.div`
  
  @media (width >= ${mediaQuery}px)  {
    display: flex;
    gap: 5%;
    margin-left: -5%;
  }

  span {
    padding: 50px 0px;
  }

  iframe {
    border: none;
    width: 90%;
  }
`;

export const Publications: FC = () => {

  //Config
  const router = useRouter();

  //Context
  const { setTabOption } = useContext(AppContext);

  //App State
  const [iframeHeight, setIframeHeight] = useState<number>(0);
  const [displayImage, setDisplayImage] = useState<boolean>(true);

  const handleWindowWidth = () => {
    if (window.innerWidth >= mediaQuery) {
      setDisplayImage(true);
      return;
    }
    setDisplayImage(false);
  };

  // ON MOUNT: UI config
  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);
    setTabOption(router.asPath.split('/')[1]);
    setIframeHeight(window.innerHeight);

    handleWindowWidth();
  }, []);

  return (
    <Styled>
      {displayImage &&
        <Image className="responsive" src={mainImage} height={450} alt="Publications" />
      }
      <div className="content">
        <h1>Publications and abstracts</h1>
        <span>
          ✪   Yi Li, Eric Perlman, Minping Wan, Yunke Yang, Charles Meneveau, Randal Burns, Shiyi Chen, Alexander Szalay, and Gregory Eyink. A public turbulence database cluster and applications to study Lagrangian evolution of velocity increments in turbulence. Journal of Turbulence, 9:N31, 2008. [ <Link href="http://dx.doi.org/10.1080/14685240802376389">DOI</Link> | <Link href="http://arxiv.org/abs/0804.1703">arXiv</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	Huidan Yu, Kalin Kanov, Eric Perlman, Jason Graham, Edo Frederix, Randal Burns, Alexander Szalay, Gregory Eyink, and Charles Meneveau. Studying Lagrangian dynamics of turbulence using on-demand fluid particle tracking in a public turbulence database. Journal of Turbulence, 13:N12, 2012. [ <Link href="http://dx.doi.org/10.1080/14685248.2012.674643">DOI</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	Eric Perlman, Randal Burns, Yi Li, and Charles Meneveau. Data exploration of turbulence simulations using a database cluster. In Proceedings of the 2007 ACM/IEEE conference on Supercomputing - SC '07, page 1, New York, New York, USA, 2007. ACM Press. [ <Link href="http://dx.doi.org/10.1145/1362622.1362654">DOI</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	J. Graham, K. Kanov, X. I. A. Yang, M. Lee, N. Malaya, C. C. Lalescu, R. Burns, G. Eyink, A. Szalay, R. D. Moser, and C. Meneveau. A Web services accessible database of turbulent channel flow and its use for testing a new integral wall model for LES. Journal of Turbulence, 17(2):181-215, 2016. [ <Link href="http://dx.doi.org/10.1080/14685248.2015.1088656">DOI</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	Xiaodan Wang, Eric Perlman, Randal Burns, Tanu Malik, Tamas Budavári, Charles Meneveau, and Alexander Szalay. JAWS: Job-Aware Workload Scheduling for the Exploration of Turbulence Simulations. In 2010 ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis, pages 1-11. IEEE, 2010. [ <Link href="http://dx.doi.org/10.1109/SC.2010.31">DOI</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	Kalin Kanov, Eric Perlman, Randal Burns, Yanif Ahmad, and Alexander Szalay. I/O streaming evaluation of batch queries for data-intensive computational turbulence. In Proceedings of 2011 International Conference for High Performance Computing, Networking, Storage and Analysis on - SC '11, page 1, New York, New York, USA, 2011. ACM Press. [ <Link href="http://dx.doi.org/10.1145/2063384.2063423">DOI</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	Kalin Kanov, Randal Burns, Greg Eyink, Charles Meneveau, and Alexander Szalay. Data-intensive spatial filtering in large numerical simulation datasets. In 2012 International Conference for High Performance Computing, Networking, Storage and Analysis, pages 1-9. IEEE, 2012. [ <Link href="http://dx.doi.org/10.1109/SC.2012.41">DOI</Link> ]
          <br />
          <br />
        </span>
        <span>
          ✪ 	Zhao Wu, Jin Lee, Charles Meneveau, and Tamer Zaki. Application of a self-organizing map to identify the turbulent-boundary-layer interface in a transitional flow. Physical Review Fluids, 4(2):023902, 2019. [ <Link href="http://dx.doi.org/10.1103/PhysRevFluids.4.023902">DOI</Link> ]
          <br />
          <br />
        </span>
        <h2>Sample publications of Turbulence Database usage</h2>
        <iframe title="Sample publication embedded code from BibBase" height={iframeHeight} src="https://bibbase.org/service/mendeley/75799766-8e2d-3c98-81f9-e3efa41233d0/group/c9329632-2a50-3043-b803-cadc8dbdfc3f"></iframe>
      </div>
    </Styled>
  );
};