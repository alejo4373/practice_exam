import React from 'react'
import axios from 'axios'
import Post from './Post'

export default class Posts extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          posts: [],
        
        }

    }

    componentDidMount(){
      this.getPosts();
    }

    getPosts = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
              this.setState({
                posts: res.data
              })
            })
    }

    getComments = () => {

    }

    renderPostContentList = () => {
      let postContentList =  this.state.posts.map(post => {
        return (
         <Post post={post}/>
        )
      })
      return postContentList
    }
        
    render(){
      return(
        <>
        <h1>Posts</h1>
        <div>
          {this.renderPostContentList()}
        </div>
        </>
      )
      
    }
}
