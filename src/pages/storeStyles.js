import styled from "@emotion/styled"

const StyledContainer = styled.div`
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

  .collections {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;

    .item {
      margin-right: 5%;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .item {
    width: 33.33%;
    max-width: 250px;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .item_image {
    width: 100%;
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
