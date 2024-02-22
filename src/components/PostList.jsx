import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>

            {posts.map((post, index) =>
                <PostItem remove = {remove} key={post.id} post={post} number={index+1}/>
            )}

        </div>
    );
};

export default PostList;