import styled from 'styled-components'

export const CardItemWrapper = styled.main`
  width: 16rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
  }
  > p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
    font-family: 'Roboto Mono', sans-serif;
  }
`

export const LabelCharacteristicCotainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const LabelCharacteristic = styled.p`
  background: ${(props) => props.theme.yellowLight};
  padding: 0.25rem 0.5rem;
  border: 0;
  border-radius: 9999px;
  color: ${(props) => props.theme.yellowDark};
  text-transform: uppercase;
  font-size: 0.625rem;
`

export const ProductImage = styled.img`
  width: 7.5rem;

  transform: translateY(-1.25rem);
`

export const ItemControl = styled.div`
  width: 100%;
  margin: 2rem 0 1.25rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemCost = styled.div`
  /* width: 5.625rem; */
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;

  span {
    color: ${(props) => props.theme.baseText};
    line-height: 1.3;

    &:first-child {
      margin-right: 0.2rem;
      font-size: 0.875rem;
      font-weight: bold;
      font-family: 'Roboto Mono', sans-serif;
    }
    &:last-child {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`
export const CartButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;

  padding: 0.5rem;
  background: ${(props) => props.theme.purpleDark};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.baseCard};

  :hover {
    border-radius: 6px;
    background: ${(props) => props.theme.purple};
  }
`
