import styled from 'styled-components'

export const AdressInformation = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const HeaderAdress = styled.header`
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
    color: ${(props) => props.theme.yellowDark};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;
`

export const GridItem = styled.div``

export const FullWidthItem = styled(GridItem)`
  grid-column: 1 / span 3;
`

export const DoubleWidthItem = styled(GridItem)`
  grid-column: span 2;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${(props) => props.theme.baseInput};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.baseButton};
  ::placeholder {
    color: ${(props) => props.theme.baseText};
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const OptionalText = styled.span`
  font-family: 'Roboto Mono', sans-serif;
  font-style: italic;
  color: ${(props) => props.theme.baseLabel};
  font-size: 0.75rem;
  line-height: 1.3;

  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`
