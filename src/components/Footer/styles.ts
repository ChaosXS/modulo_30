import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #ffebd9;
  padding: 40px 0;
  margin-top: 120px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  p {
    color: #e66767;
    font-size: 10px;
    max-width: 480px;
    margin-top: 80px;
    line-height: 12px;
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin-top: 32px;

  img {
    width: 24px;
    height: 24px;
  }
`
