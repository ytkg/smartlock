import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

const ThumbturnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="160"
    height="160"
  >
    {/* 背景の円盤部分 */}
    <circle cx="50" cy="50" r="45" stroke="#555" strokeWidth="4" fill="#ccc" />
    {/* 溝の丸を外側に調整 */}
    <circle cx="50" cy="50" r="40" stroke="#888" strokeWidth="2" fill="none" />
    {/* 中心部分の丸を大きく調整（鍵全体の1/3サイズ） */}
    <circle cx="50" cy="50" r="15" stroke="#888" strokeWidth="2" fill="none" />
    {/* サムターン部分（細く長く調整） */}
    <rect
      x="15"
      y="46"
      width="70"
      height="8"
      rx="3"
      fill="#888"
    />
  </svg>
)

function App() {
  const [isLocked, setIsLocked] = useState(true)

  const handleClick = () => {
    setIsLocked((prev) => !prev)
  }

  return (
    <>
      <motion.button
        style={{ backgroundColor: 'transparent', height: '160px' }}
        onClick={handleClick}
        animate={{ rotate: isLocked ? 0 : 90 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <ThumbturnIcon />
      </motion.button>
    </>
  )
}

export default App
