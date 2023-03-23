import styles from "./sidenav.module.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

export default function Sidenav(props) {
    const [open, setopen] = useState(false)
    const [marker0, setmarker0] = useState(false)
    const [marker1, setmarker1] = useState(false)
    const [marker2, setmarker2] = useState(false)
    const [marker3, setmarker3] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
    const toggleMarker0 = () => {
        setmarker0(!marker0)
        props.toggle(0)
    }
    const toggleMarker1 = () => {
        setmarker1(!marker1)
        props.toggle(1)
    }
    const toggleMarker2 = () => {
        setmarker2(!marker2)
        props.toggle(2)
    }
    const toggleMarker3 = () => {
        setmarker3(!marker3)
        props.toggle(3)
    }
    const toggleCenter = () => {
        props.recenter()
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
        </button>
        <div className={styles.sideitem}>
            <button className={styles.marker0} onClick={toggleMarker0}>
                {marker0? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>}
            </button>
            <span className={styles.linkText}>Accommodation</span>
        </div>
        <div className={styles.sideitem}>
            <button className={styles.marker1} onClick={toggleMarker1}>
                {marker1? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>}
            </button>
            <span className={styles.linkText}>Tourism</span>
        </div>
        <div className={styles.sideitem}>
            <button className={styles.marker2} onClick={toggleMarker2}>
                {marker2? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>}
            </button>
            <span className={styles.linkText}>Historical</span>
        </div>
        <div className={styles.sideitem}>
            <button className={styles.marker3} onClick={toggleMarker3}>
                {marker3? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>}
            </button>
            <span className={styles.linkText}>Business</span>
        </div>
        <div className={styles.sideitem}>
            <button className={styles.marker4} onClick={toggleCenter}>
                <CenterFocusStrongIcon/>
            </button>
            <span className={styles.linkText}>Recenter</span>
        </div>
    </div>
  )
}
