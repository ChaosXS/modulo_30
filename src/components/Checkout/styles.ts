import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  color: #ffebd9;
  overflow-y: scroll;

  .button-checkout {
    background-color: #ffebd9;
    color: #e66767;
    width: 100%;
    border: none;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 16px;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: #ffebd9;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const ConfirmationContainer = styled.div`
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  background-color: #ffebd9;
  color: #e66767;
  margin-bottom: 16px;
  padding: 8px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
  }
`
