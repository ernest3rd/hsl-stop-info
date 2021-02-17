import styled from 'styled-components';

export const SearchInput = styled.input(({ theme }) => ({
  fontSize: theme.font.size.h1,
  padding: '0.5em',
  borderRadius: 0,
  borderStyle: 'none',
  borderBottomStyle: 'solid',
  outlineWidth: 0,
}));
