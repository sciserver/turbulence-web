import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../context';
import Link from 'next/link';

const Styled = styled.div`
  span {
    padding: 50px 0px;
  }
`;

export const Publications: FC = () => {

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('documentation');
  }, []);

  return (
    <Styled>
      <h2>Publications and abstracts</h2>
      <span>
        ●   Yi Li, Eric Perlman, Minping Wan, Yunke Yang, Charles Meneveau, Randal Burns, Shiyi Chen, Alexander Szalay, and Gregory Eyink. A public turbulence database cluster and applications to study Lagrangian evolution of velocity increments in turbulence. Journal of Turbulence, 9:N31, 2008. [ <Link href="http://dx.doi.org/10.1080/14685240802376389">DOI</Link> | <Link href="http://arxiv.org/abs/0804.1703">arXiv</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	Huidan Yu, Kalin Kanov, Eric Perlman, Jason Graham, Edo Frederix, Randal Burns, Alexander Szalay, Gregory Eyink, and Charles Meneveau. Studying Lagrangian dynamics of turbulence using on-demand fluid particle tracking in a public turbulence database. Journal of Turbulence, 13:N12, 2012. [ <Link href="http://dx.doi.org/10.1080/14685248.2012.674643">DOI</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	Eric Perlman, Randal Burns, Yi Li, and Charles Meneveau. Data exploration of turbulence simulations using a database cluster. In Proceedings of the 2007 ACM/IEEE conference on Supercomputing - SC '07, page 1, New York, New York, USA, 2007. ACM Press. [ <Link href="http://dx.doi.org/10.1145/1362622.1362654">DOI</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	J. Graham, K. Kanov, X. I. A. Yang, M. Lee, N. Malaya, C. C. Lalescu, R. Burns, G. Eyink, A. Szalay, R. D. Moser, and C. Meneveau. A Web services accessible database of turbulent channel flow and its use for testing a new integral wall model for LES. Journal of Turbulence, 17(2):181-215, 2016. [ <Link href="http://dx.doi.org/10.1080/14685248.2015.1088656">DOI</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	Xiaodan Wang, Eric Perlman, Randal Burns, Tanu Malik, Tamas Budavári, Charles Meneveau, and Alexander Szalay. JAWS: Job-Aware Workload Scheduling for the Exploration of Turbulence Simulations. In 2010 ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis, pages 1-11. IEEE, 2010. [ <Link href="http://dx.doi.org/10.1109/SC.2010.31">DOI</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	Kalin Kanov, Eric Perlman, Randal Burns, Yanif Ahmad, and Alexander Szalay. I/O streaming evaluation of batch queries for data-intensive computational turbulence. In Proceedings of 2011 International Conference for High Performance Computing, Networking, Storage and Analysis on - SC '11, page 1, New York, New York, USA, 2011. ACM Press. [ <Link href="http://dx.doi.org/10.1145/2063384.2063423">DOI</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	Kalin Kanov, Randal Burns, Greg Eyink, Charles Meneveau, and Alexander Szalay. Data-intensive spatial filtering in large numerical simulation datasets. In 2012 International Conference for High Performance Computing, Networking, Storage and Analysis, pages 1-9. IEEE, 2012. [ <Link href="http://dx.doi.org/10.1109/SC.2012.41">DOI</Link> ]
        <br />
        <br />
      </span>
      <span>
        ● 	Zhao Wu, Jin Lee, Charles Meneveau, and Tamer Zaki. Application of a self-organizing map to identify the turbulent-boundary-layer interface in a transitional flow. Physical Review Fluids, 4(2):023902, 2019. [ <Link href="http://dx.doi.org/10.1103/PhysRevFluids.4.023902">DOI</Link> ]
        <br />
        <br />
      </span>
      <h2>Sample publications of Turbulence Database usage</h2>
    </Styled>
  );
};