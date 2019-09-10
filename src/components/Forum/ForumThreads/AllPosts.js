import React from 'react';
import {useSelector} from 'react-redux';
import Title from '../TopicElements/Title';
import Author from '../TopicElements/Author';

const Pinned = () => {
    const posts = useSelector(state => state.forum.posts)
    const pinned = useSelector(state => state.forum.pinned)
    return(
      <>
      <div className="card">
        <div className="card-header pb-0">
          <h5>Posts destacados</h5>
        </div>
        <div className="card-body p-0">
        <table className="table table-striped mb-0">
          <tbody>
              {pinned && pinned.map(post => {
              return <tr key={post.id}>
                <th scope="row">-</th>
                <td className=""><Title title={post.title}></Title></td>
                <td className="align-middle text-center"><Author author={post.author.name} club=""></Author></td>
                <td>{post.total_responses}</td>
              </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mt-2">
      <div className="card-header pb-0">
        <h5>Últimos posts</h5>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped mb-0">
            <tbody>
              {posts && posts.map((post) => {
              return <tr key={post.id}>
                <th scope="row">-</th>
                <td className=""><Title title={post.title}></Title></td>
                <td className="align-middle text-center"><Author author={post.author.name} club=""></Author></td>
                <td>{post.total_responses}</td>
              </tr>
              })}
            </tbody>
          </table>
      </div>
    </div>
    </>
    )
}

export default Pinned;