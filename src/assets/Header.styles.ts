import { css } from "../../styled-system/css";

export const header = css({
  pos: 'fixed',
  top: '2.9rem',
  w: '100%',
  zIndex: 999,
  
  sm: {
    h: '7.8rem',
    left: '0',
  },
  
  md: {
    h: '6.4rem',
  },
});

export const container = css({
  display: 'flex',
  h: '100%',
  alignItems: 'center',
  pos: 'relative'
})

export const mail = css({
  fontFamily: 'montserrat',
  fontWeight: 500,
  fontSize: '1.5rem',
  pos: 'absolute',
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
  left: '3.5rem',
  opacity: .8,

  sm: {
    display: 'none',
  },
  md: {
    display: 'unset',
  },
});

export const navigator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  m: '0 auto',
  h: '100%',
  rounded: '55555px',
  bg: '#ffffffe3',
  boxShadow: '#15151a12 0px 2px 24px',
  // bg: '#d9d9d97d',
  backdropFilter: 'blur(14px)',
  border: '1px solid',
  borderColor: '#82828290',
  minW: '275px',

  sm: {
    w: '80%',
    gap: '1.5rem',
    fontSize: '14px',
  },
  md: {
    w: '54rem',
    gap: '4rem',
    fontSize: '1.8rem',
  },
});

export const menuWrapper = css({
  display:'flex',
  alignItems: 'center'
})

export const slash = css({
  fontFamily: 'darker',
  fontSize: '1.8rem',
  opacity: .7,
  
  sm: {
    ml: '1.5rem',
  },
  md: {
    ml: '3.5rem',
  }
})
