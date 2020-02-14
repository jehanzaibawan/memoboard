import Styled from 'styled-components';

const Notification = Styled.div`
  display: flex;
  position: fixed;
  z-index: 2000;
  width: 20vw;
  height: 35px;
  margin: 10px;
  padding: 5px;
  bottom: 0;
  background-color: green;
  box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
  border-radius: 10px;
  border 1px solid #fff;
  font-family: 'Actor';
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  align-items: center;
`;

export default Notification;
