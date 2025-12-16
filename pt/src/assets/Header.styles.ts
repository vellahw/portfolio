import { css } from "../../styled-system/css";

export const header = css({
  pos: 'fixed',
  top: '2.9rem',
  left: '50%',
  transform: 'translateX(-50%)',
  w: '43.8rem',
  h: '6.4rem',
  zIndex: 999,
  background: '#0a090e6c',
  backdropFilter: 'blur(14px)',
  rounded: '55555px',
  border: '1px solid',
  borderColor: '#82828290'
  
  // sm: {
  //   h: '8rem',
  // },
});

export const container = css({
  display: 'flex',
  h: '100%',
  borderBottom: '1px solid',
  borderColor: 'primary',
  alignItems: 'center',

  sm: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5px',
    m: '0 2.8rem',
  },

  md: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 0,
    m: '0 4.8rem',
  },
});

export const logo = css({
  textAlign: 'center',

  '& .name': {
    fontSize: '2.2rem',
    fontWeight: 600,
  },

  sm: {
    display: 'none',
  },
  md: {
    gap: '0',
    display: 'block',

    '& .small': {
      display: 'block',
      fontSize: '1.4rem',
      mt: '5px',
    },
  },
});

export const navigator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '100%',
  h: '100%',
  gap: '5.7rem',
  fontSize: '1.8rem',
});

export const mail = css({
  fontSize: '1.8rem',

  sm: {
    display: 'none',
  },
  md: {
    display: 'unset',
  },
});

