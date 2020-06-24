import styled from "@emotion/styled"

const StyledMobileNav = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .nav_close__btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  a {
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
