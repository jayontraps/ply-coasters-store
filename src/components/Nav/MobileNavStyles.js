import styled from "@emotion/styled"

const StyledMobileNav = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .nav_close__btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  a {
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 1rem;
    margin-right: 0.5rem;
    border-bottom: 2px solid transparent;

    &.current-page {
      border-bottom: 2px solid #fff;
    }
  }
`

export default StyledMobileNav
