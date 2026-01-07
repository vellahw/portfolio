import { css } from '../../styled-system/css';

// 공용
export const main = css({
  minW: '300px',
  maxW: '140.4rem',
  
  sm: {
    m: '0 3rem',
    w: 'calc(100% - 6rem)',
  },
  md: {
    m: '0 auto',
    w: '100%',
  }
});


export const section = css({
  md: {
    minH: '939px',
  }
})

export const sectionTitle = css({
  fontFamily: 'darker',
  letterSpacing: '-.27rem',

  sm: {
    fontSize: '7rem',
  },
  md: {
    fontSize: '9.8rem',
    ml: '2rem',
  }
});

export const smallSectionTitle = css({
  fontSize: '2rem',
  fontWeight: 500,
  opacity: .8,
  
  md: {
    mr: '4rem',
  }
});

export const roundElList = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.8rem'
})

export const eachRoundEl = css({
  rounded: '5555555px',
  textAlign: 'center',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: '#f0eeed1f',
  color: 'primary',
  border: '1px solid',
  borderColor: '#ffffff72',

  sm: {
    p: '0 2rem',
    fontSize: '13px',
    height: '4.4rem',
    gap: '1rem',
  },
  md: {
    p: '0 1.7rem',
    fontSize: '1.5rem',
    height: '3.8rem',
    gap: '.5rem',
  }
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
  whiteSpace: 'nowrap',
  p: '0 3.4rem',
  fontWeight: 500,
  pos: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  sm: {
    w: 'fit-content',
    height: '6rem',
    fontSize: '2.8rem', 
  },
  md: {
    w: 'auto',
    height: '6.2rem',
    fontSize: '2.6rem', 
  }

})

export const sloganTxt = css({
  top: '26rem',
  
  sm: {
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
  },
  md: {
    left: 'calc(50% - 40rem)',
    transform: '0',
  },
  lg: {
    left: 'calc(50% - 52rem)',
  }
});

export const positionTxt = css({
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '16rem',

  _after: {
    content: '""',
    pos: 'absolute',
    bottom: 'calc(-25rem - 1px)',
    left: '50%',
    transform: 'translateX(-50%)',
    w: '1px',
    h: '25rem',
    bg: 'border'
  },
});

export const myName = css({
  // fontSize: '29.8rem',
  // fontFamily: 'darker',
  fontFamily: 'montserrat',
  fontWeight: 500,
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  whiteSpace: 'nowrap',
  lineHeight: '1',

  sm: {
    fontSize: '7rem',
    letterSpacing: '0px',
  },
  md: {
    fontSize: '19rem',
    letterSpacing: '-7px',
  },
});

// 프로필 영역 =======================================
export const profileSection = css({
  border: '1px solid',
  borderColor: 'border',
  mt: '9rem',
  
  sm: {
    p: '5.8rem 4.5rem 0 4.5rem',
  },
  md: {
    p: '5.8rem 5.5rem 0 5.5rem',
  }
})

export const profileTitleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  pos: 'relative',
  zIndex: '2',
  sm: {
    flexDirection: 'column'
  },
  md: {
    flexDirection: 'row'
  }
});

export const profileTitle = css({
  fontFamily: 'darker',
  fontSize: '4rem',
  fontWeight: '700',
  letterSpacing: '-0.12rem',
})

export const profileHelloTitleContainer = css({
  fontWeight: '600',
  
  sm: {
    w: '100%',
    fontSize: '4rem',
    alignItems: 'flex-end',
    textAlign: 'left',
    mt: '8rem'
  },
  
  md: {
    w: '50%',
    fontSize: '5.8rem',
    alignItems: 'unset',
    textAlign: 'unset',
    mt: 'unset'
  }
});

export const helloFirst = css({
  md: {
    pl: '3.8rem',
  }
})

export const helloLast = css({
  md: {
    pl: '24.7rem',
  }
})

