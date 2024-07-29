import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { AppContext } from 'context';
import { PointsQueried } from 'components/content/pointsQueried';

import mainImage from 'public/JHTDB2_snapshots.png';

const Styled = styled.div`
  img.responsive {
    max-width: 400px;
    width: 100%;
    height: auto;
  }
  
  .header {
    display: flex;
    flex-direction: column;
    
    h2 {
      font-size: 2.5rem;
      text-align: right;
      margin-bottom: 0px;
    }
  }
      
  .content {
    padding-top: 35px;
    }
    
  .home {
    margin-top: -3%;
    @media (width >= 800px) {
      display: flex;
      gap: 30px;
    }
  }

`;

export const Home: FC = () => {

  const router = useRouter();
  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  return (
    <Styled>
      <PointsQueried />
      <div className="home">
        <div className="header">
          <h2>Welcome to the Johns Hopkins Turbulence Database <br /> JHTDB </h2>
          <Image className="responsive" src={mainImage} height={250} alt="Turbulence figure 1" />
        </div>
        <div className="content">
          <p>
            This website is a portal to an <strong>Open Numerical Turbulence Laboratory</strong> that enables access to
            multi-Terabyte turbulence databases. The data reside on distributed nodes and disks on our database cluster
            computers and are stored in small 3D sub-cubes to accelerate access speeds to small data subsets.
          </p>
          <p>
            Access to the data is facilitated by <strong> Web Service Interfaces </strong>that permit numerical experiments
            to be run across the Internet. We offer Python and Matlab™ interfaces layered above <Link href="/database/">Web Services </Link>
            so that scientists can use familiar programming tools. <Link href="/database/local/python">Python</Link> and <Link href="/database/local/matlab">Matlab™</Link> codes can be run on client platforms.
            Python can also be run on <Link href="/database/pythonSciserver">Sciserver</Link>, a fully integrated
            cyberinfrastructure system encompassing related tools and services to enable researchers to cope with scientific big data.
            Subsets of the data can be downloaded in hdf5 file format using the <Link href="https://turbulence.idies.jhu.edu/cutout/" target="_blank">data cutout service</Link>.
            For initial experimentation and familiarization of datasets and access modes, web-browser <Link href="https://turbulence.pha.jhu.edu/webquery/query.aspx" target="_blank">manual querying </Link>
            at individual points and times is also supported.
          </p>
          <p>
            <strong>Data processing</strong> supporting queries for velocity, pressure, gradients, Laplacians, and Hessians
            (and other relevant variables depending on the dataset) at arbitrary points and time is supported using Lagrange
            Polynomial and Spline methods executed on the database close to the data. For time-resolved datasets, fluid particle
            tracking can be performed both forward and backward in time using a second order accurate Runge-Kutta integration scheme.
          </p>
          <p>
            Available <strong>datasets</strong> (see <Link href="/datasets/">datasets description page</Link>) include a <strong>space-time
              history </strong> of a direct numerical simulation (DNS) of isotropic turbulence (100 Terabytes), a DNS of magneto-hydrodynamic (MHD)
            turbulence (50 TB), a DNS of forced, fully developed turbulent channel flow (130 TB), a DNS of homogeneous buoyancy driven
            turbulence (27 TB), a transitional boundary layer flow (105 TB), data from Large Eddy Simulations (LES) of stably stratified
            atmospheric turbulent boundary layer (20 TB) and (soon to come) two wind farm LES: one in a conventionally neutral flow and
            another during a diurnal cycle.
          </p>
          <p>
            Also available are <strong>datasets</strong> comprising <strong>snapshots</strong> (spatially but not temporally resolved data) of 4096<sup>3</sup> DNS of isotropic turbulence
            (1 snapshot), 8192<sup>3</sup> DNS of isotropic turbulence (6 snapshots at higher Reynolds number), rotating stratified turbulence
            (5 snapshots, 5 Terabytes), a high Reynolds number channel flow (11 snapshots, 20 Terabytes) and 20 snapshots of the LES
            of stably stratified atmospheric turbulent boundary layer.
          </p>
          <p>
            Recent datasets are being stored using the Zarr storage format with 64-cube “buckets”, instead of the Z-curve ordering used for the legacy
            datasets. Also, data are being migrated to Ceph-FS storage from the original SQL-database and FileDB storage modalities.
            New more modular Python and Matlab™ codes use the REST interface instead of the legacy SOAP interface.
          </p>
        </div >
      </div>
    </Styled >
  );
};