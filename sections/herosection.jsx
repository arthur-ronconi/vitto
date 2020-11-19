import {
  Hero,
  Container,
  Location,
  LocationAddress,
  LocationIcon,
  Card,
  CardBody,
  Avatar,
  Info,
  InfoName,
  InfoDescription,
  Tags,
  Tag,
  TagIcon,
  IsOpen,
} from "../styles";
export default function HeroSection() {
  return (
    <Hero>
      <Container>
        <Location>
          <LocationIcon>
            <img src="/img/marker.svg" alt="" />
          </LocationIcon>
          <LocationAddress>Rua Roberto de Souza, 12</LocationAddress>
        </Location>
        <Card>
          <CardBody>
            <Avatar src="/img/logo.png"></Avatar>
            <Info>
              <div>
                <InfoName>Vitto Burritos</InfoName>
                <InfoDescription>
                  Rua Roberto de Souza, 12 - Curitiba, PR.
                </InfoDescription>
              </div>
              <Tags>
                <Tag>
                  <TagIcon src="/img/clock-regular.svg" />
                  30-40 min
                </Tag>
                <Tag>
                  <TagIcon src="/img/star-solid.svg" />
                  4.5
                </Tag>
                <Tag className="display">Cashback: 15%</Tag>
                <Tag>Entrega: R$ 8,00</Tag>
                <Tag>Pedido mínimo: R$ 20,00</Tag>
              </Tags>
            </Info>
          </CardBody>
          <IsOpen>Aberto agora</IsOpen>
        </Card>
      </Container>
    </Hero>
  );
}
