import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: '10px',
        lineHeight: '24px',
        padding: '0 8px'
      }
    case 'medium':
      return {
        fontSize: `12px`,
        lineHeight: '40px',
        padding: '0 24px'
      }
    case 'large':
      return {
        fontSize: '14px',
        lineHeight: '56px',
        padding: '0 40px'
      }
    default:
      return {
        fontSize: `10px`,
        lineHeight: '40px',
        padding: '0 24px'
      }
  }
}

const color = props => {
  let color = {background: props.theme.colors.primary};

  if(props.secondary) {
    color = {
      background: props.theme.colors.secondary,

      '&:hover': {
        background: props.theme.colors.secondaryLight,
      }
    };
  }

  return color;
}

const block = props => (props.block ? {
  boxSizing: 'border-box',
  display: 'block',
  width: '100%'
} : null)

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.light};
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  display: inline-block;
  line-height: 40px;
  outline: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .3s;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    box-shadow: 0 0 4px rgba(0, 0, 0, .56), 0 4px 4px rgba(0, 0, 0, .24);
  }

  &:active {
    background: ${props => props.theme.colors.primaryDark};
    color: rgba(255, 255, 255, .24);
    box-shadow: none;
  }

  &:disabled {
    background: rgba(255, 255, 255, .24);
    color: rgba(0, 0, 0, .24);
  }

  ${color}
  ${block}
  ${size}
  ${space}
`

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  /** Size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  secondary: PropTypes.bool,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray
}

Button.defaultProps = {
  size: 'medium'
}

Button.displayName = 'Button'

export default Button