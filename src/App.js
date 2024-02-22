import React,{useState,useRef}  from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {


    const [posts, setPosts] = useState([
        {id:1, title:'JavaScript 1', body:'Конетент'},
        {id:2, title:'JavaScript 2', body:'Конетент'},
        {id:3, title:'JavaScript 3 ', body:'Конетент'},
    ]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">

        <PostForm create={createPost} />
        {posts.length !== 0
            ? <PostList remove ={removePost} posts={posts} title={'Посты про JS 👾 '}/>
            : <h1 style={{textAlign: 'center'}} >Посты небыли найдены 😅</h1>

        }


    </div>

  );
}

export default App;
