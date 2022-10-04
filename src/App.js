import React  from "react";
import constants from "./utilities/Constants";
import Constants  from "./utilities/Constants";
class App extends React.Component {  
 posts=[]
  constructor(){
    super();
  this.state={
     posts : [],
     count : 199
  };
}


  getPosts = async ()=> {
    let data = await fetch(Constants.API_BASE_URI_GET_ALL_POSTS, {
      method: "Get",
    });
    let result = await data.json();
   
    
   await this.setState((state) => {
      return {
       posts: result
      };
    });
    await console.log(this.state.posts);
   
  }

  deletePost =async (postId)=>{
   
    const url= constants.API_BASE_URI_POST_DELETE+"?id="+postId
    console.log(url)
    let data = await fetch(url, {
      method: "DELETE",
    });
    let result = await data.json();   
    this.getPosts();
   await this.setState((state) => {
      return {
       
      };
    });
  }
  render(){
  return (
     
    <div class="container">
      <div class="row min-vh-100">
        <div class="col d-flex flex-column justify-content-center align-items-center">
          <h1> Welcome to React App</h1>
          
          <button class="btn btn-secondary btn-lg mx-3 my-3" onClick={this.getPosts}>Get Data</button>
          {this.table()}
         
        </div>
      </div>
    </div>
    
  );
  }

   table =()=> {
    return (
      <table class="table table-bordered border-dark">
        <thead>
          <tr>
            <th scope="col">postId (PK)</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">CRUD Operations</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((fk) => (
            <tr key={fk.postId}>
              <th class="text-center align-middle" scope="row">
                {fk.postId}
              </th>
              <td class="text-center align-middle">{fk.title}</td>
              <td class="text-center align-middle">{fk.content}</td>
              <td class="d-flex justify-content-center ">
                <button class="btn btn-secondary btn-lg mx-3 my-3 ">
                  Update
                </button>
                <button class="btn btn-dark btn-lg mx-3 my-3 " onClick={()=>{
                  if(window.confirm(`Are you sure you want to delete "${fk.title}"`)) this.deletePost(fk.postId)
                }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
