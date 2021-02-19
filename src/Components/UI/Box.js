import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { spacing } from '../../helpers/styles';

const getBaseStyles = ({ theme, fullWidth }) => ({
  fontSize: theme.font.body,
  borderRadius: spacing(0.5),
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#ddd',
  boxShadow: `2px 5px 5px #fcfcfc`,
  backgroundColor: '#fdfdfd',
  outlineWidth: 0,
  margin: spacing(1, 0),
  padding: 0,
  width: fullWidth ? '100%' : 'auto',
  '> *': {
    padding: spacing(2),
    width: '100%',
    height: '100%',
    display: 'block',
  },
});

export const Box = styled.div((props) => getBaseStyles(props));
const StyledListItem = styled.li((props) => getBaseStyles(props));
export const ListItemButton = styled.button((props) => getBaseStyles(props));

export const ListItem = ({ children, linkTo }) => {
  const Wrapper = linkTo ? Link : 'span';
  return (
    <StyledListItem>
      <Wrapper to={linkTo}>{children}</Wrapper>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  children: PropTypes.element,
  linkTo: PropTypes.string,
};
