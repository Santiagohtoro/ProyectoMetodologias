import {
  createTheme,
  filledInputClasses,
  inputLabelClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses
} from '@mui/material';
import { color, lineHeight, textAlign } from '@mui/system';

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents(config) {
  const { palette } = config;

  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none'
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)'
          }
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '32px 24px 16px'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        },
        '#nprogress': {
          pointerEvents: 'none'
        },
        '#nprogress .bar': {
          backgroundColor: palette.primary.main,
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000
        },
        '.productName': {
          width: '200px',
        },
        '.productDescription': {
          display: 'box',
          width: '400px',

        },
        '.productImage': {
          height: '250px',
          borderRadius: '15px',
          left: '20px',
        },
        '.textCant': {
          width: '30%',
          textAlign: 'center',
          borderRadius: '5px',
          borderStyle: 'solid',
          borderColor: '#115A14',
          color: 'black',
          fontWeight: 'bold',
        },
        //Controles de Pop Up
        '.openPopUp': {
          position: 'fixed',
          bottom: '10%',
          right: '5%',
          zIndex: 1,
          padding: '20px 20px',
          lineHeight: '10px',
          border: 'none',
          color: '#fff',
          background: '#115A14',
          borderRadius: '5px',
          fontSize: '1em',
          cursor: 'pointer',
          transition: '.3s ease all',
          textAlign: 'center',
        },
        '.openPopUp:hover' : {
          backgroundColor: '#1B9B21',
          opacity:'0.9',
        },
        '.overlay': {
          background: 'rgba(0,0,0,.3)',
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          zIndex: '1',
          visibility: 'hidden',
        },
        '.overlay.active': {
          visibility: 'visible',
        },
        '.popUp': {
          backgroundColor: '#F8F8F8',
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)',
	        borderRadius: '3px',
	        fontFamily: 'Montserrat, sans-serif',
          transition: '.3s ease all',
	        transform: 'scale(0.7)',
	        opacity: 0,
          fontSize: '16px',
	        lineHeight: '16px',
	        display: 'block',
	        textAlign: 'center',
	        transition: '.3s ease all',
	        color: '#BBBBBB',
        },
        '.closePopUp': {
          fontSize: '16px',
          lineHeight: '16px',
          display: 'block',
          textAlign: 'right',
          transition: '.3s ease all',
          color: '#BBBBBB',
        },
        '.BtnExit': {
          padding: '10px 10px',
          lineHeight: '10px',
          border: 'none',
          color: '#fff',
          background: '#115A14',
          borderRadius: '5px',
          fontSize: '1em',
          cursor: 'pointer',
          transition: '.3s ease all',
          textAlign: 'center'
        },
        '.BtnExit:hover' : {
          backgroundColor: '#1B9B21',
          opacity:'0.9',
        },
        //animaciones
        '.popUp.active': {
          transform: 'scale(1)',
          opacity: '1',
        },
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
          '&::placeholder': {
            color: palette.text.secondary
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 1,
          overflow: 'hidden',
          borderColor: palette.neutral[200],
          transition: muiTheme.transitions.create([
            'border-color',
            'box-shadow'
          ]),
          '&:hover': {
            backgroundColor: palette.action.hover
          },
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: 'transparent'
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            borderColor: palette.primary.main,
            boxShadow: `${palette.primary.main} 0 0 0 2px`
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: palette.error.main,
            boxShadow: `${palette.error.main} 0 0 0 2px`
          }
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.action.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.neutral[200]
            }
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.primary.main,
              boxShadow: `${palette.primary.main} 0 0 0 2px`
            }
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.error.main,
              boxShadow: `${palette.error.main} 0 0 0 2px`
            }
          }
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
        },
        notchedOutline: {
          borderColor: palette.neutral[200],
          transition: muiTheme.transitions.create([
            'border-color',
            'box-shadow'
          ])
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          [`&.${inputLabelClasses.filled}`]: {
            transform: 'translate(12px, 18px) scale(1)'
          },
          [`&.${inputLabelClasses.shrink}`]: {
            [`&.${inputLabelClasses.standard}`]: {
              transform: 'translate(0, -1.5px) scale(0.85)'
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: 'translate(12px, 6px) scale(0.85)'
            },
            [`&.${inputLabelClasses.outlined}`]: {
              transform: 'translate(14px, -9px) scale(0.85)'
            }
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
          padding: '15px 16px'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
            backgroundColor: palette.neutral[50],
            color: palette.neutral[700],
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase'
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled'
      }
    }
  };
}
