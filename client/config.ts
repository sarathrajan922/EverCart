const BASE_URL = 'http://localhost:8800/api/';

export const urls = {
    USER_REGISTER : 'auth/signup',
    USER_LOGIN : 'auth/login',
    CREATE_QUIZ : 'user/quiz',
    RAZORPAY: 'user/razorpay',
    RAZORPAY_VERIRY_PAYMENT: 'user/verifyPayment',
    FETCH_ALL_QUIZ_DATA:'user/getAllQuizData',
    FETCH_QUIZ : 'user/getQuiz/',
    ADD_QUIZ_RESULT: 'user/addQuizResult',
    FETCH_RESULTS: 'user/getQuizResults',
    GET_USER :'user/getUser'
}

export default BASE_URL;

