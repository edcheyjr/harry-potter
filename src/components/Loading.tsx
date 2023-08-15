'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

type Props = {}

const Loading = (props: Props) => {
  const parent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const staggerVars = {
      each: 0.05,
      scrub: true,
      yoyo: true,
    }

    // gsap context
    let ctx = gsap.context(() => {
      // do animations here
      gsap.from('.two', {
        opacity: 0.5,
        scale: 0,
        duration: 1,
        ease: 'power2',
        stagger: staggerVars,
      })
      gsap.from('.three', {
        opacity: 0.5,
        scale: 0,
        duration: 1,
        ease: 'power2',
        stagger: staggerVars,
      })
      gsap.from('.one', {
        x: -1000,
        delay: 1,
        rotate: 180,
        duration: 1,
        ease: 'sine.inOut',
      })
      // gsap.from('.two', {
      //   x: -1000,
      //   rotate: 180,
      //   duration: 1,
      //   ease: 'sine.inOut',
      // })
      // gsap.from('.three', {
      //   x: 1000,
      //   rotate: 180,
      //   duration: 1,
      //   ease: 'sine.inOut',
      // })

      gsap.from('.four', {
        delay: 1,
        x: 1000,
        rotate: 180,
        duration: 1,
        ease: 'sine.inOut',
      })
      gsap.fromTo(
        '.box',
        {
          scale: 0,
          stagger: {
            each: 0.3,
          },
        },
        {
          delay: 5,
          scale: 1,
          x: 1,
          stagger: {
            each: 0.05,
          },
          yoyo: true,
          duration: 0.75,
          repeat: -1,
          ease: 'elastic',
        }
      )
    }, parent)

    // cleanup
    return () => ctx.revert()
  }, [])
  const size = {
    width: '15px',
    height: '10vh',
    borderRadius: '2px',
    margin: '0.1rem',
  }
  // TODO colorTheme
  const colorTheme = null

  return (
    <div
      ref={parent}
      className='w-full h-full flex justify-center items-center'
    >
      <div
        style={size}
        className={`box one ${colorTheme || 'bg-red-500'}`}
      ></div>
      <div
        style={size}
        className={`box two ${
          colorTheme || 'bg-gradient-to-r from-red-500 from-10% to-orange-500'
        }`}
      ></div>
      <div
        style={size}
        className={`box three ${
          colorTheme || 'bg-gradient-to-l from-amber-500 from-10% to-orange-500'
        }`}
      ></div>
      <div
        style={size}
        className={`box four ${colorTheme || 'bg-amber-500'}`}
      ></div>
    </div>
  )
}

export default Loading
