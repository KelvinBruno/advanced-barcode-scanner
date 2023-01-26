import * as Styled from "./styles";
import { useState } from "react";
import productsList from "../../Data/database";

const SimpleScanner = () => {
  const [scannedProduct, setScannedProduct] = useState({
    name: "",
    barcode: "",
    image:
      "https://savegnagoio.vtexassets.com/arquivos/ids/360080/CERVEJAITAIPAVA350MLLATA.jpg?v=638080599656300000",
      price:0
  });
  let barcode = "";
  let interval;
  console.log(productsList);
  const handleBarcode = (scannedBarcode) => {
    const findProduct = productsList.find(
      (product) => product.barcode === scannedBarcode
    );
    if (findProduct) {
      setScannedProduct({
        name: findProduct.name,
        barcode: findProduct.barcode,
        image: findProduct.image,
        price: findProduct.price,
      });
    }
  };
  document.addEventListener("keydown", function (evt) {
    if (interval) clearInterval(interval);
    if (evt.code === "Enter") {
      if (barcode) handleBarcode(barcode);
      barcode = "";
      return;
    }
    if (evt.key !== "Shift") barcode += evt.key;
    interval = setInterval(() => (barcode = ""), 20);
  });
  return (
    <Styled.ScannerDiv>
      <Styled.ScannerImage src={scannedProduct.image} />

      <div>
        <Styled.ScannerSpan1>Código:</Styled.ScannerSpan1>{" "}
        <Styled.ScannerSpan2>{scannedProduct.barcode}</Styled.ScannerSpan2>
      </div>
      <div>
        <Styled.ScannerSpan1>Produto:</Styled.ScannerSpan1>{" "}
        <Styled.ScannerSpan3>{scannedProduct.name}</Styled.ScannerSpan3>
      </div>
      <div>
        <Styled.ScannerSpan1>Preço:</Styled.ScannerSpan1>{" "}
        <Styled.ScannerSpan4>R$ {scannedProduct.price.toFixed(2)}</Styled.ScannerSpan4>
      </div>
      <div id="last-barcode"></div>
    </Styled.ScannerDiv>
  );
};

export default SimpleScanner;
