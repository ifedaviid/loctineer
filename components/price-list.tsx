
import styles from './price-list.module.scss'
import React from "react";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import { Price } from 'types';
import ControlledAccordions from './accordion';

interface ModalProps {
    open: boolean;
    onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
    prices: Price[];
    serviceName: string;
}

const PriceList = ({ open, onClose, prices, serviceName }: ModalProps) => {
    return (
        <Drawer
            anchor='bottom'
            open={open}
            onClose={onClose}
            className={styles.drawer}
        >
            <Box
                role="presentation"
                sx={{ backgroundColor: '#151515', color: 'lightgray', height: '100%' }}
            >
                <ControlledAccordions prices={prices} onClose={onClose} />
            </Box>
        </Drawer>
    );
};

export default PriceList;

