const API_BASE_URI_DEVELOPMENT = 'https://localhost:7061';
const API_BASE_URI_PRODUCTION ='https://localhost:7061'

const ENDPOINTS ={

    GET_ALL_POSTS :'get-all-posts',
    POST_DELETE:'post-delete',
}

const development ={
    API_BASE_URI_GET_ALL_POSTS : `${API_BASE_URI_DEVELOPMENT}/${ENDPOINTS.GET_ALL_POSTS}`,
    API_BASE_URI_POST_DELETE : `${API_BASE_URI_DEVELOPMENT}/${ENDPOINTS.POST_DELETE}`,
}

const production ={
    API_BASE_URI_GET_ALL_POSTS : `${API_BASE_URI_PRODUCTION}/${ENDPOINTS.GET_ALL_POSTS}`,
    API_BASE_URI_POST_DELETE : `${API_BASE_URI_PRODUCTION}/${ENDPOINTS.POST_DELETE}`,
}

const constants = process.env.NODE_ENV==='development'? development : production;

export default constants
