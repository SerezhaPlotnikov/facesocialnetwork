import styled from 'styled-components';

export const NewMess = styled.div`
  display: flex;
  justify-content: center;
`;
export const MessageContent = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
