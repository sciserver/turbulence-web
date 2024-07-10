import { Layout } from "components/common/layout";
import { WebServices } from "components/content/databaseAccess/webServices";

// TODO: imp loading animation here
export default function WebServicesPage() {
  return <>
    <Layout>
      <WebServices />
    </Layout>
  </>;
};
