import { FC } from 'react';
import { DrawerNav } from './drawer';


export type Option = 'datasets' | 'notebooks' | 'containers';

interface Props {
  children: any
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <DrawerNav />
      <main>{children}</main>
    </>
  )
}