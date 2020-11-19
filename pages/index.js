import Head from 'next/head';
import Accordion from '../components/Accordion';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>FAQ Accordion</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.mainCard}>
					<div className={styles.cardContent}>
						<div className={styles.leftSide}>
							<div className={styles.womanOnline} />
							<div className={styles.shadowBg} />
						</div>
						<div className={styles.box} />
					</div>
					<div className={styles.rightSide}>
						<h1 className={styles.title}>FAQ</h1>
						<div className={styles.accordionPanel}>
							<Accordion
								titleText='How many team members can I invite?'
								panelText='You can invite up to 2 additional users on the Free plan. There is no limit
								on team members for the Premium plan.'
							/>
							<div className={styles.divider} />
							<Accordion
								titleText='What is the maximum file upload size?'
								panelText='No more than 2GB. All files in your account must fit your allotted
								storage space.'
							/>
							<div className={styles.divider} />
							<Accordion
								titleText='How do I reset my password?'
								panelText='Click “Forgot password” from the login page or “Change password” from
								your profile page. A reset link will be emailed to you.'
							/>
							<div className={styles.divider} />
							<Accordion
								titleText='Can I cancel my subscription?'
								panelText='Yes! Send us a message and we’ll process your request no questions
								asked.'
							/>
							<div className={styles.divider} />
							<Accordion
								titleText='Do you provide additional support?'
								panelText='Chat and email support is available 24/7. Phone lines are open during
								normal business hours.'
							/>
							<div className={styles.divider} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
