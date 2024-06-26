import { FC, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import mainImage from '../../../public/JHTDB2_snapshots.png';
import { AppContext } from '../../../context';

const Styled = styled.div`
  display: flex;
  gap: 30px;

  .points {
    display: flex;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    
    h2{
      font-family: "Roboto Slab", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 45px;
      text-align: right;
      margin-bottom: 0px;
    }
  }

  .content {
    padding-top: 35px;
  }

`;

export const Home: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('home');
  }, []);

  return (
    <Styled>
      <div className="header">
        <h2>Welcome to the Johns Hopkins Turbulence Database <br /> JHTDB </h2>
        <Image src={mainImage} height={250} alt="Turbulence figure 1" />
      </div>
      <div className="content">
        <p>
          This website is a portal to an Open Numerical Turbulence Laboratory that
          enables access to multi-Terabyte turbulence databases. The data reside on
          several nodes and disks on our database cluster computers and are stored
          in small 3D subcubes. Positions are indexed using a Z-curve for efficient access.
        </p>
        <p>
          Access to the data is facilitated by a Web services interface that permits numerical
          experiments to be run across the Internet. We offer C, Fortran and Matlab interfaces
          layered above <Link color='primary' href='/database/webServices'>Web Services </Link>
          so that scientists can use familiar programming tools on their client platforms.
          Calls to fetch subsets of the data can be made directly from within a program being
          executed on the client's platform. <Link href='https://turbulence.pha.jhu.edu/webquery/query.aspx' target='_blank'>Manual queries </Link>
          for data at individual points and times via web-browser are also supported. Evaluation of velocity
          and pressure at arbitrary points and time is supported using interpolations executed on
          the database nodes. Spatial differentiation using various order approximations
          (up to 8th order) and filtering are also supported (for details, see <Link href='/documentation/analysisTool'>documentation page</Link>).
          Particle tracking can be performed both forward and backward in time using a second order
          accurate Runge-Kutta integration scheme. Subsets of the data can be downloaded in hdf5 file
          format using the data cutout service.
        </p>
        <p>
          To date the Web-services-accessible databases contain a space-time history of a direct numerical
          simulation (DNS) of isotropic turbulent flow in incompressible fluid in 3D (100 Terabytes), a DNS
          of the incompressible magneto-hydrodynamic (MHD) equations (50 Terabytes), a DNS of forced, fully
          developed turbulent channel flow at <i>Re</i><sub>T</sub><i>=1000</i> (130 Terabytes), a DNS of
          homogeneous buoyancy driven turbulence (27 Terabytes), and a transitional boundary layer flow (105 Terabytes).
          Also available are individual snapshots (spatially but not temporally resolved data) of <i>4096</i><sup>3</sup> DNS
          of isotropic turbulence (1 snapshot), <i>8192</i><sup>3</sup> DNS of isotropic turbulence (6 snapshots at higher Reynolds number),
          rotating stratified turbulence (5 snapshots, 5 Terabytes), and channel flow at <i>Re</i><sub>T</sub><i>=5200</i> (11 snapshots, 20 Terabytes).
          Basic characteristics of the data sets can be found in the <Link href='/documentation/datasets'>datasets description page</Link>.
          Technical details about the database techniques used for this project are described in the <Link href='/documentation/publications'>publications</Link>.
        </p>
        <div className="points">
          <h3>548,379,625,412,859 points queried</h3>
        </div>
      </div>

    </Styled>
  );
};