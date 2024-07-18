
import { FC } from 'react';
import styled from 'styled-components';

import credits from 'public/docs/credits.json';


const Styled = styled.div`
  flex-grow: 1;

  .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }

`;

export const About: FC = () => {

  return (
    <Styled>
      <h1>People & Credits</h1>
      {credits.map(c =>
        <>
          <h3>{c.title}</h3>
          {c.people.map(member =>
            <p>
              ✪  {member}
            </p>
          )}
          <br />
        </>
      )}
    </Styled>
  );
};
