import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from '../../../../../context';
import { BreadCrumbParent, BreadCrumbsStyled } from '../../../../common/breadcrumbs';
import mainImage from '../../../../../public/datasets/rstrt_0285_density.png'

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

export const BuoyancyTurbulence: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Datasets', url: '/documentation/datasets' },
    { name: 'Homogeneous Turbulence', url: '/documentation/datasets/homogeneousTurbulence' }
  ];

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Bouyancy Turbulence" />
      <div className="page">
        <div className="header">
          <h2>Homogeneous Buoyancy Driven Turbulence</h2>
          <Image src={mainImage} width={250} alt="Forced MHD turbulence figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: Los Alamos National Laboratory using the LANL DNS code </h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-HBDT.pdf" target="_blank">README-HBDT</Link></span>
          <br />
          <br />
          <span>
            ✪  Direct Numerical Simulation (DNS) of homogeneous buoyancy driven turbulence in a domain size 2π × 2π × 2π, using 1,0243 nodes.
            <br />
            <br />
          </span>
          <span>
            ✪  The incompressible two-fluid Navier-Stokes equations are solved using a pseudo-spectral method. These equations represent the large speed of sound limit for the fully compressible Navier-Stokes equations with two fluids having different molar masses and obeying the ideal-gas equation of state.
            <br />
            <br />
          </span>
          <span>
            ✪  The domain is triply periodic and the homogeneity of the fluctuating quantities is ensured by imposing mean zero velocity and constant mean pressure gradient. These conditions are similar to those encountered in the interior of the Rayleigh-Taylor mixing layer.
            <br />
            <br />
          </span>
          <span>
            ✪  The two fluids are initialized as random blobs, with a characteristic size of about 1/5 of the domain. The flow starts from rest, in the presence of a constant gravitational acceleration, and the fluids start moving in opposite direction due to differential buoyancy forces. Turbulence fluctuations are generated and the turbulent kinetic energy increases; however, as the fluids become molecularly mixed, the buoyancy forces decrease and at some point the turbulence starts decaying.
            <br />
            <br />
          </span>
          <span>
            ✪  Due to the change in specific volume during mixing, the divergence of velocity is not zero, but related to the density field. This leads to a variable coefficient Poisson equation for pressure, which is decomposed in two parts, for the gradient and curl components of <i>∇p/ρ</i>. These are solved using direct solvers to ensure mass conservation and baroclinic generation of vorticity to machine precision.
            <br />
            <br />
          </span>
          <span>
            ✪  The 1015 time frames stored in the database cover both the buoyancy driven increase inturbulence intensity as well as the buoyancy mediated turbulence decay. Each time frame contains the density, 3 velocity components, and pressure at the grid points. The frames are stored at a constant time interval of 0.04, which represents between 20 to 50 DNS time steps.
            <br />
            <br />
          </span>
          <span>
            ✪  Schmidt number: 1.0
            <br />
            <br />
          </span>
          <span>
            ✪  Froude number: 1.0
            <br />
            <br />
          </span>
          <span>
            ✪  Atwood number: 0.05
            <br />
            <br />
          </span>
          <span>
            ✪  Maximum turbulent Reynolds number: <i>Re<sub>τ</sub> ~ 17,765</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  Minimum turbulent Reynolds number during decay phase: <i>Re<sub>τ</sub> ~ 1,595</i>.
            <br />
            <br />
          </span>
          <span>
            ✪  A file with the time history of the Favre turbulent kinetic energy, <i>k<sup>˜</sup> = &lt;ρu<sub>i</sub>''u<sub>i</sub>''&gt; ⁄ 2&lt;ρ&gt;</i>, Reynolds stresses, R<sub>ii</sub> = &lt;ρu<sub>i</sub>''u<sub>i</sub>''&gt;  (no summation over i), vertical mass flux, <i>a<sub>v</sub> = &lt;ρ u<sub>1</sub>'&gt; ⁄ &lt;ρ&gt;</i>, turbulent Reynolds number,<i> Re<sub>τ</sub> = k<sup>˜</sup><sup>2</sup> ⁄ νε</i>, eddy turnover time, <i>τ = k<sup>˜</sup> ⁄ ε</i>, kinetic energy dissipation, <i>ε</i>, density variance and density-specific volume correlation can be found <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/data1.txt">here</Link>. <br />(Note: Until July 22, 2015, the time-history file that was posted on this site included the total kinetic energy instead of the Favre turbulent kinetic energy. The file posted since July 22, 2015 lists the Favre turbulent kinetic energy)
            <br />
            <br />
          </span>
          <span>
            ✪  Files with tables of the power spectra of density, 3 velocity components, and mass flux can be downloaded at the following times:
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/spectra1.txt" target="_blank"> 6.56</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/spectra2.txt" target="_blank"> 11.4</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/spectra3.txt" target="_blank"> 15.0</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/spectra4.txt" target="_blank"> 20.0</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/spectra5.txt" target="_blank"> 30.0</Link> and
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/spectra6.txt" target="_blank"> 40.0</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  Files with tables of the density PDF can be downloaded for the following times:
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf1.txt" target="_blank"> 0.0</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf2.txt" target="_blank"> 6.56</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf3.txt" target="_blank"> 11.4</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf4.txt" target="_blank"> 15.0</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf5.txt" target="_blank"> 20.0</Link>,
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf6.txt" target="_blank"> 30.0</Link> and
            <Link href="http://turbulence.pha.jhu.edu/docs/hbdt/pdf7.txt" target="_blank"> 40.0</Link>.
            <br />
            <br />
          </span>
        </div>
      </div>
    </Styled >
  );
};