import { Layout } from "components/common/layout";
import { MatlabLocal } from "components/content/databaseAccess/matlabLocal";

// TODO: imp loading animation here
export default function WebServicesPage() {
  return <>
    <Layout>
      <MatlabLocal />
    </Layout>
  </>;
};
