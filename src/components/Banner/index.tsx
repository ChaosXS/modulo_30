import styled from 'styled-components'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const BannerContainer = styled.div<{ $bg: string }>`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$bg});
  position: relative;
  color: #fff;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px 0;
  }

  h3 {
    font-size: 32px;
    font-weight: 100;
    text-transform: capitalize;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
  }
`

const Banner = ({ capa, tipo, titulo }: Props) => (
  <BannerContainer $bg={capa}>
    <div className="container">
      <h3>{tipo}</h3>
      <h2>{titulo}</h2>
    </div>
  </BannerContainer>
)

export default Banner
