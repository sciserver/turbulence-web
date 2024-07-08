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

export type BreadCrumbParent = {
  name: string
  url: string
}

interface Props {
  parents: Array<BreadCrumbParent>
  componentName: string
}

export const BreadCrumbsStyled: FC<Props> = ({ parents, componentName }) => {

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
      {parents.map(p =>
        <Chip
          variant="outlined"
          component="a"
          onClick={() => router.push(`/${p.url}`)}
          label={p.name} />
      )}
      <Chip
        variant="outlined"
        label={componentName}
      />
    </StyledBreadcrumbs>
  );
};