import styled from "@emotion/styled"

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.isLoading ? "red" : "transparent")};
  padding: 1rem 100px 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .branding {
    position: relative;
    &__logo {
      width: 100%;
      height: auto;
    }

    &__link {
      display: block;
      width: 300px;
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
