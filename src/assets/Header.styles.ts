import { css } from "../../styled-system/css";

export const header = css({
  pos: 'fixed',
  top: '2.9rem',
  w: '100%',
  zIndex: 999,
  
  sm: {
    h: '7.8rem',
    left: '0',
    // transform: 'unset !',
  },
  
  md: {
    h: '6.4rem',
    // left: '50%',
    // transform: 'translateX(-50%) !',
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
  // pos: 'absolute',
  // left: '50%',
  // transform: 'translateX(-50%)',
  h: '100%',
  bg: '#d9d9d97d',
  backdropFilter: 'blur(14px)',
  rounded: '55555px',
  border: '1px solid',
  borderColor: '#82828290',
  minW: '275px',

  sm: {
    w: '80%',
    gap: '1.5rem',
    fontSize: '14px',
  },
  md: {
    w: '44.8rem',
    gap: '2.5rem',
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
    ml: '2.5rem',
  }
})
