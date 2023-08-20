import styled from 'styled-components'

export const PaymentMethod = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`

export const HeaderPayment = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  p {
    line-height: 1.3;
    font-family: 'Roboto Mono', sans-serif;
    :first-child {
      font-size: 1rem;
      color: ${(props) => props.theme.baseSubtitle};
    }
    :last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseText};
    }
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0.75rem;
`

export const ButtonPayment = styled.button`
  background: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  border: none;
  outline: none;

  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  gap: 0.75rem;

  text-transform: uppercase;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 0.75rem;
  color: ${(props) => props.theme.baseText};
  line-height: 1.6;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
