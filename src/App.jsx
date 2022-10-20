import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [posts, setPosts] = useState([])

  const post = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = resp.data;
    setData(data)
    // console.log(data)
  };

  useEffect(() => {
    post()
  }, [])
  console.log(data) //Use state

  const handleDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => console.log('Deleted', res))
    .catch(err => console.log(err))
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody className="tbody bg-secondary">
          {
            data.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.body}</td>
                  <td><button className="del" onClick={(e) => handleDelete(data.id, e)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
