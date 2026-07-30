import styled from 'styled-components'

export const Container = styled.main`
  padding: 40px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.li`
  background-color: #e66767;
  color: #ffebd9;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: #e66767;
  color: #ffebd9;
  padding: 32px;
  display: flex;
  gap: 24px;
  max-width: 1024px;
  width: 100%;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
  }
`
