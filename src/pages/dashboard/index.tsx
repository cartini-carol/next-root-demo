import Layout from "components/layout";
import { useAtom } from "jotai";
import moment from "moment";
import { useLayoutEffect, useRef } from "react";
import timeAtom from "store/timeAtom";

const DashboardPage = () => {
  const workerRef = useRef<Worker>();

  const [now, setNow] = useAtom(timeAtom);

  useLayoutEffect(() => {
    workerRef.current = new Worker(
      new URL("../../../worker.ts", import.meta.url)
    );
    workerRef.current.postMessage(1000);
    workerRef.current.onmessage = (event: MessageEvent<number>) => {
      console.log(`WebWorker Response => ${event.data}`);
      setNow(Date.now());

      return () => {
        workerRef.current.terminate();
      };
    };
  }, []);

  return (
    <>
      <p> dashboard {moment(now).format("YYYY-MM-DD HH:mm")}</p>
    </>
  );
};

export default DashboardPage;

DashboardPage.Layout = Layout;
