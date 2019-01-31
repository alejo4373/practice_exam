import React from 'react'
import axios from 'axios'

export default class Post extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      comments: [],

    }

    

  }

  getComments = () => {

    let url = `https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`
    axios.get(url)
          .then(res=>{
            console.log(res)

            this.setState({
              comments: res.data
            })
          })
  }

  componentDidMount(){
    this.getComments()
  }

  renderPostComments = () =>{
    let postComments = this.state.comments.map(comment=>{
      return(
        <li><strong>{comment.name}</strong> : {comment.body}</li>
      )
    })

    return postComments
  }

    render (){
      const { title, body } = this.props.post
    return (
      <>
       <div >
            <h2>{title}</h2>
            <p>{body}</p>
            
      </div>
      <ul>
          {this.renderPostComments()}
      </ul>
    </>
    )
    }
  
}

