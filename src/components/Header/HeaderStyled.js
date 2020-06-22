import styled from 'styled-components';
const Container = styled.div`
	width: 100%;
	height: 42px;
	margin: 0 0 auto;
	display: flex;
	justify-content: center;
	background: ${(props) => props.theme.colors.background};
	/* border-bottom: 1px solid ${(props) =>
		props.theme.colors.buttonBackground}; */
	color: ${(props) => props.theme.colors.buttonBackground};
`;
export default Container;
