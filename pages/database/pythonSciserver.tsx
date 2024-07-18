import { Layout } from 'components/common/layout';
import { PythonSciserver } from 'components/content/databaseAccess/pythonSciserver';

// TODO: imp loading animation here
export default function WebServicesPage() {
  return <>
    <Layout>
      <PythonSciserver />
    </Layout>
  </>;
};
