import { css } from '../../styled-system/css';

// 공용
export const sectionTitle = css({
  fontFamily: 'darker',
  fontSize: '9.8rem',
  letterSpacing: '-.27rem',
  ml: '2rem',
});

export const main = css({
  maxWidth: '1404px',
  w: '100%',
  m: '0 auto',
});

export const bannerSection = css({
  w: '100%',
  h: '100svh',
  m: '0 auto',
  pos: 'relative'
});

export const bannerTxtSquare = css({
  rounded: '5555555px',
  border: '1px solid',
  borderColor: 'border',
  bg: '#f9f9f821',
  textAlign: 'center',
  w: 'auto',
  height: '6.2rem',
  p: '0 3.4rem',
  fontSize: '2.6rem', 
  fontWeight: 500,
  pos: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const sloganTxt = css({
  left: 0,
  top: '26rem'
});

export const positionTxt = css({
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '16rem',

  _after: {
    content: '""',
    pos: 'absolute',
    bottom: 'calc(-20rem - 1px)',
    left: '50%',
    transform: 'translateX(-50%)',
    w: '1px',
    h: '20rem',
    bg: 'border'
  },
});

export const myName = css({
  fontSize: '29.8rem',
  fontFamily: 'darker',
  fontWeight: 500,
  letterSpacing: '-7px',
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  whiteSpace: 'nowrap',
  lineHeight: '1',
});

// 프로필 영역
export const profileSection = css({
  border: '1px solid',
  borderColor: 'border',
  p: '5.8rem 5.5rem',
  mt: '4rem'
})

export const profileSectionTitleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
});

export const profileTitle = css({
  fontFamily: 'darker',
  fontSize: '4rem',
  fontWeight: '700',
  letterSpacing: '-0.12rem',
})

export const profileHelloTitleContainer = css({
  fontSize: '5.8rem',
  fontWeight: '600',
  w: '50%'
});

export const helloFirst = css({
  pl: '3.8rem',
})

export const helloLast = css({
  pl: '24.7rem',
})

export const myProfileImg = css({
  w: '60.9rem',
  h: '70.2rem',
  bg: 'border',
})

// 이력 영역
export const workSection = css({
  w: '100%',
  pt: '10rem',
  m: '0 auto',
});

export const workSectionTitleContainer = css({
  borderRight: '1px solid',
  borderRightColor: 'border',
  pb: '6rem',
});

export const workSectionTitle2 = css({
  pl: '10rem'
});

export const gridArea = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2.5rem',
  borderTop: '1px solid',
  borderTopColor: 'border',
  pt: '6rem'
});

export const gridItem = css({
  p: '4rem 2rem',
  rounded: '1.5rem',
  border: '1px solid',
  borderColor: 'border',
  bgColor: '#1d1d23ff',
});

export const workImgContainer = css({
  pos: 'relative',
})

export const goBtn = css({
  pos: 'absolute',
  bottom: '1.5rem',
  right: '1.5rem',
  zIndex: '1',
  w: ' 16.4rem',
});

export const workGoBtn = css({
  color: '#fff',
  bg: '#0a090e40',
  backdropFilter: 'blur(50px)',
  rounded: '.5rem',
  border: '1px solid',
  borderColor: '#0a090f52',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.6rem',
  h: '4rem',
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