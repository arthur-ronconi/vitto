import styled from "styled-components";
import { media } from "./breakpoints";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${media.sm}) {
    width: ${media.sm};
  }
  @media (min-width: ${media.md}) {
    width: ${media.md};
  }
  @media (min-width: ${media.lg}) {
    width: ${media.lg};
  }
  @media (min-width: ${media.xl}) {
    width: ${media.xl};
  }
`;
export const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 4rem;
  align-items: center;
  background: transparent;
  display: none;
  @media (min-width: ${media.lg}) {
    display: flex;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const NavLink = styled.a`
  margin: 0 0.5rem;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.125rem;
  width: 7.375rem;
  background-color: #ffffff99;
  &:hover {
    background-color: #ffffff;
  }
  font-size: 0.875rem;
  border-radius: 0.125rem;
`;

export const Hero = styled.div`
  background-image: url("/img/burrito-01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 18.75rem;
  padding-top: 6rem;
  display: none;
  @media (min-width: ${media.lg}) {
    display: block;
  }
`;

export const Location = styled.div`
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 2.5rem;
  margin-bottom: 2rem;
`;
export const LocationIcon = styled.div`
  background-color: #000;
  opacity: 0.45;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;
export const LocationAddress = styled.div`
  background-color: #000;
  opacity: 0.45;
  height: 2.5rem;
  padding: 0 1rem;
  margin-left: 1rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: 300;
  font-size: 1rem;
`;
export const Card = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 2rem;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.img`
  height: 150px;
  width: 150px;
`;
export const Info = styled.div`
  font-family: "Lato", sans-serif;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InfoName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  line-height: 39px;
`;
export const InfoDescription = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 19px;
  color: #999999;
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  line-height: 17px;
  padding: 0.5rem;
  margin: 0 0.25rem;
  &:first-child {
    margin-left: 0;
  }
  background-color: #f2f2f2;
  color: #999999;
  &.display {
    font-weight: 900;
    color: #ffffff;
    background-color: #65c6b0;
  }
`;

export const TagIcon = styled.img`
  margin-right: 0.5rem;
  width: 13px;
  height: 13px;
`;

export const IsOpen = styled.div`
  display: inline-block;
  position: absolute;
  top: 2rem;
  right: 2rem;
  font: normal normal 900 14px/17px Lato;
  letter-spacing: 0px;
  color: #65c6b0;
  padding: 0.5rem 1rem;
  border: 2px solid #65c6b0;
`;

export const ContentBlock = styled.div`
  padding-top: 6rem;
  margin-top: 2rem;
`;
export const Title = styled.div`
  font: normal normal normal 25px/29px Rubik;
  color: #222222;
  margin-bottom: 1rem;
  display: none;
  @media (min-width: ${media.lg}) {
    display: block;
  }
`;
export const CardGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0 0 0;
  @media (min-width: ${media.lg}) {
    margin: 0 0 0 1rem;
  }
`;
export const MainCard = styled(Card)`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  @media (min-width: ${media.lg}) {
    margin: 0 1rem 0 0;
  }
`;
export const MainCardIcon = styled.img`
  margin-bottom: 1rem;
`;
export const CardUserName = styled.div`
  font: normal normal 600 20px/24px Rubik;
  color: #999999;
`;
export const CardUserEmail = styled.div`
  font: normal normal 300 16px/19px Rubik;
  color: #999999;
`;
export const CardUserPhone = styled.div`
  font: normal normal 300 16px/18px Rubik;
  color: #999999;
`;
export const CardIcon = styled.img`
  margin-bottom: 1rem;
`;
export const CardTitle = styled.div``;
export const EditButton = styled.div`
  font: normal normal 300 14px/17px Rubik;
  color: #0099ff;
  text-transform: uppercase;
  margin-top: 0.5rem;
  padding: 1rem;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const AccountCards = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${media.lg}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const AccountCard = styled(Card)`
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin: 0 0.5rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  justify-content: center;
  align-items: center;
  font: normal normal 300 14px/17px Lato;
  color: #999999;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0.5rem 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardLink = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const BottomNavigation = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px #00000029;
  justify-content: space-around;
  align-items: center;
  @media (min-width: ${media.lg}) {
    display: none;
  }
`;
export const BottomNavLink = styled.a``;
export const BottomNavIcon = styled.img``;
