// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import React from 'react';

// /** Primary UI component for page header */
// export const Header = ({ backgroundColor, size, title, ...props }) => {
//   return (
//     <StyledHeader
//       className={['storybook-header', `storybook-header--${size}`].join(' ')}
//       style={backgroundColor ? { backgroundColor } : undefined}
//       {...props}
//     >
//       {title}
//     </StyledHeader>
//   );
// };

// const StyledHeader = styled.header`
//   background-color: ${({ theme, backgroundColor }) =>
//     backgroundColor || theme.headerBackground};
//   color: ${({ theme }) => theme.headerText};
//   padding: 20px;
//   font-size: ${({ size }) =>
//     size === 'large' ? '2rem' : size === 'small' ? '1rem' : '1.5rem'};
//   text-align: center;
//   border-bottom: 2px solid ${({ theme }) => theme.text};
// `;

// Header.propTypes = {
//   /** What background color to use */
//   backgroundColor: PropTypes.string,
//   /** How large should the header be? */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /** Header title */
//   title: PropTypes.string.isRequired,
// };

// Header.defaultProps = {
//   backgroundColor: null,
//   size: 'medium',
// };

import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

/** Primary UI component for page header */
export const Header = ({
  backgroundColor,
  size,
  title,
  bold,
  centered,
  uppercase,
  fontWeight,
  ...props
}) => {
  return (
    <StyledHeader
      className={['storybook-header', `storybook-header--${size}`].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      bold={bold}
      centered={centered}
      uppercase={uppercase}
      fontWeight={fontWeight}
      {...props}
    >
      {title}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.headerBackground};
  color: ${({ theme }) => theme.headerText};
  padding: 20px;
  font-size: ${({ size }) =>
    size === 'large' ? '2rem' : size === 'small' ? '1rem' : '1.5rem'};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  font-weight: ${({ bold, fontWeight }) =>
    bold ? 'bold' : fontWeight || 'normal'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  border-bottom: 2px solid ${({ theme }) => theme.text};
`;

Header.propTypes = {
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the header be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Header title */
  title: PropTypes.string.isRequired,
  /** Should the text be bold? */
  bold: PropTypes.bool,
  /** Should the text be centered? */
  centered: PropTypes.bool,
  /** Should the text be uppercase? */
  uppercase: PropTypes.bool,
  /** Custom font weight */
  fontWeight: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  bold: false,
  centered: false,
  uppercase: false,
  fontWeight: 'normal',
};
