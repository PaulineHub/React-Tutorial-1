import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'

//variables
const firstBook = {
  img:"https://m.media-amazon.com/images/I/81T2u+-6MaL._AC_UL320_.jpg",
  title: `American Dirt (Oprah's Book Club): A Novel`,
  author: 'Jeanine Cummins'
};
const secondBook = {
  img:"https://m.media-amazon.com/images/I/71qW6WJewmL._AC_UL320_.jpg",
  title: `The Handmaid's Tale`,
  author: 'Margaret Atwood'
}


function Booklist() {
  return (
  <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio, magni, ratione vel doloribus accusantium iure quisquam quas sunt nesciunt quos nisi sequi?</p>
    </Book>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
}

ReactDom.render(<Booklist/>,document.getElementById('root'));