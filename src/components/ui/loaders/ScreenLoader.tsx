import { BounceLoader } from "react-spinners";
import Page from "../page/Page";

export default function ScreenLoader() {
  return (
    <Page>
      <div className="w-full h-full flex justify-center items-center">
        <BounceLoader color="#a56baf" size={200} />
      </div>
    </Page>
  );
}
