import { extendTheme, useColorModeValue } from '@chakra-ui/react'

const activeLabelStyles = {
  transform: 'scale(0.7) translateY(-8px) translateX(3px) '
}

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? '#f5f5f5' : '#1A202C',
        color: props.colorMode === 'light' ? 'black' : 'white'
      },
      a: {
        // color: props.colorMode === 'light' ? 'red' : 'blue.300',
        color: 'blue.300',
        _hover: {
          textDecoration: 'underline'
        }
      },
      p: {
        // color: props.colorMode === 'black' ? 'white' : 'black'
        color: 'black'
      },
      div: {
        // bg: props.colorMode === 'light' ? '#f5f5f5' : '#1A202C',
        textColor: 'black'
      }
    })
  },
  breakpoints: {
    sm: '320px',
    md: '700px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px'
  },
  colors: {
    primary: '#0095f6',
    primaryHover: 'rgba(0,149,246,.7)',
    bgColor: '#FAFAFA',
    textSecondary: 'rgb(115, 115, 115)',
    borderColor: 'rgb(225, 225, 225)'
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, serif',
    mono: 'Menlo, monospace'
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label': {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'transparent',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            }
          }
        }
      }
    },
    Button: {
      variants: {
        outline: {
          fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
        }
      },
      defaultProps: {
        colorScheme: 'blue'
      }
    },
    Link: {
      variants: {
        primary: ({ colorScheme = 'blue' }) => ({
          color: `${colorScheme}.400`,
          _hover: {
            color: `${colorScheme}.500`,
            textDecoration: 'none'
          }
        })
      },
      defaultProps: {
        variant: 'primary'
      }
    }
  }
})

export default theme
