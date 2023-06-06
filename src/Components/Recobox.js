import React from 'react';
import styles from "./recobox.module.css"

class Recobox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleRecobox = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className={isActive ? styles.reco_Box : styles.reco_BoxClosed}>
        <div className={styles.box_head} onClick={this.toggleRecobox}>
          Tour Recommendations Menu
        </div>
        { isActive && 
          <div className={isActive ? styles.tour_body : styles.tour_body_minimized}>
            {this.props.currentTour?.length > 0 ?
            (this.props.currentTour.slice(1).map((item, index) => (
            <div key={index}>
              {index === 0 ? "You may want to stay in: " + this.props.currentTour[0][0].name : ""}
              <br/>
              <b>Day {index + 1}: </b><br/>
              10:00 AM - 12:00 NN: {item[0].name} <br/>
              12:00 NN - 02:00 PM: {item[1].name} <br/>
              02:00 PM - 04:00 PM: {item[2].name} <br/>
              <br/>
            </div>
            ))
            ):(
              <div>Please use the sidebar navigation and input the length of your tour</div>
            )}
        </div>

        }
      </div>
    );
  }
}

export default Recobox;
