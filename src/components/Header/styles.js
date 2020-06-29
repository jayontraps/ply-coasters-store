import styled from "@emotion/styled"
import theme from "../../theme/theme"

const {
  mq: { large },
} = theme

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 60px;
  background-color: ${(props) =>
    props.isLoading ? "red" : props.theme.colors.slate};
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .branding {
    &__logo {
      width: 100%;
      height: auto;
    }

    &__link {
      position: absolute;
      top: 1rem;
      left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 300px;
    }
  }

  .header_btn {
    appearance: none;
    border: 0;
    outline: none;
    width: calc(60px - 2rem);
    height: calc(60px - 2rem);
    background-color: transparent;
    svg {
      fill: whitesmoke;
    }
  }

  .nav_toggle__btn {
    ${large} {
      display: none;
    }
  }

  .cart_toggle__btn {
  }

  .btn_group {
    width: 100px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export default StyledHeader
