// import PropTypes from 'prop-types';

// import './button.css';

// /** Primary UI component for user interaction */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary
//     ? 'storybook-button--primary'
//     : 'storybook-button--secondary';
//   return (
//     <button
//       type='button'
//       className={['storybook-button', `storybook-button--${size}`, mode].join(
//         ' '
//       )}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   /** Is this the principal call to action on the page? */
//   primary: PropTypes.bool,
//   /** What background color to use */
//   backgroundColor: PropTypes.string,
//   /** How large should the button be? */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /** Button contents */
//   label: PropTypes.string.isRequired,
//   /** Optional click handler */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };

import styled from 'styled-components';
import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <StyledButton
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.buttonBackgroundHover || theme.buttonBackground};
  }
`;

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
