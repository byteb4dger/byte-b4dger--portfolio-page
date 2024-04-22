const SingleItem = ({ item }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer">
          <img src={item.img} alt="" />
        </div>
        <div className="textContainer">
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <span>{item.stack}</span>
          <div className="buttons">
            <button>
              <a href={item.url}>Odwiedź stronę</a>
            </button>
            <button>
              <a href={item.repo}>Sprawdź repozytorium</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
