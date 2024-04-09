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
          <div className="buttons">
            <button>See Demo</button>
            <button>See Repo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
