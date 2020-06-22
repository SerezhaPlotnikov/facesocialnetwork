import styled from 'styled-components';

export const ThemeTest = styled.button`
	background: ${(props) => props.theme.colors.buttonBackground};
	color: ${(props) => props.theme.colors.buttonColor};
`;

export const MainTheme = styled.div`
	background: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.textColor};
`;
