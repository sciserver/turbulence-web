import { FC } from 'react';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';
import { Breadcrumbs, Chip } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const StyledBreadcrumbs = styled(Breadcrumbs)`
  .MuiChip-root {
    text-transform: capitalize;
  }
`;

interface Props {
  parent: string
  parentURL: string
  componentName: string
}

export const BreadCrumbsStyled: FC<Props> = ({ parent, parentURL, componentName }) => {

  const router = useRouter();

  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <Chip
        component="a"
        variant="outlined"
        onClick={() => router.push('/home')}
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />
      <Chip
        variant="outlined"
        component="a"
        onClick={() => router.push(`/${parentURL}`)}
        label={parent} />
      <Chip
        variant="outlined"
        label={componentName}
      />
    </StyledBreadcrumbs>
  );
};