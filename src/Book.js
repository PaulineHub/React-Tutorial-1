import React from 'react'

// const Book = ({img, title, author}) => {
const Book = (props) =>{
  const {img, title, author} = props.book;
  console.log(props);
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert('Hello');
    };
    const complexExemple = (author) => {
      console.log(author)
    }
    return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Click here</button>
      <button type="button" onClick={() => complexExemple(author)}>more complex exemple</button>
    </article>
  );
}

export default Book
