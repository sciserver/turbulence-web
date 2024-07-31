import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';
import { mediaQuery } from 'components/common/layout';

import mainImage from 'public/databaseAccess/matlab.png';

const Styled = styled.div`
  .content {
    @media (width >= ${mediaQuery}px) {
      display: flex;
      align-items: center;
      gap: 5%;
    }
  }

  .download-links {
    margin-right: 10px;
  }
`;

export const MatlabLocal: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);
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

    handleWindowWidth();
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Database Access', url: '/database' }
  ];

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Matlab™ Local" />
      <br />
      <div className="content">
        <div>
          {displayImage &&
            <Image src={mainImage} height={300} alt="Turbulence figure 1" />
          }
        </div>
        <div>
          <h1>Matlab™ Local</h1>
          <br />
          <h3><Link href="https://github.com/sciserver/giverny/raw/master/DEMO_notebooks/DEMO_local_matlab_notebooks.zip">Download</Link> a folder containing 2 Matlab™ files</h3>
          <p>
            <strong>(1)</strong> The DEMO code Getdata_JHTDB_2.m which is the second-generation virtual sensors data access method for Matlab™
          </p>
          <p>
            <strong>(2)</strong> The getData.m function which is called by Getdata_JHTDB_2.m and interfaces with JHTDB REST service.
          </p>
          <p>
            <Link href="https://github.com/sciserver/giverny/tree/master" target="_blank">Direct link to github repository </Link> containing the <strong>Getdata_JHTDB_2.m</strong> and <strong>getData.m </strong>
            files, as well as other codes being run on the JHTDB backend.
          </p>
          <p>
            <strong>Overview:</strong>  The DEMO Matlab™ code illustrates sampling velocities on arrays of points
            (a 2D plane, a 3D volume, random sets of points, and a time-history at a single point).
            Users can execute the Matlab™ code on their local computer and it will query the database during execution.
          </p>
        </div>

      </div>
    </Styled>
  );
};