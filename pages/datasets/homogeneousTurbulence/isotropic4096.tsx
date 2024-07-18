import { Layout } from 'components/common/layout';
import { Isotropic4096Turbulence } from 'components/content/documentation/datasets/homogeneousTurubulence/isotropic4096';

// TODO: imp loading animation here
export default function IsotropicTurbulenceDatasetPage() {
  return <>
    <Layout>
      <Isotropic4096Turbulence />
    </Layout>
  </>;
};
