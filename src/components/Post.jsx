import React from "react";

// const Post = () => {
const Post = props => {
    const {pic} = props;
   const { author, quote } = props.quote;

  return (
    <div className="container">
      <div className="poster">
            <img alt="lion picture" src={pic}/>

        <p className="quote">{quote}</p>
        <hr />
        {/* string interpolation with `` and ${}  alt solutions below */}
        {/* <p className="author">{` - ${author}`}</p> */}
        <p className="author"> - {author}</p>
      </div>
    </div>
  );
};

export default Post;
