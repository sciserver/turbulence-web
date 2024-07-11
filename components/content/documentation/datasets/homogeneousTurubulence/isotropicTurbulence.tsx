import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import mainImage from 'public/datasets/isotropic.jpg';

const Styled = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    h2 {
      font-size: 45px;
      text-align: right;
      margin-bottom: 0px;
    }
  }

  .content {
    padding-top: 35px;
  }

  .page {
    @media (width >= 800px)  {
      display: flex;
      gap: 30px;
    }
  }
`;

export const IsotropicTurbulence: FC = () => {

  const router = useRouter();
  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Datasets', url: '/datasets' },
    { name: 'Homogeneous Turbulence', url: '/datasets/homogeneousTurbulence' }
  ];

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Isotropic Turbulence" />
      <div className="page">
        <div className="header">
          <h2>Forced Isotropic Turbulence</h2>
          <Image src={mainImage} width={250} alt="Forced isotropic turbulence figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: JHU DNS code </h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-isotropic.pdf" target="_blank">README-isotropic</Link></span>
          <br />
          <br />
          <span>
            ✪  Direct numerical simulation (DNS) using 1,024<sup>3</sup> nodes.
            <br />
            <br />
          </span>
          <span>
            ✪  Navier-Stokes is solved using pseudo-spectral method.
            <br />
            <br />
          </span>
          <span>
            ✪  Energy is injected by keeping constant the total energy in shells such that |k| is less or equal to 2.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a statistical stationary state, 5,028 frames of data with 3 velocity components and pressure are stored in the database. Extra time frames at the beginning and at the end have been added to be used for temporal-interpolations.
            <br />
            <br />
          </span>
          <span>
            ✪ The Taylor-scale Reynolds number fluctuates around R<sub>λ</sub>~ 433.
            <br />
            <br />
          </span>
          <span>
            ✪  There is one dataset ("coarse") with 5028 timesteps available, for time t between 0 and 10.056 (the frames are stored at every 10 time-steps of the DNS). Intermediate times can be queried using temporal-interpolation.
            <br />
            <br />
          </span>
          <span>
            ✪  There is another dataset ("fine") that stores every single time-step of the DNS, for testing purposes. Times available are for t between 0.0002 and 0.0198.
            <br />
            <br />
          </span>
          <span>
            ✪  A table with the time history of the total kinetic energy and Taylor-scale Reynolds number as function of time can be downloaded from <Link href="http://turbulence.pha.jhu.edu/ener_Re_time.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  Radial spectrum E(k) averaged over time can be downloaded from <Link href="http://turbulence.pha.jhu.edu/spectrum.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
        </div >
      </div >
    </Styled >
  );
};