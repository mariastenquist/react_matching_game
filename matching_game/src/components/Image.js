import React from "react";
// import "../index.css";

const style = {
  panel: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 100,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  nav: {
    background: 'green'
  },
  image: {
      width: 125,
      height: 125,
      border: 5,
      padding: 5,
      margin: 10
  }
};

const ImageBox = () => (
<div>
  {/* <div style = { style.nav } > Home</div>  */}
  {/* <div style={style.panel}>
    <div style={style.heading}>Home</div>
  </div> */}

    <img className="rounded img-thumbnail" src="/assets/images/sheep1.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep2.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep3.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep4.jpg" alt="" style={style.image} /><br></br>
    <img className="rounded img-thumbnail" src="/assets/images/sheep5.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep6.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep7.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep8.jpg" alt="" style={style.image} /><br></br>
    <img className="rounded img-thumbnail" src="/assets/images/sheep9.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep10.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep11.jpg" alt="" style={style.image} />
    <img className="rounded img-thumbnail" src="/assets/images/sheep12.jpg" alt="" style={style.image} />

</div>
);

export default ImageBox;