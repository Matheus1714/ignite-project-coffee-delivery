import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 3.5rem;
  margin-top: 5.875rem;
  margin-bottom: 6.75rem;

  justify-content: space-between;
  align-items: center;
`

export const HeaderLeft = styled.div`
  width: 36.75rem;
`

export const TitleContainer = styled.div`
  margin-top: 1rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme.baseTitle};
  }
`

export const SubtitleContianer = styled.div`
  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    line-height: 1.3;
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 1.25rem;
  grid-column-gap: 2.5rem;

  margin-top: 3.75rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
  label {
    font-size: 1rem;
    color: ${(props) => props.theme.baseText};
  }
`

const IconContianer = styled.div`
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme.yellowDark};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const CartContainer = styled(IconContianer)`
  background: ${(props) => props.theme.yellowDark};
`
export const BoxContainer = styled(IconContianer)`
  background: ${(props) => props.theme.baseText};
`
export const ClockContainer = styled(IconContianer)`
  background: ${(props) => props.theme.yellow};
`
export const CoffeeContainer = styled(IconContianer)`
  background: ${(props) => props.theme.purple};
`

export const HeaderRight = styled.div`
  width: 29.75rem;
  img {
    width: 100%;
    min-width: 10rem;
  }
`
