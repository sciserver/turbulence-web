import { Layout } from 'components/common/layout';
import { MatlabAnalysisTools } from 'components/content/databaseAccess/matlabAnalysisTools';

// TODO: imp loading animation here
export default function DatabaseAccessPage() {
  return <>
    <Layout>
      <MatlabAnalysisTools />
    </Layout>
  </>;
};
