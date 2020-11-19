import {
  ContentBlock,
  Container,
  Title,
  AccountCard,
  MainCard,
  MainCardIcon,
  CardUserName,
  CardUserEmail,
  CardUserPhone,
  EditButton,
  CardGroup,
  CardRow,
  AccountCards,
  CardLink,
  CardTitle,
  CardIcon,
} from "../styles";
export default function ContentBlockSection() {
  return (
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
  );
}
