import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  max-width: 1120px;
  button {
    padding: 0 2rem;
    height: 3rem;
    font-size: 1rem;
    color: white;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;
    background: linear-gradient(
        var(--green),
        var(--blue-light)
    );
    &:hover {
      filter: brightness(0.9);
    }
  }
`;