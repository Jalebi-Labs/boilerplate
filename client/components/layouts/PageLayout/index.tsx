import { ReactNode } from 'react';
import { Grid } from '@chakra-ui/react';

import Navigation from './Navigation';

type Props = {
  children: ReactNode;
};

export default function PageLayout(props: Props) {
  const { children } = props;

  return (
    <Grid templateRows="auto 1fr" minHeight="100vh">
      <Navigation />

      {children}
    </Grid>
  );
}
