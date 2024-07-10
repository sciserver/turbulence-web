import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { hostURL } from 'pages/_app';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import stablyImage from 'public/datasets/stablyStratified.png';

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

export const StablyStratifiedBoundaryLayer: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Stably Stratified Boundary Layer" />
      <div className="page">
        <div className="header">
          <h2>Stably stratified atmospheric <br /> boundary layer</h2>
          <Image src={stablyImage} height={250} alt="Stably Stratified Boundary Layer figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: Dataset generated at NCAR using the NCAR Large Eddy Simulation code</h3>
          <span className="caption">See <Link href={`${hostURL}docs/README_SABL2048.pdf`} target="_blank" download>README-SABLE2048.pdf</Link> for more details</span>
          <br />
          <br />
          <span>
            ✪  Large Eddy Simulation (LES) of stably stratified atmospheric boundary layer in a domain of size (400m, 400m, 400m), using <i>2048<sup>3</sup></i> mesh and mesh spacing of about 20cm in each direction.
            <br />
            <br />
          </span>
          <span>
            ✪  Simulations use mixed spectral methods in horizontal planes and second order finite differencing in the vertical (z) direction.
            <br />
            <br />
          </span>
          <span>
            ✪  Subfilter-scale fluxes are parameterized using the eddy-viscosity model that uses a prognostic subfilter kinetic energy transport equation and the two-part SFS model of Sullivan et al. (1994).
            <br />
            <br />
          </span>
          <span>
            ✪  Flow is driven by a geostrophic wind of magnitude <i>U<sub>g</sub>=8 m/s</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  Bottom boundary is a rough surface with standard <strong>MOST</strong> parameterization and roughness length <i>z<sub>0</sub>=0.1m</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  A constant cooling rate of <i>C<sub>r</sub> = 0.25 K/hr</i> is applied at the ground surface.
            <br />
            <br />
          </span>
          <span>
            ✪  Resulting friction velocity is <i>u<sup>*</sup>=0.25 m/s</i> and boundary layer height is <i>h ~ 187 m</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  Two data sets are available: time-resolved during a relatively short period of time consisting of 100 time-steps (high-frequency dataset name = “sable2048high”), and 20 statistically independent snapshots (low-frequency dataset name = “sable2048low”).
            <br />
            <br />
          </span>
        </div>
      </div>
    </Styled >
  );
};