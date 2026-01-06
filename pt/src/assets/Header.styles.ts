import { css } from "../../styled-system/css";

export const header = css({
  pos: 'fixed',
  top: '2.9rem',
  left: '50%',
  transform: 'translateX(-50%)',
  w: '100%',
  h: '6.4rem',
  zIndex: 999,
});

export const mail = css({
  fontFamily: 'montserrat',
  fontWeight: 500,
  fontSize: '1.5rem',
  pos: 'fixed',
  top: '50%',
  left: '3.5rem',
  transform: 'translateY(-50%)',
  opacity: .8,

  // sm: {
  //   display: 'none',
  // },
  // md: {
  //   display: 'unset',
  // },
});


export const navigator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pos: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  w: '43.8rem',
  h: '100%',
  gap: '5.7rem',
  fontSize: '1.8rem',
  bg: '#0a090e6c',
  backdropFilter: 'blur(14px)',
  rounded: '55555px',
  border: '1px solid',
  borderColor: '#82828290'
});
