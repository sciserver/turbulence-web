import { FC, useContext, useEffect } from 'react';
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

export const Smoke: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Smoke" />
      <h2>Evolution of three material surfaces in a snapshot of isotropic turbulence</h2>
      <p>
        A velocity field in a snapshot of the Re<sub>λ</sub> = 430 isotropic turbulence
        DNS dataset is used to advect three originally parallel material surfaces.
        The wrinkling of the material surface reflects the spatially complex multiscale velocity field.
        (Animation produced by Dr. K. Bürger).
      </p>
      <br />
      <iframe
        src="https://www.youtube.com/embed/nG1xz6MR4Ks?si=baAJFikpd1Lt5j62"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Styled>
  );
};