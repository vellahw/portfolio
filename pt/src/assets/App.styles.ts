import { css } from '../../styled-system/css';

// 공용
export const sectionTitle = css({
  fontFamily: 'darker',
  fontSize: '9.8rem',
  letterSpacing: '-.27rem',
  ml: '2rem',
});

export const smallSectionTitle = css({
  fontSize: '2rem',
  fontWeight: 500,
  opacity: .8,
  mr: '4rem',
});

export const roundElList = css({
  display: 'flex',
  gap: '.8rem'
})

export const main = css({
  maxWidth: '1404px',
  w: '100%',
  m: '0 auto',
});

export const eachRoundEl = css({
  p: '0 1.7rem',
  rounded: '5555555px',
  textAlign: 'center',
  height: '3.8rem',
  fontSize: '1.5rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

  bg: '#f0eeed1f',
  color: 'primary',
  border: '1px solid',
  borderColor: '#ffffff72',
});

// 배너 영역 =======================================
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

// 프로필 영역 =======================================
export const profileSection = css({
  border: '1px solid',
  borderColor: 'border',
  p: '5.8rem 5.5rem 0 5.5rem',
  mt: '4rem'
})

export const profileTitleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  pos: 'relative',
  zIndex: '2'
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
  mr: '3.8rem'
})

export const profileBodyContainer = css({
  w: '50%',
  mt: '5.1rem',
  p: '5.8rem 0 0 3.8rem',
  pos: 'relative',

  _before: {
    content: '""',
    w: '1px',
    h: '95%',
    bg: 'border',
    display: 'block',
    pos: 'absolute',
    bottom: '0',
    left: '0',
  },

  _after: {
    content: '""',
    w: '95%',
    h: '1px',
    bg: 'border',
    display: 'block',
    pos: 'absolute',
    top: '0',
    right: '0',
  },
});

export const mark = css({
  lineHeight: 1,
  fontSize: '6.9rem',
  fontFamily: 'darker',
  pos: 'relative',
  top: '-9.1rem',
  left: '-5.05rem'
});

export const profileBody = css({
  lineHeight: '1.9',
  fontSize: '2rem',
  whiteSpace: 'pre-wrap',
  mb: '5.3rem',
  mt: '-7.8rem'
})

export const profileLink = css({
  rounded: '55555px',
  fontSize: '1.8rem',
  w: '16rem',
  h: '4.2rem',
});

export const showResume = css({
  bg: 'primary',
  color: 'black',
});

export const goGithub = css({
  bg: '#f0eeed1f',
  color: 'primary',
  border: '1px solid',
  borderColor: 'primary',
});

export const history = css({
  fontSize: '2rem',
  gap: '4rem',
  m: '5.8rem 0',

  '& p': {
    lineHeight: 2,
  },

  '& .date1': {
    pl: '4rem',
  },

  '& .date2': {
    pl: '10.6rem',
  },

  '& .date3': {
    pl: '4rem',
  },
  
  '& .date4': {
    pl: '8rem',
  },

  '& .date5': {
    pl: '15rem',
  },
});

export const historyTitle = css({
  fontSize: '2.2rem',
  fontWeight: 600,
  mb: '1rem'
})

export const eachHistoryContainer = css({
  mt: '.4rem',

  '& p': {
    lineHeight: '1.6'
  },
})

export const smallHistoryTxt = css({
  fontSize: '1.5rem',
  m: '.2rem 0 1.2rem 0'
})

// 이력 영역 =======================================
export const workSection = css({
  w: '100%',
  m: '0 auto',
});

export const workSectionTitleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  pt: '13rem',
  pb:'4.5rem',

  // pos: 'relative',
  // borderRight: '1px solid',
  // borderRightColor: 'border',
  // _after: {
  //   content: '""',
  //   w: '1px',
  //   h: '6rem',
  //   pos: 'absolute',
  //   bottom: 'calc(-6rem - 1px)',
  //   left: 0,
  //   bg: 'border'
  // }
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
  bg: '#1d1d23ff',
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

// 프로젝트 영역 =======================================
export const projectSectionTitle = css({
  pt: '13rem',
  pb: '4.5rem',
  // borderRight: '1px solid',
  // borderRightColor: 'border',
  ml: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})

export const projectTitleContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1.4rem'
});

export const projectName = css({
  fontSize: '2.2rem',
  fontWeight: 500,
  m: '1.8rem 0',
})

export const projectBody = css({
  fontSize: '2rem',
})

export const projectBodyMore = css({
  whiteSpace: 'pre-line',
  fontSize: '1.6rem',
  color: '#dbdbdbff',
  m: '0 0 1.6rem 0',
})

export const projectDes = css({
  lineHeight: '1.8',
  fontSize: '1.8rem !',
  minH: '13rem'
})

export const projectRoleList = css({
  flexDirection: 'column',
  mb: '1rem'
})

export const projectGitBtn = css({
  w: '13rem',
})

export const projectRole = css({
  fontSize: '1.6rem !',
  w:'fit-content',
  bg: '#1d1d23ff'
})

// 컨택트 영역 =======================================
export const contactSection = css({
  pt: '20rem',
  pb: '5rem',
  borderRight: '1px solid',
  borderLeft: '1px solid',
  borderLeftColor: 'border',
  borderRightColor: 'border',
})

export const contactTitleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pos: 'relative',
  borderBottom: '1px solid',
  borderBottomColor: 'border',
  pb: '2.5rem',
  m: '0 2.5rem',

  // _after: {
  //   content: '""',
  //   w: '82%',
  //   h: '1px',
  //   bg: 'border',
  //   pos: 'absolute',
  //   right: '0',
  //   top: '50%',
  //   transform: 'translateY(-50%)'
  // }
})

export const contactTitle = css({
  fontFamily: 'darker',
  fontSize: '4rem',
  fontWeight: '700',
  letterSpacing: '-0.12rem',
})

export const rightContactTitle = css({
  fontSize: '3rem',
  fontFamily: 'pretendard',
  fontWeight: '700',
})

export const contactMark = css({
  lineHeight: 1,
  fontSize: '6.9rem',
  fontFamily: 'darker',
  pos: 'absolute',
  top: '-.9rem',
  left: '20rem'
})

export const mailContainer = css({
  pos: 'relative',
  m: '14rem 0',
})

export const myType = css({
  w: 'fit-content',
  fontSize: '1.8rem',
  pos: 'absolute',

  '&._1': {
    top: '-12rem',
    right: '8%'
  },

  '&._2': {
    top: '-10rem',
    left: '5%'

  },
  '&._3': {
    top: '-9rem',
    left: '50%'
  },

  '&._4': {
    bottom: '-9rem',
    left: '20%'
  },

  '&._5': {
    bottom: '-10rem',
    right: '25%'
  },
})

export const contactMail = css({
  fontSize: '9rem',
  fontFamily: 'montserrat',
  fontWeight: 700,
  w: 'fit-content',
  ml: 0,
  display: 'block',
  pos: 'relative',
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)'
})

export const footerTxt = css({
  fontSize: '1.4rem',
  opacity: .8,
  w: '100%',
  textAlign: 'center'
})
