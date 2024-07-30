import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { mediaQuery } from 'components/common/layout';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import mainImage from 'public/databaseAccess/python-sciserver.png';

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

export const PythonSciserver: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Python Sciserver" />
      <br />
      <div className="content">
        <div>
          {displayImage &&
            <Image src={mainImage} height={300} alt="Turbulence figure 1" />
          }
        </div>
        <div>
          <h1>Python Sciserver</h1>
          <br />
          <h3><Link href="https://github.com/sciserver/giverny/raw/master/DEMO_SciServer_python_notebooks.zip" target="_blank">Download</Link> a Python notebook Getdata_JHTDB_2.ipynb</h3>
          <p>
            <Link href="https://github.com/sciserver/giverny/tree/master" target="_blank">Direct link to github repository </Link>  containing the <strong>Getdata_JHTDB_2.ipynb </strong>
            file, as well as other codes being run on the JHTDB backend.
          </p>
          <p>
            <strong>Overview:</strong>  The DEMO Python code illustrates sampling velocities on arrays of points
            (a 2D plane, a 3D volume, random sets of points, and a time-history at a single point).
            Users can execute the Python code on Sciserver and it will query the database during execution.
          </p>
          <br />
        </div>
      </div>
      <h3>How to use Sciserver</h3>
      <p>
        The SciServer is a cloud-based data-driven cluster, of The Institute for Data Intensive Engineering and Science (IDIES)
        at Johns Hopkins University. Users get the advantages of more reliable and faster data access since the SciServer is
        directly connected to JHTDB through a 10 Gigabit ethernet connection. SciServer provides containers with the "giverny"
        library pre-installed.
      </p>
      <br />
      <h4>To use giverny through Sciserver:</h4>
      <p>
        <strong>1.</strong> Login to SciServer (may need to create a new account first).
      </p>
      <p>
        <strong>2.</strong> Click on *Compute* and then *Create container* (You could also run jobs in batch mode, by selecting Compute Jobs).
      </p>
      <p>
        <strong>3.</strong> Type in <strong><i>*Container name*</i></strong>, select <strong><i>*SciServer Essentials (Test)*</i></strong> in
        <strong><i>*Compute Image*</i></strong>, mark <strong><i>*Turbulence (filedb)*</i></strong> in <strong><i>*Data volumes*</i></strong>,
        and then click on <strong><i>*Create*</i></strong>.
      </p>
      <p>
        <strong>4. </strong> Click on the container you just created, then you could start using giverny with IPython Notebook.
      </p>
    </Styled>
  );
};