import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import rotatingImage from 'public/datasets/isotropic8192.png';

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

export const Isotropic8192Turbulence: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Isotropic 4096 Turbulence" />
      <div className="page">
        <div className="header">
          <h2>Forced Isotropic Turbulence Dataset on <i>8192<sup>3</sup></i> Grid</h2>
          <Image src={rotatingImage} height={250} alt="Rotating Stratified Turbulence figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: Georgia Tech DNS code </h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-isotropic8192.pdf" target="_blank">README-isotropic8192 </Link> for more details</span>
          <br />
          <br />
          <span>
            ✪ Direct numerical simulation (DNS) using <i>8,192</i><sup>3</sup> nodes.
            <br />
            <br />
          </span>
          <span>
            ✪  Navier-Stokes is solved using pseudo-spectral method.
            <br />
            <br />
          </span>
          <span>
            ✪  Time integration uses second-order Runge-Kutta.
            <br />
            <br />
          </span>
          <span>
            ✪  The simulation is de-aliased using phase-shifting and truncation.
            <br />
            <br />
          </span>
          <span>
            ✪  Energy is injected by keeping the energy density in the lowest wavenumber modes prescribed following the approach of Donzis & Yeung.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a statistical stationary state, a frame of data, which includes the 3 components of the velocity vector and the pressure, are generated and written in files that can be accessed directly by the database (FileDB system).
            <br />
            <br />
          </span>
          <span>
            ✪  Domain: <i>2π × 2π × 2π</i>
            <br />
            <br />
          </span>
          <span>
            ✪  Grid: <i>8,192</i><sup>3</sup>
            <br />
            <br />
          </span>
          <span>
            ✪  Number of snapshots available: 6
            <br />
            <br />
          </span>
          <span>
            ✪  Taylor-scale Reynolds number <i>Re<sub>λ</sub>~ 1200-1300</i> for snapshots 0-4, and <i>Re<sub>λ</sub>~ 610</i> for snapshot 5
            <br />
            <br />
          </span>
          <span>
            ✪  Viscosity, dissipation, RMS velocity, and Kolmogorov scale: see <Link href="http://turbulence.pha.jhu.edu/docs/README-isotropic8192.pdf">README-isotropic8192</Link>
            <br />
            <br />
          </span>
          <span>
            ✪  <i>GetPosition</i> is not implemented for this dataset.
            <br />
            <br />
          </span>
        </div>
      </div>
    </Styled >
  );
};