import styled from "styled-components";

interface Props {
  colorFont: boolean;
}

export const Main = styled.main<Props>`
  color: ${(props) => (props.colorFont ? "black" : "white")};
`;

export const Container = styled.section`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;

export const HeaderEdit = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;

  border-bottom: 1px solid #d3d3d3;

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 4px;
  }
  p {
    font-weight: 500;
    font-size: 0.8rem;
  }

  button {
    padding: 8px 30px;

    background-color: transparent;
    border: 1px solid #828282;
    border-radius: 12px;
    color: #828282;
    margin-left: 30px;

    font-weight: 500;

    cursor: pointer;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin: 10px 0 0 0;
    }
  }
`;

export const FieldOption = styled.article`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 0px 30px;
  border-bottom: 1px solid #bdbdbd;

  height: 70px;

  div:nth-child(2) {
    display: initial;
  }

  div:nth-child(1) {
    height: 100%;
    display: flex;
    align-items: center;

    min-width: 70px;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;

    width: 100%;
    box-sizing: border-box;

    overflow: hidden;
  }

  span {
    font-weight: 500;
    font-size: 0.8rem;
    color: #bdbdbd;
  }

  p {
    font-weight: 500;
    font-size: 15px;

    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    height: 55px;
    width: 55px;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 425px) {
    div:nth-child(2) {
      text-align: end;
      position: relative;
    }

    img {
      position: absolute;
      right: 0;
    }
  }
`;

//

export const ContainerEditUser = styled.main`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;

  @media (max-width: 345px) {
    max-width: 100%;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  font-weight: 400;
  font-size: 16px;
  color: #2d9cdb;

  margin-bottom: 24px;

  cursor: pointer;

  img {
    height: 13px;
    margin-right: 10px;
  }
`;

export const ContainerEdit = styled.form`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px 40px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;

  @media (max-width: 370px) {
    padding: 15px 18px;
  }
`;

export const ContentHeader = styled(HeaderEdit)`
  display: initial;
  border-bottom: none;

  padding-left: 0;
`;

export const ImgOption = styled.div`
  width: 72px;
  height: 72px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  img:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;

    object-fit: cover;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.07);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;

      background-color: black;
    }
  }

  img:nth-child(2) {
    position: relative;
    width: 20px;
    z-index: 3;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;

    opacity: 0;
    cursor: pointer;
  }
`;

export const OptionInput = styled.label<Props>`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  font-size: 13px;
  font-weight: 500;

  input,
  textarea {
    width: 100%;

    border: 1px solid #828282;
    border-radius: 12px;
    padding: 15px 17px;

    margin-top: 4px;
    resize: none;

    background-color: transparent;

    color: ${(props) => (props.colorFont ? "black" : "white")};

    &:focus {
      outline: 0;
      border: 1px solid #525252;
    }
  }
`;

export const ButtonSubmit = styled.button`
  width: fit-content;

  padding: 8px 25px;
  border: none;
  border-radius: 8px;
  background-color: #2f80ed;

  font-weight: 500;
  font-size: 14px;
  color: white;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
