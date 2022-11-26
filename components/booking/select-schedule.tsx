import React from "react";
import { InlineWidget } from "react-calendly";
import styles from './select-schedule.module.scss'

const SelectSchedule = () => {

    return (
        <div className={styles['select-schedule']} style={{ width: '100%' }}>
            <h2>Pick a date and time</h2>
            <InlineWidget
                url="https://calendly.com/loctineer/sister-locs?hide_gdpr_banner=1"
                pageSettings={{
                    // hideEventTypeDetails: true,
                    backgroundColor: '201f1f',
                    primaryColor: 'a57b21',
                    textColor: 'ffffff'
                }}
            // styles={{
            //     borderTop: '1px solid #a57b21',
            //     borderBottom: '1px solid #a57b21',
            //     minWidth: '320px',
            //     minHeight: '100rem'
            // }}
            />
        </div>
    );
}

export default SelectSchedule; 