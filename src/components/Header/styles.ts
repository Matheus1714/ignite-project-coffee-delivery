import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Logo = styled.img`
  height: 2.5rem;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const CartBox = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme.yellowLight};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.yellow};
  }
`

export const LocationBox = styled.div`
  height: 2.375rem;
  width: 8.9375rem;
  border-radius: 6px;
  background: ${(props) => props.theme.purpleLight};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  p {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.purpleDark};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`
