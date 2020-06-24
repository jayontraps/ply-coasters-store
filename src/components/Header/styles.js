import styled from "@emotion/styled"
import theme from "../../theme/theme"

const {
  mq: { large },
} = theme

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.isLoading ? "red" : "transparent")};
  padding: 1rem;
  padding-right: calc(120px + 3rem);
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
      width: 100%;
      max-width: 300px;
    }
  }

  .nav_toggle__btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 60px;
    height: 60px;
    &__icon {
      width: 60px;
      height: 60px;
    }

    ${large} {
      display: none;
    }
  }

  .cart_toggle__btn {
    position: absolute;
    top: 1rem;
    right: calc(60px + 2rem);
    width: 60px;
    height: 60px;
    &__icon {
      width: 60px;
      height: 60px;
    }
  }
`

export default StyledHeader
