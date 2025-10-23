import { faGamepad, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='box'>
      <p className='text-center text-4xl whitespace-nowrap'>Select a panel!</p>
      <div className='buttons'>
        <Link href='https://ptero-panel.lncvrt.xyz' draggable={false}>
          <FontAwesomeIcon icon={faGamepad} />
          <span>Game Panel</span>
        </Link>
        <Link href='https://web-panel.lncvrt.xyz' draggable={false}>
          <FontAwesomeIcon icon={faGlobe} />
          <span>Website Panel</span>
        </Link>
      </div>
    </div>
  )
}
