import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;
  div{
    background: #FFF;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.green-summary{
      background-color: var(--green);
      color: #FFF;
    }
  }
`