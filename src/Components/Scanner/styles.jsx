import styled from "styled-components";

export const ScannerDiv = styled.div`
  width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 400px;
`;

export const ScannerImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;
export const ScannerSpan1 = styled.span`
  font-size: 15px;
  color: #191919;
`;
export const ScannerSpan2 = styled(ScannerSpan1)`
  color: #931f1d;
`;
export const ScannerSpan3 = styled(ScannerSpan1)`
  color: #3066be;
`;
export const ScannerSpan4 = styled(ScannerSpan1)`
  color: #FFF159;
`