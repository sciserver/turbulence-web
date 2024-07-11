import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import rotatingImage from 'public/datasets/rotstrat4096.jpg';

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

export const RotatingStratifiedTurbulence: FC = () => {

  const router = useRouter();
  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Datasets', url: '/datasets' },
    { name: 'Geophysical Turbulence', url: '/datasets/geophysicalTurbulence' }
  ]

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Rotating Stratified Turbulence" />
      <div className="page">
        <div className="header">
          <h2>Rotating Stratified Turbulence on 4,094<sup>3</sup> mesh</h2>
          <Image src={rotatingImage} height={250} alt="Rotating Stratified Turbulence figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: GHOST code</h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-rotstrat4096.pdf" target="_blank">README-rotstrat4096 </Link> for more details</span>
          <br />
          <br />
          <span>
            ✪  Direct numerical simulation (DNS) of rotating and stratified turbulence using 4,096<sup>3</sup> nodes, on a periodic grid using a pseudo-spectral parallel code, GHOST.
            <br />
            <br />
          </span>
          <span>
            ✪  Navier-Stokes/Boussinesq equations are solved using a pseudo-spectral method.
            <br />
            <br />
          </span>
          <span>
            ✪  Solid body rotation force acting as the only external forcing mechanism.
            <br />
            <br />
          </span>
          <span>
            ✪  Time integration uses fourth-order Runge-Kutta.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a statistical stationary state, 5 frames of data, which includes the 3 components of the velocity vector and the temperature fluctuations, are generated and written in files that can be accessed directly by the database (FileDB system).
            <br />
            <br />
          </span>
          <span>
            ✪  Domain: 2π × 2π × 2π
            <br />
            <br />
          </span>
          <span>
            ✪  Grid: 4,096<sup>3</sup>
            <br />
            <br />
          </span>
          <span>
            ✪  Number of snapshots available: 5
            <br />
            <br />
          </span>
          <span>
            ✪  Viscosity ν = 4 × 10<sup>-5</sup>
            <br />
            <br />
          </span >
          <span>
            ✪  Prandlt number  Pr = ν/κ = 1
            <br />
            <br />
          </span >
          <span>
            ✪  Brunt-Väisälä frequency N = 13.2
            <br />
            <br />
          </span >
          <span>
            ✪  Inertial wave frequency f = 2.67
            <br />
            <br />
          </span >
          <span>
            ✪ RMS velocity U<sub>0</sub> = 0.83
            <br />
            <br />
          </span >
          <span>
            ✪  Scale of energy spectrum peak L<sub>0</sub> = 2π/k<sub>0</sub> = 2.5
            <br />
            <br />
          </span >
          <span>
            ✪  Integral length scale L<sub>int</sub> = 2π ∫ EV(k)dk / ∫ kEV(k)dk = 2.6
            <br />
            <br />
          </span >
          <span>
            ✪  Froude number Fr = U<sub>0</sub>/L<sub>0</sub>N = 0.0242
            <br />
            <br />
          </span >
          <span>
            ✪  Rossby number Ro = U<sub>0</sub>/L<sub>0</sub>f = 0.12
            <br />
            <br />
          </span >
          <span>
            ✪  Reynolds number Re = U<sub>0</sub>L<sub>0</sub>/ν = 5.4 x 104
            <br />
            <br />
          </span >
          <span>
            ✪  Kinetic Energy Dissipation ε<sub>V</sub> = 0.0123
            <br />
            <br />
          </span >
          <span>
            ✪  Potential Energy Dissipation ε<sub>P</sub> = 0.0077
            <br />
            <br />
          </span >
          <span>
            ✪  Kolmogorov scale η = 1.51515 × 10<sup>-3</sup>
            <br />
            <br />
          </span >
          <span>
            ✪  k<sub>max</sub>η = 3.1
            <br />
            <br />
          </span >
          <span>
            ✪  GetPosition is not implemented for this dataset.
            < br />
            <br />
          </span >
        </div >
      </div >
    </Styled >
  );
};