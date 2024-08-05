import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { AppContext } from 'context';
import { BreadCrumbParent, BreadCrumbsStyled } from 'components/common/breadcrumbs';


const Styled = styled.div`
  iframe {
    border: none;
    height: 100%;
    width: 90%;
  }

  p {
    width: 80%
  }

`;

export const Vortex: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption(router.asPath.split('/')[1]);
  }, []);

  const breadCrumbsParents: BreadCrumbParent[] = [
    { name: 'Visualizations', url: '/visualizations' }
  ];

  return (
    <Styled>
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Vortex" />
      <h2>Vortices within vortices</h2>
      <h3>Hierarchical nature of vortex tubes in turbulence</h3>
      <p>
        In this work we investigate the classical idea that smaller structures in turbulent flows,
        while engaged in their own internal dynamics, are advected by the larger structures.
        They are not advected undistorted, however. We see instead that the small scale structures
        are sheared and twisted by the larger scales. This illuminates the basic mechanisms of the
        turbulent cascade, here in the Re-lambda = 430 isotropic turbulence dataset from DNS using
        1024x1024x1024 grid-points. For more details, see : Kai Bürger et al. (2012), <Link href="https://arxiv.org/abs/1210.3325" target="_blank">arXiv:1210.3325</Link>.
      </p>
      <br />
      <iframe
        src="https://www.youtube.com/embed/gDiF3a_UXSs?si=kyTMU5tsrCgZ41rx"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Styled>
  );
};