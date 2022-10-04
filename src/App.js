import React  from "react";

class App extends React.Component {  
 posts=[]
  constructor(){
    super();
  this.state={
     posts : [],
     count : 199
  };
}


  shit = async ()=> {
    let data = await fetch("https://localhost:7061/get-all-posts", {
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

 
  render(){
  return (
     
    <div class="container">
      <div class="row min-vh-100">
        <div class="col d-flex flex-column justify-content-center align-items-center">
          <h1> Welcome to React App</h1>
          
          <button class="btn btn-secondary btn-lg mx-3 my-3" onClick={this.shit}>Get Data</button>
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
                <button class="btn btn-dark btn-lg mx-3 my-3 ">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
