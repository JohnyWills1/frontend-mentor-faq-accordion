import React from 'react';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';

const Accordion = ({ titleText, panelText }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<button
				className={isOpen ? styles.accordionOpen : styles.accordion}
				onClick={() => setOpen(!isOpen)}
			>
				{titleText}
				<div className={isOpen ? styles.arrowDown : styles.arrow} />
			</button>
			{isOpen && <div className={styles.panel}>{panelText}</div>}
		</>
	);
};

export default Accordion;
