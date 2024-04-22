import "./portfolio.scss";
import SingleItem from "../singleItem/SingleItem";

const items = [
  {
    id: 1,
    title: "Blog {Skill Issue}",
    img: "./screen.avif",
    desc: "Minimalistyczny blog o tematyce programistycznej. Moje przemyślenia, tutoriale, porady i wiele więcej.",
    stack: "Javascript / Astro.js / Tailwind",
    url: "https://byte-b4dger-blog-159a.vercel.app/",
    repo: "https://github.com/byteb4dger/byte-b4dger--blog",
  },
  {
    id: 2,
    title: "Pączkarnia z donutami 'DOZUN DONUTS'",
    img: "./screen2.avif",
    desc: "Prosta strona z możliwością zamówienia donutów online. Wybierz swoje ulubione smaki i ciesz się smakiem.",
    stack: "Typescript / React / Next.js / SCSS",
    url: "https://byte-b4dger-dozun-donuts.vercel.app/",
    repo: "https://github.com/byteb4dger/byte-b4dger--dozun-donuts",
  },
  {
    id: 3,
    title: "Chat App",
    img: "./screen3.avif",
    desc: "Próba stworzenia aplikacji czatu. Możliwość logowania, rejestracji, wysyłania wiadomości, dodawania oraz blokowania znajomych.",
    stack: "Javascript / React / Vite/ CSS / Firebase",
    url: "https://byte-b4dger-chat-app.vercel.app/",
    repo: "https://github.com/byteb4dger/byte-b4dger--chat-app",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
