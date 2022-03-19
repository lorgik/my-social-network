import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hello, how to you?', likesCount: '15'},
        {id: 2, message: "It's my second post!", likesCount: '21'},
    ]
};

test('length of posts should be incremented', () => {
    let action = addPost('Hello World');
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);

});

test('message of new post should be correct', () => {
    let action = addPost('Hello World');
    let newState = profileReducer(state, action);

    expect(newState.postsData[2].message).toBe('Hello World');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(1);
});

test(`after deleting length of messages shouldn't be decrement if id be correct`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(2);
});

