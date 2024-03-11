import "./featured.css";
import useFetch from "../../hooks/useFetch.js";

const Featured = () => {

  const { data, loading, error }=useFetch("hotels/countByCity?cities=mumbai,kolkata,delhi");
  //console.log(data);
  return (
    <div className="featured">
      {loading ? (
      "loading please wait"
      ):(
      <>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;
