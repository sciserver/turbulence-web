import { FC } from 'react';
import { styled } from 'styled-components';
import { Button, Card, CardActions, CardContent, Chip, Grid } from '@mui/material';


const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 450px;
  max-width: 550px;
  margin-right: 30px;
  margin-bottom: 30px;  

  .actions {
    display: flex;
    justify-content: flex-end;
  }
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px 0px, rgba(0, 0, 0, 0.14) 0px 8px 10px 0px, rgba(0, 0, 0, 0.12) 0px 3px 14px 0px;
  }
`;

export type CardLayout = {
  title: string
  type: string
  description: string
  onClick: () => void
}

export const CardStyled: FC<CardLayout> = ({ title, type, description, onClick }) => {
  return (
    <StyledCard onClick={onClick} >
      <CardContent>
        <h3>{title} </h3>
        <Chip size="small" className="tag" label={type} variant="outlined" color="secondary" />
        <p>
          {description}
        </p>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
};