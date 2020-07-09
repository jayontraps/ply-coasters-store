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
    props.isHomePage
      ? props.belowTheFold
        ? props.theme.colors.darkSlate
        : "transparent"
      : props.theme.colors.darkSlate};

  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color, 150ms ease-in;

  ${large} {
    padding: 1rem 4rem 1rem 1rem;
  }

  .branding {
    &__logo {
      width: 100%;
      height: auto;
    }

    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
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
    ${large} {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .nav_toggle__btn {
    ${large} {
      display: none;
    }
  }

  .cart_toggle__btn {
    position: relative;
    padding: 0.5rem;
    .cart_toggle__quantity {
      position: absolute;
      top: -8px;
      right: -8px;
      color: white;
      padding: 0.15rem;
      width: 1.2rem;
      height: 1.2rem;
      font-size: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.active};
      border-radius: 50%;
    }
  }

  .btn_group {
    width: 90px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    ${large} {
      width: calc(60px - 2rem);
      position: absolute;
      right: 1rem;
    }
  }
`

export default StyledHeader
