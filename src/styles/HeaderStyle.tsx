import styled from 'styled-components';

export const Navigation = styled.nav`
  height: 90px;
  width: calc(100vw - (100vw - 100%));
  position: fixed;
  background-color: #e9e9e9;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  font-family: 'gmarket';
`
export const Title = styled.div`
  background-color: aliceblue;
`   

export const Menu = styled.ul`
  display: flex;
  align-items: center;
`   

export const MenuItemContainer = styled.div`
  padding-left: 38px;
`

export const MenuItems = styled.li`
  background-color: #dddddd;
  
`