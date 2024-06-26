import { FC } from 'react';
import { styled } from 'styled-components';


const Styled = styled.div`

`;

export const Citing: FC = () => {
  return (
    <Styled>
      <h2>Citing the database in your work</h2>

      The JH Turbulence Database(JHTDB) is developed as an open resource by the Johns Hopkins University, under the sponsorship of the National Science Foundation.Continued support for the database depends on demonstrable evidence of the database's value to the scientific community. We kindly request that you cite the database in your publications and presentations. The data in Johns Hopkins Turbulence Databases are made available under the Open Data Commons Attribution License (ODC-By) (http://opendatacommons.org/licenses/by/), which means it is open to use, but requires attribution. The following citations are suggested:

      <h4>For journal articles, proceedings, etc.., we suggest:</h4>
      <blockquote>
        Y.Li, E.Perlman, M.Wan, Y.Yang, C.Meneveau, R.Burns, S.Chen, A.Szalay & G.Eyink. "A public turbulence database cluster and applications to study Lagrangian evolution of velocity increments in turbulence".Journal of Turbulence 9, No. 31, 2008.

        E.Perlman, R.Burns, Y.Li, and C.Meneveau. "Data Exploration of Turbulence Simulations using a Database Cluster".Supercomputing SC07, ACM, IEEE, 2007.
      </blockquote>

      <h4>For presentations, posters, etc.., we suggest:</h4>
      <blockquote>
        Data obtained from the JHTDB at http://turbulence.pha.jhu.edu
        For articles that use the channel flow data, we suggest also including:

        J.Graham, K.Kanov, X.I.A.Yang, M.K.Lee, N.Malaya, C.C.Lalescu, R.Burns, G.Eyink, A.Szalay, R.D.Moser.and C.Meneveau: A Web Services - accessible database of turbulent channel flow and its use for testing a new integral wall model for LES.Journal of Turbulence 17(2), 181 - 215, 2016.(© Taylor & Francis, see http://www.tandfonline.com/doi/pdf/10.1080/14685248.2015.1088656)
      </blockquote>

      <h4>For articles that use the mhd flow data, we suggest also including:</h4>

      <blockquote>
        G.Eyink, E.Vishniac, C.Lalescu, H.Aluie, K.Kanov, K.Bürger, R.Burns, C.Meneveau and A.Szalay.Flux - freezing breakdown in high - conductivity magnetohydrodynamic turbulence.Nature, 497(7450), 466 - 469, 2013.
      </blockquote>

      <h4>For articles that use the mixing flow data, we suggest also including:</h4>
      <blockquote>
        D.Livescu, C.Canada, K.Kanov, R.Burns & IDIES staff, J.Pulido, "Homogeneous Buoyancy driven turbulence data set"(2014), available at http://turbulence.pha.jhu.edu/docs/README-HBDT.pdf
      </blockquote>

      <h4>For articles that use the 40963 isotropic turbulence, we suggest also including:</h4>
      <blockquote>
        P.K.Yeung, D.A.Donzis, and K.R.Sreenivasan. "Dissipation, enstrophy and pressure statistics in turbulence simulations at high Reynolds numbers ".Journal of Fluid Mechanics 700, 5 - 15, 2012.
      </blockquote>

      <h4>For articles that use the developing boundary layer data, we suggest also including:</h4>
      <blockquote>
        T.A.Zaki. "From streaks to spots and on to turbulence: exploring the dynamics of boundary layer transition".Flow, Turbulence and Combustion 91(3), 451 - 473, 2013.
      </blockquote>

      <h4>For articles that use the channel flow at Reτ = 5200 data, we suggest also including:</h4>
      <blockquote>
        Myoungkyu Lee and Robert D.Moser, "Direct numerical simulation of turbulent channel flow up to Re_tau = 5200".Journal of Fluid Mechanics 774, 395 - 415, 2015.
      </blockquote>

      <h4>For articles that use the 81923 isotropic turbulence, we suggest also including:</h4>
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
        Forced Isotropic Turbulence Dataset(Extended): https://doi.org/10.7281/T1KK98XB

        Forced MHD Turbulence Dataset: https://doi.org/10.7281/T1930RBS

        Homogeneous Buoyancy Driven Turbulence Dataset: https://doi.org/10.7281/T1VX0DPC

        Turbulent Channel Flow: https://doi.org/10.7281/T10K26QW

        Forced Isotropic Turbulence Dataset on 40963 Grid: https://doi.org/10.7281/T1DN4363

        Rotating Stratified Turbulence Dataset on 40963 Grid: https://doi.org/10.7281/T1J964JJ

        Developing Boundary Layer Dataset: https://doi.org/10.7281/T17S7KX8

        Turbulent Channel Flow at Reτ = 5200: https://doi.org/10.7281/T1PV6HJV

        Forced Isotropic Turbulence Dataset on 81923 Grid: TDB
      </blockquote>
    </Styled>
  );
}