import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';
import { docsDownloadURL } from 'pages/_app';

import rotatingImage from 'public/datasets/isotropic4096.jpg';

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

export const Isotropic4096Turbulence: FC = () => {

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
          <h2>Forced Isotropic Turbulence Dataset on 4096<sup>3</sup> Grid</h2>
          <Image src={rotatingImage} height={250} alt="Rotating Stratified Turbulence figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: Georgia Tech DNS code</h3>
          <span className="caption">See <Link href={`${docsDownloadURL}README-isotropic4096.pdf`} target="_blank">README-isotropic4096 </Link> for more details</span>
          <br />
          <br />
          <span>
            ✪ Direct numerical simulation (DNS) using 4,096<sup>3</sup> nodes.
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
            ✪  After the simulation has reached a statistical stationary state, a frame of data, which includes the 3 components of the velocity vector (but not the pressure for this dataset), are generated and written in files that can be accessed directly by the database (FileDB system).
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
          </span >
          <span>
            ✪  Number of snapshots available: 1
            <br />
            <br />
          </span>
          <span>
            ✪  Viscosity ν = 1.732 × 10<sup>-4</sup>
            <br />
            <br />
          </span >
          <span>
            ✪ RMS velocity u' = (2k/3)<sup>1/2</sup> = 1.56853
            <br />
            <br />
          </span >
          <span>
            ✪  Reynolds number Re<sub>λ</sub> = 610.57
            <br />
            <br />
          </span >
          <span>
            ✪  Kolmogorov scale η = 1.3844 × 10<sup>-3</sup>
            <br />
            <br />
          </span >
          <span>
            ✪  &lt;ε&gt;L<sub>1</sub> /u' <sup>3</sup> = 0.51
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