import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Chip, Typography } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';

import mainImage from 'public/JHTDB2_snapshots.png';

const Styled = styled.div`
  .content {
    display: flex;
  }

  .download-links {
    margin-right: 10px;
  }
`;

export const MatlabAnalysisTools: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Database Access', url: '/database' }
  ]

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Matlab Analysis Tools" />
      <div className="content">
        <div>
          <br />
          <Typography variant="h4">Using JHTDB Matlab Analysis Tools</Typography>
          <br />
          <Typography variant="h5">Download</Typography>
          <p>
            <strong>Matlab Code:</strong> Turbmat-Tools-0.3.2
          </p>
          <Chip
            className="download-links"
            component="a"
            href="https://turbulence.pha.jhu.edu/download/Turbmat-Tools-0.3.2.tar.gz"
            target="_blank"
            label="Download tar.gz here"
            icon={<DownloadIcon fontSize="small" />}
          />
          <Chip
            component="a"
            href="https://turbulence.pha.jhu.edu/download/Turbmat-Tools-0.3.2.zip"
            target="_blank"
            label="Download zip here"
            icon={<DownloadIcon fontSize="small" />}
          />
          <p>
            This downloads a directory which contains a set of Matlab analysis tools. Included are several ready to use Matlab scripts that provide functionality for plotting/animating velocity and vorticity fields, computing and plotting longitudinal energy spectra, and computing PDF's of velocity, pressure, and velocity increments. Each script will prompt the user for any required input information using GUI boxes so no modifications are required by the user.
          </p>
          <p>
            Note that a copy of <Link href="/database/webServices/matlab">Turbmat</Link> is required for Turbmat-Tools to run.
          </p>
          <p>
            Please see the README file for more information.
          </p>
        </div>
        <div>
          <Image src={mainImage} width={200} height={200} alt="Turbulence figure 1" />
        </div>
      </div>
    </Styled>
  );
};