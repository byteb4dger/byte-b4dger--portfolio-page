import "./aboutMe.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const item1Variant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const item2Variant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const item3Variant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const item4Variant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const item5Variant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <main className="items-grid">
      <motion.article
        ref={ref}
        variants={item1Variant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="item grid-col-span-2 item-1"
      >
        <div className="item-container">
          <h1>Kim jestem?</h1>
          <p>
            Z dniem 1 stycznia 2023 roku postanowiłem przebranżowić się na web
            developera pomimo pracy jako kucharz w restauracji. W ciągu
            ostatnich 16 miesięcy zdobyłem umiejętności w tworzeniu aplikacji
            internetowych od podstaw, a wynikiem mojej pracy jest ta strona i
            reszta projektów.
          </p>
        </div>
      </motion.article>
      <motion.article
        ref={ref}
        variants={item2Variant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="item item-2"
      >
        <div className="item-container">
          <h1>Czego szukam?</h1>
          <p>
            Szukam pracy, która pozwoli mi się rozwijać w web developmencie, a
            zarazem będzie sprawiedliwie wynagradzać.
          </p>
        </div>
      </motion.article>
      <motion.article
        ref={ref}
        variants={item3Variant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="item item-3"
      >
        <div className="item-container">
          <h1>To czego nie lubię:</h1>
          <p>
            Nie lubię hałasu i chaosu. Nie cierpię kawy bez mleka i herbaty bez
            słodzika. Nie lubię także prozy fabularnej (szczególnie fantasy!),
            wczesnych pobudek i gorącego lata.
          </p>
        </div>
      </motion.article>
      <motion.article
        ref={ref}
        variants={item4Variant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="item grid-col-span-2 item-4"
      >
        <div className="item-container">
          <h1>Moje zainteresowania:</h1>
          <p>
            Wszystko co dotyczy szeroko rozumianego wszechświata i praw nim
            rządzących. Historia, dokładniej ostatnie stulecie, choć nie są mi
            też obce wyprawy wikingów, wizygotów czy ostrogotów. Kręcą mnie też
            nowe technologie, dlatego też obecnie znajduję się w tym miejscu.
          </p>
        </div>
      </motion.article>
      <motion.article
        ref={ref}
        variants={item5Variant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="item item-5"
      >
        <div className="item-container">
          <h1>To co lubię:</h1>
          <p>
            Lubię zimę i chłodne temperatury. Muzykę z gatunku Lo-Fi, która
            towarzyszy mi w ciągu dnia. Zawsze lubię wracać do serialu The
            Office (Creed najlepsza postać!) choćbym obejrzał całość po raz
            setny. Do tego wycieczki na rowerze, zdrowy tryb życia i wakacje na
            zapomniach greckich wysepkach
          </p>
        </div>
      </motion.article>
    </main>
  );
};

export default AboutMe;
