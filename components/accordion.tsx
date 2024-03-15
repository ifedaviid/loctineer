import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './accordion.module.scss'
import { Close } from '@mui/icons-material';
import Price from './price';
import { getPriceSuffix } from 'helpers';

interface Props {
    prices: Price[];
    onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function ControlledAccordions({ prices, onClose }: Props) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className={styles.accordion}>
            <div className={styles.accordionHeader}>
                <p>Price List</p>
                <Close
                    // sx={{ fontSize: 35, color: "white" }}
                    onClick={onClose}
                />
            </div>
            <div className={styles.accordionRows}>
                {prices.map((price, idx) => {
                    const panelId = `panel${idx}`;
                    return (
                        <Accordion key={idx} expanded={expanded === panelId} onChange={handleChange(panelId)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${panelId}bh-content`}
                                id={`${panelId}bh-header`}
                                className={styles.accordionSummary}
                            >
                                <div className={styles.accordionSummaryContent}>
                                    <p className={styles.priceName}>{price.name} </p>
                                    <p className={styles.priceValue}>${price.value}{getPriceSuffix(price.type)}</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        </div >
    );
}