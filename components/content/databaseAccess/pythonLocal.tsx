import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { mediaQuery } from 'components/common/layout';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import mainImage from 'public/databaseAccess/python-local.png';

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

export const PythonLocal: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Python Local" />
      <br />
      <div className="content">
        <div>
          {displayImage &&
            <Image src={mainImage} height={300} alt="Turbulence figure 1" />
          }
        </div>
        <div>
          <h1>Python Local</h1>
          <br />
          <h3><Link href="https://github.com/sciserver/giverny/raw/master/DEMO_notebooks/DEMO_local_python_notebooks.zip" target="_blank">Download</Link> a Python notebook Getdata_JHTDB_2.ipynb</h3>
          <p>
            <Link href="https://github.com/sciserver/giverny/tree/master" target="_blank">Direct link to github repository </Link> containing the <strong>Getdata_JHTDB_2.ipynb </strong>
            file, as well as other codes being run on the JHTDB backend.
          </p>
          <p>
            <strong>Overview:</strong>  The DEMO Python code illustrates sampling velocities
            on arrays of points (a 2D plane, a 3D volume, random sets of points, and a time-history
            at a single point). Users can execute the Python code on their local computer and it will
            query the database during execution.
          </p>
        </div>

      </div>
    </Styled>
  );
};