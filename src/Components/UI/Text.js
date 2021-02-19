import styled from 'styled-components';

export const PageTitle = styled.h1(({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size.pageTitle,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.body,
}));

export const H1 = styled.h1(({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size.h1,
  fontWeight: theme.font.weight.normal,
  color: theme.colors.body,
}));

export const H2 = styled.h2(({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.fontSizes.h2,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.body,
}));

export const Paragraph = styled.p(({ padding, margin }) => ({
  margin,
  padding,
}));
