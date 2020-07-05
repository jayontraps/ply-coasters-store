import styled from "@emotion/styled"

const StyledCart = styled.div`
  padding: 5rem 2rem 2rem 2rem;
  background-color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .cart__header {
    position: absolute;
    top: 0;
    left: 2rem;
    width: calc(100% - 4rem);
    height: 4rem;
    padding: 1rem 2rem 2rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.slate};
  }
  .cart__line_items {
  }
  .cart__footer {
  }
`

export default StyledCart
