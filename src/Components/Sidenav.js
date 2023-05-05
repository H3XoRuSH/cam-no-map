import styles from "./sidenav.module.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import StartIcon from '@mui/icons-material/Start';
import { useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import { locations } from "./../lib/navData";

export default function Sidenav(props) {
    const [open, setopen] = useState(false)
    const [marker0, setmarker0] = useState(false)
    const [marker1, setmarker1] = useState(false)
    const [marker2, setmarker2] = useState(false)
    const [marker3, setmarker3] = useState(false)
    const [marker4, setmarker4] = useState(false)
    const [marker5, setmarker5] = useState(false)
    const [days, setdays] = useState('')
    const toggleOpen = () => {
        if (!open) {
            setdays('');
        }
        setopen(!open)
        setmarker4(false)
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
    const toggleDest = () => {
        setopen(true)
        setmarker4(!marker4)
    }
    const toggleDist = () => {
        setmarker5(!marker5)
        props.changeCursor(marker5)
    }
    const isNumeric = (value) => {
        return /^\d+$/.test(value);
    }
    const startTour = () => {
        const num = parseInt(days)
        const endl = '\r\n'
        if (isNumeric(days) && num !== 0 && num <= 3) {
            const loc0 = locations[0].length
            const loc1 = locations[1].length
            const loc2 = locations[2].length
            const loc3 = locations[3].length

            var done1 = new Array(loc1).fill(0)
            var done2 = new Array(loc2).fill(0)
            var done3 = new Array(loc3).fill(0)

            console.log(done1);
            console.log(done2);
            console.log(done3);
            const fin0 = locations[0][Math.floor(Math.random() * loc0)]
            var message = 'You may want to stay in: ' + fin0.name + endl + endl
            
            for (let i = 1; i <= num; i++) {

                message += "Day " + i.toString() + endl;

                let fin1 = Math.floor(Math.random() * loc1)
                while (done1[fin1] === 1) {
                    fin1 = Math.floor(Math.random() * loc1)
                }
                let fin2 = Math.floor(Math.random() * loc2)
                while (done2[fin2] === 1) {
                    fin2 = Math.floor(Math.random() * loc2)
                }
                let fin3 = Math.floor(Math.random() * loc3)
                while (done3[fin3] === 1) {
                    fin3 = Math.floor(Math.random() * loc3)
                }
                done1[fin1] = 1
                done2[fin2] = 1
                done3[fin3] = 1

                message += "10:00 - 12:00: " + locations[1][fin1].name + endl;
                message += "12:00 - 2:00: " + locations[3][fin3].name + endl;
                message += "2:00 - 4:00: " + locations[2][fin2].name + endl;

                if (i !== num) message += endl;
            }

            alert(message)
        }
        else {
            alert("Invalid Input (must be positive integer less than 4).")
        }
        
    }
    const changeDays = (evt) => {
        const val = evt.target.value
        setdays(val)
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
            <button className={styles.marker4} onClick={toggleDest}>
                {marker4? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>}
            </button>
            <span className={styles.linkText}>Tour</span>
        </div>
        {marker4 && <div className={styles.sideitem}>
            Days: 
            <input className={styles.inp} value={days} onChange={evt => changeDays(evt)}></input>
            
            <button className={styles.marker4} onClick={startTour}>
                <StartIcon/>
            </button>
        </div>}
        <div className={styles.sideitem}>
            <button className={styles.marker4} onClick={toggleDist}>
                {marker5? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>}
            </button>
            <span className={styles.linkText}>Distance</span>
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
