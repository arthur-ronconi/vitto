import { BottomNavigation, BottomNavLink, BottomNavIcon } from "../styles";
export default function BottomNavigationSection() {
  return (
    <BottomNavigation>
      <BottomNavLink href="#">
        <BottomNavIcon src="/img/home-alt-regular.svg"></BottomNavIcon>
      </BottomNavLink>
      <BottomNavLink href="#">
        <BottomNavIcon src="/img/receipt-regular.svg"></BottomNavIcon>
      </BottomNavLink>
      <BottomNavLink href="#">
        <BottomNavIcon src="/img/gift-regular.svg"></BottomNavIcon>
      </BottomNavLink>
      <BottomNavLink href="#">
        <BottomNavIcon src="/img/user-regular.svg"></BottomNavIcon>
      </BottomNavLink>
    </BottomNavigation>
  );
}
