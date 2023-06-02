import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Blog = () => {
	return (
		<div className={styles.mainContainer}>
			<Link
				href="/blog/test1"
				className={styles.container}
				key="test"
			>
				<div className={styles.imageContainer}>
					<Image
						src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
						alt=""
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>"test"</h1>
					<p className={styles.desc}>test</p>
				</div>
			</Link>
			<Link
				href="/blog/test2"
				className={styles.container}
				key="test2"
			>
				<div className={styles.imageContainer}>
					<Image
						src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
						alt=""
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>"test"</h1>
					<p className={styles.desc}>"test"</p>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
