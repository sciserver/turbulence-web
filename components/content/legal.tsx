
import { FC } from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  p {
    width: 80%;
  }
`;

export const Legal: FC = () => {

  return (
    <Styled>
      <h1>Disclaimer</h1>
      <br />
      <p>
        While many efforts have been made to ensure that these data are accurate and reliable
        within the limits of the current state of the art, neither JHU nor any other party
        involved in creating, producing or delivering the website shall be liable for any damages
        arising out of users' access to, or use of, the website or web services. Users use the
        website and web services at their own risk. JHU does not warrant that the functional
        aspects of the website will be uninterrupted or error free, and may make changes to the site without notice.
        <br />
        Last update: 7/5/2024 6:59:40 PM
      </p>

    </Styled>
  );
};
