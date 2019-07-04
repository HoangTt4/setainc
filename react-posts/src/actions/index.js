let nextPostId = 0;
export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response
        .json()
        .then(json => {
          json.sort((a, b) => b.id - a.id);
          dispatch(fetchPostsSuccess(json));
          nextPostId = json[0].id;
          return json;
        })
        .catch(error => dispatch(fetchPostsFailure(error)))
    );
  };
}

// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const ADD_POST = "ADD_POST";

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: { posts }
  };
};

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export const addPost = (title, body, userId) => ({
  type: ADD_POST,
  post: {
    id: ++nextPostId,
    title: title,
    body: body,
    userId: userId
  }
});
