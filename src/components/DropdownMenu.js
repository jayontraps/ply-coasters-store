import React, { useState } from "react"
import styled from "@emotion/styled"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const StyledDropdownMenu = styled.div`
  min-width: 110px;
  position: relative;
  .dropdown__header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    &:hover {
      cursor: pointer;
    }
  }
  .dropdown__title {
    font-size: 1rem;
    user-select: none;
  }
  .dropdown__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .dropdown__content {
    position: absolute;
    min-width: 200px;
    top: 100%;
    left: -1rem;
    z-index: 9999;
    background-color: ${({ theme }) => theme.colors.bgColorLight};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding: 1rem;
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        a {
          color: ${({ theme }) => theme.colors.primary};
          display: inline-block;
          text-decoration: none;
          padding-bottom: 0.25rem;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`

const DropdownMenu = ({ title, children }) => {
  const [show, setShow] = useState(false)

  return (
    <StyledDropdownMenu>
      <div onClick={() => setShow(!show)} className="dropdown__header">
        <h5 className="dropdown__title">{title}</h5>
        <span className="dropdown__icon">
          <ExpandMoreIcon />
        </span>
      </div>
      {show && <div className="dropdown__content">{children}</div>}
    </StyledDropdownMenu>
  )
}

export default DropdownMenu
