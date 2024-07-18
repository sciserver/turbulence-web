import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import mainImage from 'public/datasets/channel-vert.jpeg';
import { useRouter } from 'next/router';

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

export const ChannelFlow: FC = () => {

  const router = useRouter();
  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Datasets', url: '/datasets' },
    { name: 'Wall Bounded Turbulence', url: '/datasets/wallBoundedTurbulence' }
  ];

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Channel Flow" />
      <div className="page">
        <div className="header">
          <h2>Channel Flow</h2>
          <Image src={mainImage} width={250} alt="Channel Flow figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: Collaboration of UT Austin and JHU, using the UT Austin DNS code</h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-CHANNEL.pdf" target="_blank">README-CHANNEL</Link> for more details</span>
          <br />
          <br />
          <span>
            ✪  Direct numerical simulation (DNS) of channel flow in a domain of size 8π x 2 x 3π, using 2048 x 512 x 1536 nodes.
            <br />
            <br />
          </span>
          <span>
            ✪  Incompressible Navier-Stokes equations are solved using the pseudo-spectral (Fourier-Galerkin) method in wall-parallel (x, z) planes, and the 7th-order B-spline collocation method in the wall-normal (y) direction.
            <br />
            <br />
          </span>
          <span>
            ✪  Simulation is run and equilibrated using prescribed bulk velocity=1, then switched to imposed pressure gradient (dP/dx = 0.0025) and further equilibrated.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a (nearly) statistical stationary state, 4,000 frames of data with 3 velocity components and pressure are stored in the database. The frames are stored at every 5 time-steps of the DNS.
            This corresponds to about one channel flow-through time. Intermediate times can be queried using temporal-interpolation.
            <br />
            <br />
          </span>
          <span>
            ✪  The friction velocity is u<sub>τ</sub>=0.0499.
            < br />
            <br />
          </span >
          <span>
            ✪  The viscosity is ν = 5 x 10<sup>-5</sup>.
            <br />
            <br />
          </span >
          <span>
            ✪  The friction velocity Reynolds number is  Re<sub>τ</sub> ~ 1000.
            <br />
            <br />
          </span >
          <span>
            ✪  The y-locations of the grid points in the vertical direction can be downloaded from <Link href="http://turbulence.pha.jhu.edu/docs/channel/y.txt" target="_blank">this text file</Link>.
            The corresponding B-spline knot locations can be obtained from <Link href="http://turbulence.pha.jhu.edu/docs/channel/y-knots.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  A table with the time history of friction velocity Reynolds number can be downloaded from <Link href="http://turbulence.pha.jhu.edu/docs/channel/re-tau.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  A table with the vertical profiles of mean velocity, Reynolds shear stresses, viscous stress, normal stress, mean pressure, pressure variance and pressure-velocity covariance in viscous units, can be downloaded from <Link href="http://turbulence.pha.jhu.edu/docs/channel/profiles.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  Files with tables of the streamwise (k<sub>x</sub>) spectra of u, v, w, p at various heights can be downloaded for the following y+ values:
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-10.11.txt" target="_blank"> 10.11</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-29.89.txt" target="_blank"> 29.89</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-99.75.txt" target="_blank"> 99.75</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-371.6.txt" target="_blank"> 371.6</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-999.7.txt" target="_blank"> 999.7</Link>.
            <br />
            <br />
          </span >
          <span>
            ✪  Files with tables of the spanwise (k<sub>z</sub>) spectra of u, v, w, p at various heights can be downloaded for the following y+ values:
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-10.11.txt" target="_blank"> 10.11</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-29.89.txt" target="_blank"> 29.89</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-99.75.txt" target="_blank"> 99.75</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-371.6.txt" target="_blank"> 371.6</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/channel/spectra-kx-yplus-999.7.txt" target="_blank"> 999.7</Link>.
            <br />
            <br />
          </span >
        </div >
      </div >
    </Styled >
  );
};