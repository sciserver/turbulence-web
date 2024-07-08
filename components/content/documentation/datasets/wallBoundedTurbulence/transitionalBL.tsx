import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from '../../../../../context';
import { BreadCrumbParent, BreadCrumbsStyled } from '../../../../common/breadcrumbs';
import mainImage from '../../../../../public/datasets/transition_bl.png'

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

export const TransitionalBL: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Transitional Boundary Layer" />
      <div className="page">
        <div className="header">
          <h2>Transitional Boundary Layer</h2>
          <Image src={mainImage} width={250} alt="Channel 5200 figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: Dr. Jin Lee and Prof. Tamer Zaki of JHU </h3>
          <span className="caption">See <Link href="http://turbulence.pha.jhu.edu/docs/README-transition_bl.pdf" target="_blank">README-transition_bl </Link> for more details</span>
          <br />
          <br />
          <span>
            ✪  Direct numerical simulation (DNS) of a transitional boundary layer over a plate with an elliptical leading edge.
            <br />
            <br />
          </span>
          <span>
            ✪  Navier-Stokes was discretized on a curvilinear grid and solved using a finite volume DNS code.
            <br />
            <br />
          </span>
          <span>
            ✪  A fractional-step algorithm was adopted, and the spatial discretization was a staggered volume-flux formulation.
            <br />
            <br />
          </span>
          <span>
            ✪  The viscous terms were integrated in time implicitly using the Crank-Nicolson and the advections terms were treated explicitly using the Adams-Bashforth.
            <br />
            <br />
          </span>
          <span>
            ✪  Pressure was treated using implicit Euler in the <i>δ</i>p-form. The pressure equation was Fourier transformed in the span, and the resulting Helmholtz equation was solved for every spanwise wavenumber using two-dimensional multi-grid.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a statistical stationary state, 4701 frames of data, which includes the 3 components of the velocity vector and the pressure, are generated and written in files that can be accessed directly by the database (FileDB system).
            <br />
            <br />
          </span>
          <span>
            ✪  Since the grid is staggered, data at the wall are not stored in the database. However, JHTDB provides values in the region between the wall and the first grid point, <i>y∈[0, 0.0036]</i>, using 4th-order Lagrange polynomial inter- and extrapolation.
            <br />
            <br />
          </span>
          <span>
            ✪  The y-locations of the grid points in the vertical direction can be downloaded from <Link href="http://turbulence.pha.jhu.edu/docs/transition_bl/y.txt" target="_blank">this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  The time-averaged statistics can be downloaded from <Link href="http://turbulence.pha.jhu.edu/docs/transition_bl/Transition_BL_Time_Averaged_Profiles.h5">this HDF5 file</Link>. Brief notes are <Link href="http://turbulence.pha.jhu.edu/docs/transition_bl/Notes_for_Transition_BL_Time_Averaged_Profiles.txt" target="_blank">here</Link>.
            <br />
            <br />
          </span>
        </div>
      </div>
    </Styled >
  );
};