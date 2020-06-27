import styled from 'styled-components';

export const MapPost = styled.div`
  justify-content: center;
  align-items: center;
  border: solid 1px ${(props) => props.theme.colors.textColor};
`;
export const NewsContent = styled.div`
	width: 100%;
	height: 100%;
  color: ${(props) => props.theme.colors.textColor}
	background: ${(props) => props.theme.colors.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
