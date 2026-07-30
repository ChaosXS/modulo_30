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
  max-width: 360px;
  width: 100%;
  padding: 32px 16px;
  color: #ffebd9;
  overflow-y: auto;

  ul {
    list-style: none;
  }

  .empty-text {
    font-size: 14px;
    text-align: center;
    line-height: 22px;
  }

  h3 {
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
  background-color: #ffebd9;
  color: #e66767;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
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

export const Button = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  width: 100%;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 8px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    background-color: #ffebd9;
    border: 1px solid #ffebd9;
    height: 32px;
    padding: 0 8px;
    width: 100%;
    color: #4b4b4b;
    font-weight: bold;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`
