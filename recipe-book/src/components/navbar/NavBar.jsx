import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../assets/img/icon-user.svg";

// NavBar 컴포넌트
function NavBar(props) {
  return (
    <NavWrapper>
      {props.isLogin ? (
        <ul>
          <LeftLi>
            <StyledLink to="/postlist">Recipe</StyledLink>
          </LeftLi>
          <Profile>(아이디)</Profile>
        </ul>
      ) : (
        <ul>
          <LeftLi>
            <StyledLink to="/postlist">Recipe</StyledLink>
          </LeftLi>
          <RightLi>
            <StyledLink to="/Login">Login</StyledLink>
            <StyledLink to="/Join">Join</StyledLink>
          </RightLi>
        </ul>
      )}
    </NavWrapper>
  );
}

// 프로필 스타일
const Profile = styled.div`
  font-size: 18px;
  margin-right: 20px;
  color: white;
`;

// 네비게이션 바 스타일
const NavWrapper = styled.nav`
  width: 100%;
  height: 36px;
  background-color: var(--main-color);
  font-size: 24px;
  font-family: "yg-jalnan";
  padding: 8px 0px;
  line-height: 36px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`;

// 스타일된 링크
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

// 왼쪽 목록 스타일
const LeftLi = styled.li`
  margin-left: 20px;
`;

// 오른쪽 목록 스타일
const RightLi = styled.li`
  font-size: 18px;
  margin-right: 20px;
  display: flex;
  gap: 30px;
`;

export default NavBar;