export const profileBodyContainer = css({
  display: 'flex',

  sm: {
    flexDirection: 'column',
    mt: '5rem',
  },
  md: {
    flexDirection: 'row',
    mt: '0',
  }
})

export const myProfileImg = css({
  bg: 'border',
  mr: '3.8rem',
  
  sm: {
    w: '100%',
    h: 'auto'
  },
  md: {
    w: '60.9rem',
    h: '70.2rem',
  }
})

export const profileBodyWrapper = css({
  mt: '5.1rem',
  pos: 'relative',

  _after: {
    content: '""',
    h: '1px',
    bg: 'border',
    display: 'block',
    pos: 'absolute',
    top: '0',
    right: '0',
  },

  sm: {
    w: '100%',
    p: '5.8rem 0 0 0',

    _after: {
      w: '90%',
    }
  },

  md: {
    w: '50%',
    p: '5.8rem 0 0 3.8rem',

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
      w: '95%',
    }
  }
});

export const mark = css({
  lineHeight: 1,
  fontSize: '6.9rem',
  fontFamily: 'darker',
  pos: 'relative',
  top: '-9.1rem',
  
  sm: {
    left: '0rem',
  },
  md: {
    left: '-5.05rem',
  }
});

export const profileBody = css({
  lineHeight: '2.2',
  whiteSpace: 'pre-wrap',
  mb: '5.3rem',
  mt: '-7.8rem',
  
  sm: {
    fontSize: '16px',
  },
  md: {
    fontSize: '2rem',
  }
})

export const profileLink = css({
  rounded: '55555px',
  minW: '116px',
  
  sm: {
    w: '18rem',
    h: '5rem',
    fontSize: '14px',
  },
  md: {
    w: '16rem',
    h: '4.2rem',
    fontSize: '1.8rem',
  }
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
  gap: '4rem',
  m: '5.8rem 0',

  '& p': {
    lineHeight: 2,
  },

  '& .date1': {
    pl: '4rem',
    opacity: .8
  },

  '& .date2': {
    opacity: .8,
    sm: {
      pl: '11.2rem',
    },
    md: {
      pl: '10.6rem',
    }
  },

  '& .date3': {
    opacity: .8,
    sm: {
      display: 'flex'
    },
    md: {
      display: 'unset',
      pl: '4rem',
    }
  },
  
  '& .date4': {
    opacity: .8,
    sm: {
      display: 'flex',
      lineHeight: '1.5'
    },
    md: {
      display: 'unset',
      pl: '8rem',
      lineHeight: '1'
    }
  },

  '& .date5': {
    opacity: .8,
    sm: {
      lineHeight: '1.5',
      display: 'flex'
    },
    md: {
      pl: '15rem',
      display: 'unset',
      lineHeight: '1'
    }
  },

  sm: {
    fontSize: '14px',
  },
  md: {
    fontSize: '2rem',
  }
});

export const historyTitle = css({
  fontWeight: 600,
  mb: '1rem',

  sm: {
    fontSize: '16px',
  },
  md: {
    fontSize: '2.2rem',
  }
})

export const eachHistoryContainer = css({
  '& p': {
    lineHeight: '1.6'
  },
  
  sm: {
    mt: '2rem',
  },
  md: {
    mt: '.4rem',
  }
})

export const smallHistoryTxt = css({
  m: '.2rem 0 1.2rem 0',
  
  sm: {
    fontSize: '12px'    
  },
  md: {
    fontSize: '1.5rem',
  }
})

// 이력 영역 =======================================
export const workSection = css({
  w: '100%',
  m: '0 auto',
  
  sm: {
    pt: '15rem',
  },
  md: {
    pt: '19rem',
  }
});

export const workSectionTitleContainer = css({
  display: 'flex',
  alignItems: 'flex-end',
  pb:'4.5rem',
  justifyContent: 'space-between',

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
  sm: {
    pl: '5rem'
  },
  md: {
    pl: '10rem'
  }
});

