import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';

import { docsDownloadURL } from 'pages/_app';


const Styled = styled.div`

  p, blockquote {
    width: 85%;
  }
  a {
    word-break: break-all;
  }
`;

export const Citing: FC = () => {
  return (
    <Styled>
      <h1>Citing the database in your work</h1>

      <p>
        The <strong>JH Turbulence Database </strong>(JHTDB) is developed as an open resource by the Johns Hopkins University,
        under the sponsorship of the National Science Foundation. Continued support for the database depends
        on demonstrable evidence of the database's value to the scientific community. Hence, we kindly request that
        you cite the database in your publications and presentations. The data in Johns Hopkins Turbulence Databases
        are made available under the <Link href="http://opendatacommons.org/licenses/by/" target="_blank">Open Data Commons Attribution License(ODC-By)</Link>,
        which means it is open to use, but requires attribution.
      </p>

      <h3>The following citations are suggested.</h3>

      <h4>For journal articles, proceedings, etc.., we suggest:</h4>
      <blockquote>
        Y.Li, E.Perlman, M.Wan, Y.Yang, C.Meneveau, R.Burns, S.Chen, A.Szalay & G.Eyink. "A public turbulence
        database cluster and applications to study Lagrangian evolution of velocity increments in turbulence".
        Journal of Turbulence 9, No. 31, 2008.

        E.Perlman, R.Burns, Y.Li, and C.Meneveau. "Data Exploration of Turbulence Simulations using a Database Cluster".
        Supercomputing SC07, ACM, IEEE, 2007.
      </blockquote>

      <h4>For presentations, posters, etc.., we suggest:</h4>
      <blockquote>
        Data obtained from the JHTDB at http://turbulence.idies.jhu.edu
      </blockquote>

      <h4>For articles that use the channel flow data, we suggest also including:</h4>
      <blockquote>
        J.Graham, K.Kanov, X.I.A.Yang, M.K.Lee, N.Malaya, C.C.Lalescu, R.Burns, G.Eyink, A.Szalay, R.D.Moser.and C.Meneveau:
        <Link href={`${docsDownloadURL}Grahametal-JoT-2016-preprint.pdf`} target="_blank">A Web Services - accessible
          database of turbulent channel flow and its use for testing a new integral wall model for LES</Link>.
        Journal of Turbulence 17(2), 181 - 215, 2016.(© Taylor & Francis, see <Link href="http://www.tandfonline.com/doi/pdf/10.1080/14685248.2015.1088656" target="_blank">http://www.tandfonline.com/doi/pdf/10.1080/14685248.2015.1088656</Link>)
      </blockquote>

      <h4>For articles that use the mhd flow data, we suggest also including:</h4>

      <blockquote>
        G.Eyink, E.Vishniac, C.Lalescu, H.Aluie, K.Kanov, K.Bürger, R.Burns, C.Meneveau and A.Szalay. <Link href="http://www.nature.com/nature/journal/v497/n7450/full/nature12128.html" target="_blank">Flux - freezing breakdown in high - conductivity magnetohydrodynamic turbulence</Link>.
        Nature, 497(7450), 466 - 469, 2013.
      </blockquote>

      <h4>For articles that use the mixing flow data, we suggest also including:</h4>
      <blockquote>
        D.Livescu, C.Canada, K.Kanov, R.Burns & IDIES staff, J.Pulido, "Homogeneous Buoyancy driven turbulence data set"(2014),
        available at <Link href={`${docsDownloadURL}hbdt/README-HBDT.pdf`} target="_blank"> http://turbulence.idies.jhu.edu/docs/hbdt/README-HBDT.pdf</Link>
      </blockquote>

      <h4>For articles that use the 4096<sup>3</sup> isotropic turbulence, we suggest also including:</h4>
      <blockquote>
        P.K.Yeung, D.A.Donzis, and K.R.Sreenivasan. "Dissipation, enstrophy and pressure statistics in turbulence simulations at high Reynolds numbers ".Journal of Fluid Mechanics 700, 5 - 15, 2012.
      </blockquote>

      <h4>For articles that use the developing boundary layer data, we suggest also including:</h4>
      <blockquote>
        T.A.Zaki. "From streaks to spots and on to turbulence: exploring the dynamics of boundary layer transition".Flow, Turbulence and Combustion 91(3), 451 - 473, 2013.
      </blockquote>

      <h4>For articles that use the channel flow at Re<sub>τ</sub> = 5200 data, we suggest also including:</h4>
      <blockquote>
        Myoungkyu Lee and Robert D.Moser, "Direct numerical simulation of turbulent channel flow up to Re_tau = 5200".Journal of Fluid Mechanics 774, 395 - 415, 2015.
      </blockquote>

      <h4>For articles that use the 8192<sup>3</sup> isotropic turbulence, we suggest also including:</h4>
      <blockquote>
        For snapshots 0 - 4: P.K.Yeung, X.M.Zhai, and K.R.Sreenivasan. "Extreme events in computational turbulence".Proceedings of the National Academy of Sciences 112, 12633 - 12638, 2015.

        For snapshots 5: P.K.Yeung, K.R.Sreenivasan, and S.B.Pope. "Effects of finite spatial and temporal resolution on extreme events in direct numerical simulations of incompressible isotropic turbulence".Physical Review Fluids 3, 064603, 2018.
      </blockquote>

      <h4>For articles that use the Lagrangian tracking GetPosition function, we suggest also including:</h4>
      <blockquote>
        H.Yu, K.Kanov, E.Perlman, J.Graham, E.Frederix, R.Burns, A.Szalay, G.Eyink, and C.Meneveau. "Studying Lagrangian dynamics of turbulence using on-demand fluid particle tracking in a public turbulence database".Journal of Turbulence 13, No. 12, 2012.
      </blockquote>

      <h4>In addition to the published papers mentioned above, each dataset has a specific DOI:</h4>
      <blockquote>
        Forced Isotropic Turbulence Dataset(Extended): <Link href="https://doi.org/10.7281/T1KK98XB" target="_blank">https://doi.org/10.7281/T1KK98XB</Link>
      </blockquote>
      <blockquote>
        Forced MHD Turbulence Dataset: <Link href="https://doi.org/10.7281/T1930RBS" target="_blank">https://doi.org/10.7281/T1930RBS</Link>
      </blockquote>
      <blockquote>
        Homogeneous Buoyancy Driven Turbulence Dataset: <Link href="https://doi.org/10.7281/T1VX0DPC" target="_blank">https://doi.org/10.7281/T1VX0DPC</Link>
      </blockquote>
      <blockquote>
        Turbulent Channel Flow: <Link href="https://doi.org/10.7281/T10K26QW" target="_blank">https://doi.org/10.7281/T10K26QW</Link>
      </blockquote>
      <blockquote>
        Forced Isotropic Turbulence Dataset on 4096<sup>3</sup> Grid: <Link href="https://doi.org/10.7281/T1DN4363" target="_blank">https://doi.org/10.7281/T1DN4363</Link>
      </blockquote>
      <blockquote>
        Rotating Stratified Turbulence Dataset on 4096<sup>3</sup> Grid: <Link href="https://doi.org/10.7281/T1J964JJ" target="_blank">https://doi.org/10.7281/T1J964JJ</Link>
      </blockquote>
      <blockquote>
        Developing Boundary Layer Dataset: <Link href="https://doi.org/10.7281/T17S7KX8" target="_blank">https://doi.org/10.7281/T17S7KX8</Link>
      </blockquote>
      <blockquote>
        Turbulent Channel Flow at Re<sub>τ</sub> = 5200: <Link href="https://doi.org/10.7281/T1PV6HJV" target="_blank">https://doi.org/10.7281/T1PV6HJV</Link>
      </blockquote>
      <blockquote>
        Forced Isotropic Turbulence Dataset on 8192<sup>3</sup> Grid: TDB
      </blockquote>
    </Styled>
  );
};