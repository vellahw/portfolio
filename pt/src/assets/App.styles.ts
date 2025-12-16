import { css } from '../../styled-system/css';

export const main = css({
  mt: '10rem',
  maxWidth: '1404px',
  w: '100%',
  m: '0 auto',
});

export const banner = css({
  w: '100%',
  h: '100svh',
  m: '0 auto',
});

export const sectionTitle = css({
  fontFamily: 'darker',
  fontSize: '9.8rem',
  letterSpacing: '-.27rem',
  mb: '2.6rem',
  ml: '2rem'
});

export const popText = css({
  fontSize: '4rem',
  fontWeight: 700,
  
})

export const workSection = css({
  // maxWidth: '1404px',
  w: '100%',
  pt: '10rem',
  m: '0 auto',
});

export const works = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2.5rem',
  // border: '1px solid',
  // borderColor: 'border',
  // borderLeft: 'none',
});

export const workItem = css({
  p: '4rem 2rem',
  rounded: '1.5rem',
  border: '1px solid',
  borderColor: 'border',
  bgColor: '#1d1d23ff',
  // borderRight: '1px solid',
  // borderBottom: '1px solid',
  // borderRightColor: 'border',
  // borderBottomColor: 'border',
});

export const workImgContainer = css({
  pos: 'relative',
})

export const goBtn = css({
  pos: 'absolute',
  bottom: '1.5rem',
  right: '1.5rem',
  color: '#fff',
  bg: '#0a090e40',
  backdropFilter: 'blur(50px)',
  rounded: '.5rem',
  border: '1px solid',
  borderColor: '#0a090f52',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1',
  fontSize: '1.6rem',
  w: ' 16.4rem',
  h: '4rem'
});

export const number = css({
  fontSize: '1.2rem',
  fontWeight: 500,
  pl: '1.2rem',
  mb: '1.2rem',
})

export const projectTitleContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1.4rem'
});

export const projectName = css({
  fontSize: '2.8rem',
  fontWeight: 500,
  m: '1.6rem 0',
})

export const projectBody = css({
  fontSize: '1.5rem',
})

export const techList = css({
  display: 'flex',
  gap: '.8rem'
})

export const eachTech = css({
  p: '0 1.7rem',
  rounded: '5555555px',
  border: '1px solid',
  borderColor: 'border',
  textAlign: 'center',
  height: '3.8rem',
  fontSize: '1.5rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem'
});