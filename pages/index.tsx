import { useEffect } from "react";
import { useRouter } from "next/router";

// TODO: imp loading animation here
export default function Index() {
  const router = useRouter();

  // ON MOUNT: UI config
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    console.log(router.basePath);

    if (!router.basePath) {
      router.push('/home');
    }
  }, [router]);
  return <></>;
};
