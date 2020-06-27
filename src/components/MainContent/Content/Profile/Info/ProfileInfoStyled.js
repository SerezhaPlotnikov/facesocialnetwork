import styled from 'styled-components';

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.cardBackground};
  border-bottom: 1px solid ${(props) => props.theme.colors.cardBackground};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colors.cardBackground};
  border-left: 1px solid ${(props) => props.theme.colors.cardBackground};
`;

export const InfoButton = styled.button`
  width: 100px;
  height: 100px;
`;
export const PhotoUsers = styled.img`
  width: 150px;
  height: 150px;
`;
