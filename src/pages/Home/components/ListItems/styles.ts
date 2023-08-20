import styled from 'styled-components'

export const ListItemsContianer = styled.div`
  display: grid;
`

export const TitleList = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  h1 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 2rem;
    line-height: 1.3;
  }
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`
