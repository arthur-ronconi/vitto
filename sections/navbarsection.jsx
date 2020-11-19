import { Navbar, NavLink, NavLinks, Button, Container } from "../styles";
export default function NavbarSection() {
  return (
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
  );
}
