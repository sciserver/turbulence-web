import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from '../../../../../context';
import { BreadCrumbParent, BreadCrumbsStyled } from '../../../../common/breadcrumbs';
import mainImage from '../../../../../public/datasets/channel5200-vertical.png'

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

export const Channel5200: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Datasets', url: '/documentation/datasets' },
    { name: 'Wall Bounded Turbulence', url: '/documentation/datasets/wallBoundedTurbulence' }
  ]

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Channel 5200" />
      <div className="page">
        <div className="header">
          <h2>Channel Flow at <i>Re</i><sub>T</sub><i>=5,200</i></h2>
          <Image src={mainImage} width={250} alt="Channel 5200 figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: UT Austin using the UT Austin DNS code</h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-CHANNEL5200.pdf" target="_blank">README-CHANNEL5200</Link> for more details</span>
          <br />
          <br />
          <span>
            ✪  Direct numerical simulation (DNS) of channel flow in a domain of size <i>8π × 2 × 3π, using 10240 × 1536 × 7680</i> nodes.
            <br />
            <br />
          </span>
          <span>
            ✪  Incompressible Navier-Stokes equations are solved using the pseudo-spectral (Fourier-Galerkin) method in wall-parallel (x, z) planes, and the 7th-order B-spline collocation method in the wall-normal (y) direction.
            <br />
            <br />
          </span>
          <span>
            ✪  Simulation is run and equilibrated using prescribed bulk velocity = 1.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a statistical stationary state, 11 frames of data with 3 velocity components and pressure are stored in the database. The frames are apart from each other for 0.7 flow-through time.
            <br />
            <br />
          </span>
          <span>
            ✪  The friction velocity is <i>u<sub>τ</sub>=0.0414872</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  The viscosity is <i>ν = 8 x 10<sup>-6</sup></i>.
            <br />
            <br />
          </span>
          <span>
            ✪  The friction velocity Reynolds number is  <i>Re<sub>τ</sub> = 5185.897</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  The y-locations of the grid points in the vertical direction can be downloaded from <Link href="http://turbulence.pha.jhu.edu/docs/channel5200/channel5200-y.txt" target="_blank">this text file</Link>.
            The corresponding B-spline knot locations can be obtained from <Link href="http://turbulence.pha.jhu.edu/docs/channel5200/channel5200-y-knots.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  Mean profiles of mean velocity, Reynolds stresses, vorticity variance, mean pressure, pressure variance, pressure-velocity covariance, terms in Reynolds stress transport equation and 1D energy spectra, can be found <Link href="https://turbulence.oden.utexas.edu/channel2015/content/Data_2015_5200.html" target="_blank">here</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  <strong>GetPosition</strong> and <strong>Filtering</strong> functions are not implemented for this dataset.
            <br />
            <br />
          </span>
        </div>
      </div>
    </Styled >
  );
};