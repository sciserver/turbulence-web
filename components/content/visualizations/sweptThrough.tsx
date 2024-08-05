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

export const SweptThrough: FC = () => {

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
      <BreadCrumbsStyled parents={breadCrumbsParents} componentName="Swept Through" />
      <h2>Velocity and vorticity</h2>
      <h3>Contours plots on a plane sweeping through turbulence</h3>
      <p>
        Velocity color contour maps in the Re<sub>λ</sub> = 430 isotropic turbulence DNS dataset
        on a 2D plane being swept across the domain at a fixed time. Later portions of the
        video show vorticity contours dominated by small-scale vortices.
      </p>
      <br />
      <iframe
        src="https://www.youtube.com/embed/FOasEmzwOqs?si=pLrATqoCEZT6LkhU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p className="caption">Video courtesy of YouTube user <Link href="https://www.youtube.com/channel/UC-Ms0OtoIkpwt8T_dm8Srcw" target="_blank">GummiF</Link>.</p>
    </Styled>
  );
};