import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          duration: 0.4,
        })
        .to(authOverlayRef.current, {
          scaleY: 1,
          background: 'rgba(255,255,255,0.16)',
          duration: 0.6,
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
            duration: 0.8,
          },
          '-=0.4'
        )
    } else {
      const authAnimation = gsap
        .timeline({ defaults: { ease: 'power2.inOut' } })
        .to(fourthRef.current, {
          background: 'transparent',
          border: 'none',
          duration: 0.4,
        })
        .to(thirdRef.current, { scaleY: 0, opacity: 0, duration: 0.4 }, '-=0.2')
        .to(
          secondRef.current,
          { scaleY: 0, opacity: 0, duration: 0.6 },
          '-=0.2'
        )
        .to(
          authOverlayRef.current,
          { scaleY: 0, opacity: 0, display: 'none', duration: 0.4 },
          '-=0.2'
        )
    }
    // Cleanup: Reset overflow on component unmount
    return () => {
      body.style.overflow = ''
    }
  }, [isOpen])

  return (
    // <div className='w-full h-screen bg-gradient-to-tr from-cyan-400 to-cyan-700'>
    <div
      ref={authOverlayRef}
      onClick={onClose}
      id='authOverlay'
      className={`fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm ${
        isOpen ? 'scale-y-100' : 'scale-y-0 -translate-x-full'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={fourthRef}
        id='fourth'
        className='bg-white/0 max-w-sm m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm'
      >
        <div
          ref={secondRef}
          id='second'
          className={`bg-white p-4 sm:p-8 w-full rounded-xl shadow-sm ${
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
            <h1 className='text-cyan-400 text-3xl font-bold mb-4 text-center'>
              Hello!
            </h1>
            <p className='text-center text-neutral-500/80 mb-4'>
              I am a modal open and close animation made with GSAP and
              tailwindcss.
            </p>
            <div className='text-center'>
              <button
                onClick={onClose}
                className='bg-neutral-100 text-neutral-400 font-semibold text-xl rounded-md border-b-[3px] px-3 py-1'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Modal
