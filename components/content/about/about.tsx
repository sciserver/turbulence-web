
import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AppContext } from '../../../context';
import { CardLayout, CardStyled } from '../../common/card';


const Styled = styled.div`
  flex-grow: 1;

  .card-list {
    display: flex;  
    flex-wrap: wrap;

    margin-top: 20px;
  }

`;

export const About: FC = () => {

  const router = useRouter();

  const { setTabOption } = useContext(AppContext);

  // ON MOUNT: UI config
  useEffect(() => {
    setTabOption('about');
  }, []);

  return (
    <Styled>
      <h1>People and credits:</h1>
      <br />


      <h3>Faculty:</h3>

      Randal Burns (Computer Science)
      <br />
      Gregory Eyink (Applied Mathematics & Statistics)
      <br />
      Charles Meneveau (Mechanical Engineering)
      <br />
      Alex Szalay (Physics and Astronomy)
      <br />
      Tamer Zaki (Mechanical Engineering)
      <br />
      Ethan Vishniac (Physics and Astronomy)
      <br />
      <br />

      <h3>Graduate students:</h3>

      Akshat Gupta (Applied Math and Statistics)
      <br />
      Mengze Wang (Mechanical Engineering)
      <br />
      Yue Hao (Mechanical Engineering)
      <br />
      <br />

      <h3>Postdocs and senior research associates:</h3>

      Zhao Wu (Mechanical Engineering)
      <br />
      Gerard Lemson (Physics and Astronomy)
      <br />
      <br />

      <h3>External collaborators:</h3>

      Shiyi Chen (South University of Science and Technology, China)
      <br />
      MyoungKyu Lee
      <br />
      Nicholas Malaya
      <br />
      Robert D. Moser
      <br />
      Jesus Pulido
      <br />
      Daniel Livescu
      <br />
      P.K. Yeung
      <br />
      Annick Pouquet (NCAR)
      <br />
      Duane Rosenberg (NOAA)
      <br />
      <br />

      <h3>Visitors:</h3>

      Edo Frederix (Eindhoven Univ., visiting student summer 2011)
      <br />
      Kai Buerger (Technical Univ. Muenchen, visiting student, summer 2011)
      <br />
      José-Hugo Elsas (Universidade Federal do Rio de Janeiro, visiting PhD student 2016-2017)
      <br />
      German Saltar (Univ. of Puerto Rico, visiting student summer 2019)
      <br />
      <br />

      <h3>Technical Staff:</h3>

      Victor Paul
      <br />
      Jan VandenBerg (+ sadly passed away in 2021)
      <br />
      Suzanne Werner
      <br />
      <br />

      <h3>Former group members:</h3>

      Hussein Aluie
      <br />
      Tamás Budavári (Physics and Astronomy)
      <br />
      Laurent Chevillard
      <br />
      Ed Givelberg (Physics and Astronomy)
      <br />
      Jason Graham
      <br />
      Kalin Kanov (Computer Science)
      <br />
      Cristian Constantin Lalescu (Applied Math and Statistics)
      <br />
      Yi Li
      <br />
      Eric Perlman
      <br />
      Minping Wan
      <br />
      Xiaodan Wang
      <br />
      Alainna White
      <br />
      Michael Wilczek (Mechanical Engineering)
      <br />
      Zuoli Xiao
      <br />
      Yunke Yang
      <br />
      Huidan Yu
      <br />
      Kung Yang
      <br />
      Stephen Hamilton (Computer Science)
      <br />
      Perry Johnson (Mechanical Engineering)
      <br />
      Jin Lee (Mechanical Engineering)
      <br />
      Mohammad Danish (Mechanical Engineering)
      <br />
      Rohit Ravoori (Computer Science)
      <br />

    </Styled>
  );
};
