
import { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { AppContext } from 'context';


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

  return (
    <Styled>
      <h1>People & Credits</h1>
      <br />


      <h3>Faculty</h3>
      Randal Burns (Computer Science)
      <br />
      <br />
      Gregory Eyink (Applied Mathematics & Statistics)
      <br />
      <br />
      Charles Meneveau (Mechanical Engineering)
      <br />
      <br />
      Alex Szalay (Physics and Astronomy)
      <br />
      <br />
      Tamer Zaki (Mechanical Engineering)
      <br />
      <br />
      Ethan Vishniac (Physics and Astronomy)
      <br />
      <br />
      Thomas Haine (Earth & Planetary Sciences)
      <br />
      <br />

      <h3>Senior Researchers</h3>
      Gerard Lemson (Physics and Astronomy)
      <br />
      <br />

      <h3>Postdocs</h3>

      Hanxun Yao (Mechanical Engineering)
      <br />
      <br />

      <h3>Graduate students</h3>

      Ariel Lubonja (Computer Science)
      <br />
      <br />
      Yue Hao (Mechanical Engineering)
      <br />
      <br />

      <h3>Collaborators</h3>

      Shiyi Chen (South University of Science and Technology, China)
      <br />
      <br />
      MyoungKyu Lee (Univ. Houston)
      <br />
      <br />
      Nicholas Malaya (Univ. Texas, Austin)
      <br />
      <br />
      Robert D. Moser (Univ. Texas, Austin)
      <br />
      <br />
      Jesus Pulido (Los Alamos)
      <br />
      <br />
      Daniel Livescu (Los Alamos)
      <br />
      <br />
      P.K. Yeung (Georgia Tech.)
      <br />
      <br />
      Annick Pouquet (NCAR)
      <br />
      <br />
      Duane Rosenberg (NOAA)
      <br />
      <br />
      Edward Patton (NCAR)
      <br />
      <br />
      Peter Sullivan (NCAR)
      <br />
      <br />

      <h3>Visitors</h3>

      Edo Frederix (Eindhoven Univ., visiting student summer 2011)
      <br />
      <br />
      Kai Buerger (Technical Univ. Muenchen, visiting student, summer 2011)
      <br />
      <br />
      José-Hugo Elsas (Universidade Federal do Rio de Janeiro, visiting PhD student 2016-2017)
      <br />
      <br />
      German Saltar (Univ. of Puerto Rico, visiting student summer 2019)
      <br />
      <br />

      <h3>Technical Staff</h3>
      Victor Paul
      <br />
      <br />
      Jan VandenBerg (+ sadly passed away in 2021)
      <br />
      <br />
      Suzanne Werner
      <br />
      <br />
      Dmitry Medvedev
      <br />
      <br />
      Juliana Jaime
      <br />
      <br />

      <h3>Former group members</h3>
      Hussein Aluie
      <br />
      <br />
      Tamás Budavári (Physics and Astronomy)
      <br />
      <br />
      Laurent Chevillard
      <br />
      <br />
      Ed Givelberg (Physics and Astronomy)
      <br />
      <br />
      Jason Graham
      <br />
      <br />
      Kalin Kanov (Computer Science)
      <br />
      <br />
      Cristian Constantin Lalescu (Applied Math and Statistics)
      <br />
      <br />
      Yi Li
      <br />
      <br />
      Eric Perlman
      <br />
      <br />
      Minping Wan
      <br />
      <br />
      Xiaodan Wang
      <br />
      <br />
      Alainna White
      <br />
      <br />
      Michael Wilczek (Mechanical Engineering)
      <br />
      <br />
      Zuoli Xiao
      <br />
      <br />
      Yunke Yang
      <br />
      <br />
      Huidan Yu
      <br />
      <br />
      Kung Yang
      <br />
      <br />
      Stephen Hamilton (Computer Science)
      <br />
      <br />
      Perry Johnson (Mechanical Engineering)
      <br />
      <br />
      Jin Lee (Mechanical Engineering)
      <br />
      <br />
      Mohammad Danish (Mechanical Engineering)
      <br />
      <br />
      Rohit Ravoori (Computer Science)
      <br />
      <br />
      Akshat Gupta
      Zhao Wu
      Mengze Wang

    </Styled>
  );
};
