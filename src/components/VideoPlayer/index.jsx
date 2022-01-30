import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC =
  'https://v16-webapp.tiktok.com/720c7b1ea211ac204cc2ec915221ca8b/61f6044e/video/tos/useast2a/tos-useast2a-pve-0068/f1f02c43b7b94a42bbdb0b98e4d5a673/?a=1988&br=5658&bt=2829&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThRsf3lXq&l=2022012921203101022312304602172775&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k1eTY6ZmZsOjMzNzczM0ApODk5ZjM2OTs2N2k4ZTs7NGdfL2NfcjRfZzBgLS1kMTZzczYxMzFhNTRfNTAvNmNjXjQ6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
