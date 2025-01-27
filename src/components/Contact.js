import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import backgroundImg from '../image/seth.jpg';

const Contact = () => {
	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		setLoading(true);

		try {
			const response = await fetch('http://localhost:5000/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			if (response.ok) {
				setStatus('success');
				e.target.reset();
			} else {
				setStatus('error');
			}
		} catch (error) {
			setStatus('error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id="contact"
			className={styles.contactSection}
			style={{ backgroundImage: `url(${backgroundImg})` }}
		>
			<div className={styles.backgroundOverlay} />
			<div className={styles.container}>
				<h2 className={styles.title}>Contact me ...</h2>
				<div className={styles.content}>
					<form onSubmit={handleSubmit} className={styles.form}>
						<div className={styles.inputGroup}>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								className={styles.input}
								required
								disabled={loading}
							/>
							<button type="submit" className={styles.submitButton} disabled={loading}>
								{loading ? 'Sending...' : <FaArrowRight />}
							</button>
						</div>
						{status === 'success' && (
							<p className={styles.successMessage}>Thank you! Your email has been sent.</p>
						)}
						{status === 'error' && (
							<p className={styles.errorMessage}>Failed to send email. Please try again.</p>
						)}
					</form>
				</div>
				<div className={styles.footer}>
					<p>© bellarinseth. All Rights Reserved 2025</p>
				</div>
			</div>
		</section>
	);
};
export default Contact;