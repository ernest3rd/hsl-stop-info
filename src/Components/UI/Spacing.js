import styled from "styled-components";
import { spacing } from 'helpers/styles';

export const Padding = styled.div(({all, top, right, bottom, left}) => ({
  padding: all ? spacing(all) : spacing(top, right, bottom, left),
}));

export const Margin = styled.div(({all, top, right, bottom, left}) => ({
  margin: all ? spacing(all) : spacing(top, right, bottom, left),
}));