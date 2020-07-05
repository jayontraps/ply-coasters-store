import styled from "@emotion/styled"

const StyledContainer = styled.div`
  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }
  .background_page {
    width: 100vw;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }

  .title_block {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 3rem;
    }
  }

  .item {
    max-width: 300px;
    margin-right: 5%;
    &:last-of-type {
      margin-right: 0;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
  }

  .item_image {
    width: 300px;
    padding-top: 100%;
    background-color: ${({ theme }) => theme.colors.slate};
  }

  a {
    text-decoration: none;
  }

  .item_title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  .scroll_down {
    position: absolute;
    bottom: 15%;
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: white;
    }
  }
`

export default StyledContainer
