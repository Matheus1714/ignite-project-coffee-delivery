import styled from 'styled-components'

export const ItemQuantity = styled.div`
  background: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  padding: 0 0.5rem;
  height: 100%;
  width: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-align: center;

  span {
    width: 1.25rem;
    color: ${(props) => props.theme.baseTitle};
    font-family: 'Roboto Mono', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(props) => props.theme.purple};
    :hover {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`
