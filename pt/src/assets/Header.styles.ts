import { css } from "../../styled-system/css";

export const header = css({
  pos: 'fixed',
  top: 0,
  left: 0,
  w: '100%',
  h: '10rem',
});

export const container = css({
  display: 'flex',
  m: '0 4.8rem',
  h: '100%',
  borderBottom: '1px solid',
  borderColor: 'primary',

  sm: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5px',
    alignItems: 'flex-end',
  },

  md: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 0,
  },
});

export const logo = css({
  textAlign: 'center',

  '& .name': {
    fontSize: '2.2rem',
    fontWeight: 600,
  },

  sm: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',

    '& .small': {
      display: 'none',
    },
  },
  md: {
    display: 'unset',
    gap: '0',

    '& .small': {
      display: 'block',
      fontSize: '1.4rem',
      mt: '5px',
    },
  },
});

export const navigator = css({
  display: 'flex',
  gap: '6rem',
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

