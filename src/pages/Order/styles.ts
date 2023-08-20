import styled from 'styled-components'

export const FormCotainer = styled.form`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 2rem;
`

const BaseTitleCardOrder = styled.div`
  > h1 {
    font-size: 1.125rem;
    line-height: 1.3;
    font-weight: bold;
    margin-bottom: 0.9375rem;
  }
`

export const AdditionalInformation = styled(BaseTitleCardOrder)``

export const CardOrder = styled(BaseTitleCardOrder)``

export const CardOrderContainer = styled.div`
  width: 28rem;
  padding: 2.5rem;

  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px 6px 44px;
`

export const ListOrder = styled.div``

export const OrderItem = styled.div``

export const CostContainer = styled.div``

export const ButtonSubmitOrder = styled.button`
  outline: none;
  border: none;

  width: 100%;
  border-radius: 6px;
  padding: 0.75rem;

  background: ${(prosp) => prosp.theme.yellow};

  font-family: 'Roboto Mono', sans-serif;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`
