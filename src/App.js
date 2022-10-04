import React,{useState}  from "react";

function App () {  
  
 const [posts, setPosts] = useState([]);


function getPosts (){ 
  const url = "https://localhost:7061/get-all-posts";

  fetch(url, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(postsFromServer => {
      setPosts(postsFromServer);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}


  return (     
    <div class="container">
      <div class="row min-vh-100">
        <div class="col d-flex flex-column justify-content-center align-items-center">
          <h1> Welcome to React App</h1>
          
          <button class="btn btn-secondary btn-lg mx-3 my-3" onClick={getPosts}>Get Data</button>
          {table()}
         
        </div>
      </div>
    </div>    
  );
  

   function table() {
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
          {posts.map((fk) => (
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
