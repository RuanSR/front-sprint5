import { useState, useEffect, useContext, MouseEventHandler } from "react";
import MessageContext from "../../../contexts/MessageContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../../../interfaces/IProduct";
import BoxSize from "./BoxSize";

const ProductContainer: React.FC<IProduct> = ({sku, name, image, price})  =>{
  const ProductContainerBox = styled.div`
    display: flex;
    padding: 25px;
  `;

  const ProductSection = styled.section`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      max-width: 90%;
      max-height: 90%;
    }
  `;

  const ProductDescription = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  `;

  const SelectSize = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
    }
  `;

  const ContainerBuy = styled.article`
    width: 70%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    p {
      padding-top: 5px;
      color: #d0403a;
      font-weight: 500;
      font-size: 1.4375rem;
    }

    div {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  const BtnDefault = styled.button`
    border: 0px;
    width: 95%;
    height: 35px;
    margin: 5px;
    color: #fff;
    font-weight: bold;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  `;

  const BtnSuccess = styled(BtnDefault)`
    cursor: pointer;
    text-transform: uppercase;
    background-color: #008844;
  `;

  const BtnCancel = styled(BtnDefault)`
    background-color: #d10015df;
  `;

  let productSizeDefault = 6;
  const [selectedIndex, setSelectedSize] = useState(productSizeDefault);
  const [productSize, setProductSize] = useState(productSizeDefault);

  const { setMessage } = useContext(MessageContext);

  let sizes = [4, 6, 8, 10];
  let index = sizes.indexOf(productSizeDefault);

  useEffect(() => {
    setSelectedSize(index);
  }, []);

  const changeSize = (e: React.MouseEvent<HTMLInputElement>) =>{
    let button = e.target as HTMLInputElement;
    let size = button.value as unknown as number;
    index = sizes.indexOf(size);
    setSelectedSize(index);
    setProductSize(size);
  }

  return (
    <ProductContainerBox>
      <ProductSection>
        <img src={image} />
      </ProductSection>
      <ProductDescription>
        <h1>{name}</h1>
        <SelectSize>
          <h6>Selecionar o tamanho: {productSize}</h6>
          <ul>
            {sizes.map((s, i) => (
              <BoxSize
                key={i}
                size={s}
                selected={i == selectedIndex ? "selected_box" : ""}
                changeSize={changeSize}
              />
            ))}
          </ul>
        </SelectSize>
        <ContainerBuy>
          <p>R$ {price}</p>
          <div>
            <Link className="link-box" to="/">
              <BtnSuccess
                onClick={() => {
                  setMessage("Produto adicionado a sacola");
                }}
              >
                Adicionar a sacola
              </BtnSuccess>
            </Link>
            <Link className="link-box" to="/">
              <BtnCancel>Cancelar</BtnCancel>
            </Link>
          </div>
        </ContainerBuy>
      </ProductDescription>
    </ProductContainerBox>
  );
}

export default ProductContainer;
