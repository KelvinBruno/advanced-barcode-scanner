import * as Styled from "./styles";
import SimpleScanner from "../../Components/Scanner";

const ScanningPage = () => {
  return (
    <>
      <Styled.ScanningPageMain>
        <Styled.ScanningPageTitle>
          Scanner de código de barras
        </Styled.ScanningPageTitle>
        <SimpleScanner />
      </Styled.ScanningPageMain>
    </>
  );
};
export default ScanningPage;
