import React, { useState, useRef, useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'

interface Props {
  isOpen?: boolean
  onClose?: () => void
  children: ReactNode
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const authOverlayRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const fourthRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.style.overflow = 'hidden'
      const authAnimation = gsap
        .timeline({ defaults: { ease: 'power2.inOut' } })
        .to(authOverlayRef.current, {
          scaleY: 0.01,
          x: 1,
          opacity: 1,
          display: 'flex',
          duration: 0.2,
        })
        .to(authOverlayRef.current, {
          scaleY: 1,
          background: 'rgba(255,255,255,0.16)',
          duration: 0.4,
        })
        .to(
          secondRef.current,
          { scaleY: 1, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .to(thirdRef.current, { scaleY: 1, opacity: 1, duration: 0.4 }, '-=0.2')
        .to(
          fourthRef.current,
          {
            background: 'rgba(255,255,255,0.3)',
            border: '1px solid rgba(255,255,255,0.3)',
            duration: 0.6,
          },
          '-=0.4'
        )
    } else {
      const authAnimation = gsap
        .timeline({ defaults: { ease: 'power2.inOut' } })
        .to(fourthRef.current, {
          background: 'transparent',
          border: 'none',
          duration: 0.2,
        })
        .to(thirdRef.current, { scaleY: 0, opacity: 0, duration: 0.2 }, '-=0.2')
        .to(
          secondRef.current,
          { scaleY: 0, opacity: 0, duration: 0.4 },
          '-=0.2'
        )
        .to(
          authOverlayRef.current,
          { scaleY: 0, opacity: 0, display: 'none', duration: 0.2 },
          '-=0.2'
        )
    }
    // Cleanup: Reset overflow on component unmount
    return () => {
      body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div
      ref={authOverlayRef}
      onClick={onClose}
      id='authOverlay'
      className={`fixed z-10 left-0 top-0 h-full w-full flex items-center justify-end py-3 px-2 overflow-y-auto bg-slate-300/80 backdrop-blur-md ${
        isOpen ? 'scale-y-100' : '-translate-x-full' //-translae-x-full or scale-y-0
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={fourthRef}
        id='fourth'
        className='bg-white/0 max-w-4xl m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm absolute w-3/4 left-1/2 top-[10%] -translate-x-1/2'
      >
        <div
          ref={secondRef}
          id='second'
          className={`bg-bg-dark p-4 sm:p-8 w-full rounded-xl shadow-sm ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div
            ref={thirdRef}
            id='third'
            className={`relative ${
              isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
