import { FC } from 'react';
import { styled } from 'styled-components';
import { Button, Card, CardActions, CardContent, CardMedia, Chip } from '@mui/material';


const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 1em;
  margin-bottom: 1.5em;  
  
  @media only screen and (min-width: 600px) {
    min-width: 450px;
    max-width: 550px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 250px;
  }
    
    .actions {
      display: flex;
      justify-content: flex-end;
    }
      
    .media {
      @media only screen and (min-width: 600px) {
        height: 140px; 
        width: 550px;
      }
      @media only screen and (max-width: 600px) {
        height: 140px; 
        width: 250;
      }
  }
  
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px 0px, rgba(0, 0, 0, 0.14) 0px 8px 10px 0px, rgba(0, 0, 0, 0.12) 0px 3px 14px 0px;
  }
`;

export type CardLayout = {
  title: string
  onClick: () => void
  description?: string
  type?: string
  subtitle?: string
  mediaSource?: string
}

export const CardStyled: FC<CardLayout> = ({ title, onClick, description, type, mediaSource, subtitle }) => {

  return (
    <StyledCard onClick={onClick} >
      {mediaSource &&
        <CardMedia
          className="media"
          image={mediaSource}
        />
      }
      <CardContent>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle &&
          <h5 dangerouslySetInnerHTML={{ __html: subtitle }} />
        }
        {type &&
          <Chip size="small" className="tag" label={type} variant="outlined" color="secondary" />
        }
        {description &&
          <p dangerouslySetInnerHTML={{ __html: description }} />
        }
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
};