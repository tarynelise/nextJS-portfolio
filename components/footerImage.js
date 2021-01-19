import styles from "./footerImage.module.css";

export default function FooterImage() {
  let imageOfThePage = pickImage();
  let linkUrl = imageOfThePage.link;
  let src = imageOfThePage.src;
  let alt = imageOfThePage.alt;

  function pickImage() {
    let images = [
      {
        link: "https://codepen.io/tarynewens/pen/KbeNYX",
        src: "/cssImages/gelato.png",
        alt: "CSS image of a gelato cone with happy faces",
      },
      {
        link: "https://codepen.io/tarynewens/pen/RzgOgG",
        src: "/cssImages/macarons.png",
        alt: "CSS image of 3 macarons with happy faces",
      },
      {
        link: "https://codepen.io/tarynewens/pen/OKbWKy",
        src: "/cssImages/plant1.png",
        alt: "CSS image of a plant in a pink pot",
      },
      {
        link: "https://codepen.io/tarynewens/pen/rEqONM",
        src: "/cssImages/plant2.png",
        alt: "CSS image of a plant in a pink pot",
      },
      {
        link: "https://codepen.io/tarynewens/pen/WmwgJR",
        src: "/cssImages/pig.png",
        alt: "CSS image of a geometric pig",
      },
      {
        link: "https://codepen.io/tarynewens/pen/WPgwZO",
        src: "/cssImages/heart.png",
        alt: "CSS image of a geometric heart",
      },
    ];

    let n = Math.floor(Math.random() * images.length);
    return images[n];
  }

  return (
    <div className={styles.footerImageWrapper}>
      <a
        href={linkUrl}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.footerImageLink}
      >
        <img src={src} alt={alt} className={styles.footerImage} />
      </a>
    </div>
  );
}
