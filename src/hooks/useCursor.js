import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`
      }
      animId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return { cursorRef, ringRef }
}
