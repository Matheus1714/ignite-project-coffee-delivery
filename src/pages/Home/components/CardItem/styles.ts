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
  display: flex;
  justify-content: space-between;
`

export const PriceText = styled.div`
  display: flex;
  gap: 0.1rem;
  p {
    color: ${(props) => props.theme.baseText};
    font-weight: 400;
    font-family: 'Roboto Mono', sans-serif;
    font-size: 1.5rem;
  }
  > p {
    font-size: 0.875rem;
  }
`
