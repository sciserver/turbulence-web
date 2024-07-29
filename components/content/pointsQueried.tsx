import { FC, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { POINTS_QUERIED } from 'src/graphql/points';


const Styled = styled.div`
  .points {
    text-align: right;
  }
`;

export const PointsQueried: FC = () => {

  const { data } = useQuery(POINTS_QUERIED, { pollInterval: 6000 });

  const points = useMemo<number>(() => {
    if (data) {
      return data.getPointsQueried;
    }
  }, [data]);

  return <Styled>
    {points &&
      <div className="points">
        <h3> {points.toLocaleString()} points queried</h3>
      </div>
    }
  </Styled>;
};