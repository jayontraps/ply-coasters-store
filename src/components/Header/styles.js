import styled from "@emotion/styled"

const StyledHeader = styled.header`
  background-color: ${props => (props.isLoading ? "red" : "gainsboro")};
  padding: 1rem 100px 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .branding {
    &__logo {
    }

    &__link {
      display: block;
      width: 300px;
      height: 80px;
      background-color: gray;
    }
  }

  .cart_toggle {
    position: absolute;
    top: 1rem;
    right: 0;
    width: 60px;
    height: 60px;
    &__icon {
      width: 60px;
      height: 60px;
    }
  }
`

export default StyledHeader
