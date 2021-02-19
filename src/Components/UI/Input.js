import styled from 'styled-components';
import { spacing } from '../../helpers/styles';

export const SearchInput = styled.input(({ theme }) => ({
  fontSize: theme.font.size.h1,
  padding: spacing(0.5, 2),
  borderRadius: 0,
  borderStyle: 'none',
  borderBottomStyle: 'solid',
  outlineWidth: 0,
}));
