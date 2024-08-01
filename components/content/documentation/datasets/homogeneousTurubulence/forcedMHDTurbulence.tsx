import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';
import { docsDownloadURL } from 'pages/_app';

import mainImage from 'public/datasets/mhd-large.jpeg';

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

export const ForcedMHDTurbulence: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Forced MHD Turbulence" />
      <div className="page">
        <div className="header">
          <h2>Forced MHD Turbulence</h2>
          <Image src={mainImage} width={250} alt="Forced MHD turbulence figure" />
        </div>
        <div className="content">
          <h3>Simulation data provenance: JHU DNS code</h3>
          <span className="caption">See <Link href={`${docsDownloadURL}mhd/README-MHD.pdf`} target="_blank">README-MHD</Link></span>
          <br />
          <br />
          <span>
            ✪  Direct numerical simulation (DNS) using 1,024<sup>3</sup> nodes.
            <br />
            <br />
          </span>
          <span>
            ✪  Incompressible MHD equations are solved using pseudo-spectral method.
            <br />
            <br />
          </span>
          <span>
            ✪  Energy is injected by using a Taylor-Green flow stirring force.
            <br />
            <br />
          </span>
          <span>
            ✪  After the simulation has reached a statistical stationary state, 1,024 frames of data with 3 velocity components, pressure, 3 magnetic field and magnetic vector potential components are stored in the database.
            <br />
            <br />
          </span>
          <span>
            ✪ The Taylor-scale Reynolds number fluctuates around R<sub>λ</sub>~ 186.
            <br />
            <br />
          </span>
          <span>
            ✪  1024 timesteps are available, for time t between 0 and 2.56 (the frames are stored at every 10 time-steps of the DNS). Intermediate times can be queried using temporal-interpolation.
            <br />
            <br />
          </span>
          <span>
            ✪  A table with the spectra of the velocity, magnetic field, Elsasser variables, cross-helicity and magnetic helicity can
            be downloaded from <Link href={`${docsDownloadURL}mhd/Spectra-MHD.txt`} target="_blank" download>this text file</Link>.
            <br />
            <br />
          </span>
          <span>
            ✪  A table with the time histories of energy and dissipation, both kinetic and magnetic, as well as of magnetic and cross helicity,
            can be downloaded from <Link href={`${docsDownloadURL}mhd/TimeSeries.txt`} target="_blank" download> this text file</Link>.
            <br />
            <br />
          </span>
        </div>
      </div >
    </Styled >
  );
};