// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { FC, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), { ssr: false });

import { POINTS_QUERIED } from 'src/graphql/points';


const Styled = styled.div`
  .points {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    gap: 15px;
  }

  .label {
    font-size: 20px;
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
        <AnimatedNumbers
          includeComma
          locale="en-US"
          animateToNumber={points}
          className="points-font"
          transitions={() => ({
            type: 'spring',
            duration: 1
          })}
          fontStyle={{
            fontSize: 20,
            fontFamily: 'Roboto Slab',
            fontWeight: 600
          }}
        />
        <h3 className="label">points queried</h3>
      </div>
    }
  </Styled>;
};