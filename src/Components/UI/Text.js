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
  fontSize: theme.font.size.h2,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.body,
}));

export const H3 = styled.h3(({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size.h3,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.body,
}));

export const H4 = styled.h4(({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size.h4,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.body,
}));

export const Paragraph = styled.p(({ padding, margin }) => ({
  margin,
  padding,
}));
