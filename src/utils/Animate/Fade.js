import {Fade as FadeAnimation} from 'react-reveal'

export function Fade({children, right = false, bottom = false, left = false, delay = 0, duration = 400, cascade = false}){
  if(right){
    return(
      <FadeAnimation right duration={duration} delay={delay}>
        {children}
      </FadeAnimation>
    )
  }

  if(left){
    return(
      <FadeAnimation left duration={duration} delay={delay}>
      {children}
    </FadeAnimation>
    )
  }

  if (cascade){
    return(
      <FadeAnimation>
        {children}
      </FadeAnimation>
    )
  }
  if( bottom ){
    return(
      <FadeAnimation bottom duration={duration} delay={delay}>
        {children}
      </FadeAnimation>
    )
  }
  return(
    <FadeAnimation>
      {children}
    </FadeAnimation>
  )
}