export const gridArea = css({
  display: 'grid',
  gap: '2.5rem',
  borderTop: '1px solid',
  borderTopColor: 'border',
  pt: '6rem',
  
  sm: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  md: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  }
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
  
  sm: {
    w: ' 18.4rem',

    '& svg': {
      w: '20px'
    }
  },
  md: {
    w: ' 16.4rem',
    '& svg': {
      w: 'unset'
    }
  }
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
  h: '4rem',

  sm: {
    fontSize: '12px',
  },
  md: {
    fontSize: '1.6rem',
  }
});

export const number = css({
  fontWeight: 500,
  pl: '1.2rem',
  mb: '1.2rem',
  
  sm: {
    fontSize: '9px',
  },
  md: {
    fontSize: '1.2rem',
  }
})

// 프로젝트 영역 =======================================
export const projectSectionTitle = css({
  pb: '4.5rem',
  // borderRight: '1px solid',
  // borderRightColor: 'border',
  ml: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  sm: {
    pt: '15rem',
  },
  md: {
    pt: '19rem',
  }
})

export const projectTitleContainer = css({
  display: 'flex',
  alignItems: 'center',

  '& .wrap': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.4rem',
  },

  sm: {
    justifyContent: 'unset',
    gap: '1.2rem'
  },
  md: {
    justifyContent: 'unset',
  }
});

export const projectName = css({
  fontWeight: 500,
  m: '1.8rem 0',
  
  sm: {
    fontSize: '2.5rem',
  },
  md: {
    fontSize: '2.2rem',
  }
})

export const projectBody = css({
  fontSize: '2rem',

  sm: {
    fontSize: '2.5rem',
  },
  md: {
    fontSize: '2rem',
  }
})

export const projectBodyMore = css({
  whiteSpace: 'pre-line',
  color: '#dbdbdbff',
  
  sm: {
    m: '0 0 2.5rem 0',
    fontSize: '14px',
  },
  md: {
    m: '0 0 1.6rem 0',
    fontSize: '1.6rem',
  }
})

export const projectDes = css({
  lineHeight: '1.8',
  minH: '15rem',
  
  sm: {
    fontSize: '14px'
  },
  md: {
    fontSize: '1.8rem !',
  }
})

export const projectRoleList = css({
  flexDirection: 'column',
  mb: '1rem',
})

export const projectGitBtn = css({
  sm: {
    w: '15.5rem',

    '& svg:nth-of-type(1)': {
      w: '15px',
      mr: '.8rem'
    }
  },

  md: {
    w: '13rem',

    '& svg:nth-of-type(1)': {
      w: 'unset',
      mr: '.5rem'
    }
  },
})

export const projectRole = css({
  fontSize: '1.6rem',
  w:'fit-content',
  bg: '#1d1d23ff'
})

// 컨택트 영역 =======================================
export const contactSection = css({
  borderRight: '1px solid',
  borderLeft: '1px solid',
  borderLeftColor: 'border',
  borderRightColor: 'border',

  sm: {
    p: '15rem 2rem 5rem 2rem',
  },
  md: {
    p: '20rem 0 5rem 0',
  }
})

export const contactTitleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pos: 'relative',
  borderBottom: '1px solid',
  borderBottomColor: 'border',
  pb: '2.5rem',

  sm: {
    m: '0',
  },
  md: {
    m: '0 2.5rem',
  }

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
  fontSize: '2.4rem',
  fontFamily: 'pretendard',
  fontWeight: '700',
  mt: '.8rem'
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
  fontFamily: 'montserrat',
  fontWeight: 700,
  w: 'fit-content',
  ml: 0,
  display: 'block',
  pos: 'relative',
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)',

  sm: {
    fontSize: '3rem',
  },
  md: {
    fontSize: '9rem',
  }
})

export const footerTxt = css({
  fontSize: '1.4rem',
  opacity: .8,
  w: '100%',
  textAlign: 'center'
})
