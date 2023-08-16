import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: calc(100% - 20rem);
  margin: 0 10rem;

  @media (max-width: 768px) {
    width: calc(100% - 10%);
    margin: 0 5%;
  }
`
