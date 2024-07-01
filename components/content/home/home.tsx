import { FC, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import mainImage from '../../../public/JHTDB2_snapshots.png';
import { AppContext } from '../../../context';

const Styled = styled.div`
  .points {
    display: flex;
    justify-content: center;
  }
  
  .header {
    display: flex;
    flex-direction: column;
    
    h2 {
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
    
  @media (width >= 800px) {
    display: flex;
    gap: 30px;
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
          This website is a portal to an <strong>Open Numerical Turbulence Laboratory</strong> that enables access to multi-Terabyte turbulence databases.
          The data reside on distributed nodes and disks on our database cluster computers and are stored in small 3D sub-cubes to accelerate access speeds to small data subsets.
        </p>
        <p>
          Access to the data is facilitated by <strong> Web Service Interfaces </strong>that permit numerical experiments to be run across the Internet.
          We offer Python and Matlab interfaces layered above <Link href="/database/">Web Services</Link> so that scientists can use familiar programming tools.
          Python and Matlab codes can be run on client platforms.
        </p>
        <p>
          Python can also be run on <Link href="http://sciserver.org/">Sciserver</Link>, a fully integrated cyberinfrastructure system encompassing related
          tools and services to enable researchers to cope with scientific big data. Calls to fetch subsets of the data can be made directly from within a
          program being executed on the client's or being run on the Sciserver platform.
        </p>
        <p>
          For initial experimentation and familiarization of datasets and access modes, web-browser manual querying of data at individual points and times is also supported.
          Evaluation of velocity and pressure at arbitrary points and time is supported using interpolations (Lagrange Polynomials and Splines) executed on the database close
          to the data (for details, see <Link href="/database/">documentation page</Link>).
        </p>
        <p>
          Particle tracking can be performed both forward and backward in time using a second order accurate Runge-Kutta integration scheme.
          Subsets of the data can be downloaded in <strong>hdf5</strong>file format using the <Link href="https://turbulence.idies.jhu.edu/cutout/">data cutout service</Link>.
        </p>
        <p>
          To date the Web-services-accessible databases contain a space-time history of a <strong>direct numerical simulation (DNS)</strong> of isotropic turbulence (100 Terabytes),
          a DNS of  <strong>magneto-hydrodynamic (MHD)</strong> turbulence  (50 Terabytes), a DNS of forced, fully developed turbulent channel flow (130 Terabytes), a DNS of <strong>homogeneous
            buoyancy driven</strong> turbulence (27 Terabytes), a transitional boundary layer flow (105 Terabytes), data from <strong>Large Eddy Simulations (LES)</strong> of stably stratified
          atmospheric turbulent boundary layer (20 Terabytes) and <strong>two wind farm LES:</strong> one in a conventionally neutral flow and another during a diurnal cycle (80 Terabytes).
        </p>
        <p>
          Also available are individual snapshots (spatially but not temporally resolved data) of <i>4096</i><sup>3</sup> DNS of isotropic turbulence (1 snapshot), <i>8192</i><sup>3</sup> DNS of
          isotropic turbulence (6 snapshots at higher Reynolds number), rotating stratified turbulence (5 snapshots, 5 Terabytes), a high Reynolds number channel flow (11 snapshots, 20 Terabytes)
          and 20 snapshots of the LES of stably stratified atmospheric turbulent boundary layer.
        </p>
        <p>
          Basic characteristics of the data sets can be found in the <Link href="/documentation/datasets">datasets description page</Link>. Technical details about the database techniques used for
          this project are described in the  <Link href='/documentation/publications'>publications</Link>. Recent datasets are being stored using the Zarr storage format with 64-cube “buckets”, instead
          of the Z-curve ordering used for the legacy datasets.
        </p>
        <p>
          Also, data are being migrated to <strong>Ceph-FS</strong> storage from the original SQL-database and FileDB storage modalities.
          New more modular Python and Matlab <Link href="/documentation/datasets">codes</Link> use the REST interface instead of the legacy SOAP interface.
        </p>
        <div className="points">
          <h3>548,379,625,412,859 points queried</h3>
        </div>
      </div>

    </Styled>
  );
};