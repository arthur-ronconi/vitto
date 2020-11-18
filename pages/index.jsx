// Add bottom navigation!!!!
import {
  Container,
  Navbar,
  NavLinks,
  NavLink,
  Button,
  Hero,
  Location,
  LocationIcon,
  LocationAddress,
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
  ContentBlock,
  Title,
  CardGroup,
  MainCard,
  MainCardIcon,
  CardUserName,
  CardUserEmail,
  CardUserPhone,
  CardIcon,
  CardTitle,
  EditButton,
  AccountCard,
  AccountCards,
  CardRow,
  CardLink,
} from "../styles";
export default function Home() {
  return (
    <div>
      <Navbar>
        <Container>
          <NavLinks>
            <NavLink href="#">
              <Button>Cardápio</Button>
            </NavLink>
            <NavLink href="#">
              <Button>Meus pedidos</Button>
            </NavLink>
            <NavLink href="#">
              <Button>Benefícios</Button>
            </NavLink>
            <NavLink href="#">
              <Button>Minha conta</Button>
            </NavLink>
          </NavLinks>
        </Container>
      </Navbar>
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
      <ContentBlock>
        <Container>
          <Title>Minha conta</Title>
          <AccountCards>
            <MainCard>
              <MainCardIcon src="/img/user-circle-light.svg" />
              <CardUserName>João Silva</CardUserName>
              <CardUserEmail>joaodasilva@gmail.com</CardUserEmail>
              <CardUserPhone>(41) 99999-9999</CardUserPhone>
              <a href="#">
                <EditButton>Editar dados</EditButton>
              </a>
            </MainCard>

            <CardGroup>
              <CardRow>
                <AccountCard>
                  <CardLink href="#">
                    <CardIcon src="/img/map-marker-alt-regular.svg" />
                    <CardTitle>Meus endereços</CardTitle>
                  </CardLink>
                </AccountCard>

                <AccountCard>
                  <CardLink href="#">
                    <CardIcon src="/img/wallet-regular.svg" />
                    <CardTitle>Pagamento</CardTitle>
                  </CardLink>
                </AccountCard>
              </CardRow>
              <CardRow>
                <AccountCard>
                  <CardLink href="#">
                    <CardIcon src="/img/life-ring-light.svg" />
                    <CardTitle>Ajuda</CardTitle>
                  </CardLink>
                </AccountCard>

                <AccountCard>
                  <CardLink href="#">
                    <CardIcon src="/img/life-ring-light.svg" />
                    <CardTitle>Sair</CardTitle>
                  </CardLink>
                </AccountCard>
              </CardRow>
            </CardGroup>
          </AccountCards>
        </Container>
      </ContentBlock>
    </div>
  );
}
