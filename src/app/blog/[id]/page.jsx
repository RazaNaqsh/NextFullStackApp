import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>title</h1>
					<p className={styles.desc}>Desc</p>
					<div className={styles.author}>
						<Image
							src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>username</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
						alt=""
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
					dolores, vitae minima tempora aliquid sunt unde, hic quae veniam rerum
					vel quisquam ad dolore fugit aspernatur inventore impedit totam nemo
					maiores deleniti assumenda, ipsa blanditiis sint a. Iusto natus, ullam
					fugit atque facilis omnis dolorum unde aspernatur ipsam ut laborum.
				</p>
			</div>
		</div>
	);
};

export default BlogPost;
