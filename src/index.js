import ReactDOM from 'react-dom';
import React from 'react';

import App from "./App";

const book = {
  "title": "Practical Object-Oriented Design in Ruby: An Agile Primer (Addison-Wesley Professional Ruby)",
  "description": "Ruby’s widely admired ease of use has a downside: Too many Ruby and Rails applications have been created without concern for their long-term maintenance or evolution. The Web is awash in Ruby code that is now virtually impossible to change or extend. This text helps you solve that problem by using powerful real-world object-oriented design techniques, which it thoroughly explains using simple and practical Ruby examples.",
  "pages": 243,
  "language": "en",
  "progress": 87,
  "cover": "https://images-na.ssl-images-amazon.com/images/I/51vkmxCfmRL._SX381_BO1,204,203,200_.jpg",
  "author_id": 1,
  "min_price": 12.65,
  "desired_price": 31.99,
  "current_sum": 50000,
  "expected_sum": 800000
}

const author = {
  "id": 1,
  "name": "Sandi Metz",
  "email": "sandi.metz@gmail.com",
  "avatar": "https://miro.medium.com/max/700/1*73UrcWu-hxeOU7DGeawe1w.jpeg",
  "description": "A programmer. In the past 30+ years he has written innumerable applications, many of which are still running today. Dealing with long lived applications has left him deeply biased towards practical solutions that produce working software that is easy to change"
}

ReactDOM.render(
  <App author={author} book={book}/>,
  document.getElementById('root')
);
