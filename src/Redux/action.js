import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_PRESENT,
  GET_MENS_DATA,
  GET_MENS_REQUEST,
  GET_MENS_ERROR,
  GET_WOMENS_REQUEST,
  GET_WOMENS_DATA,
  GET_WOMENS_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_ERROR,
  DELETE_FROM_CART_ERROR,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_REQUEST,
  GET_FROM_CART_REQUEST,
  GET_FROM_CART_SUCCESS,
  GET_FROM_CART_ERROR,
  GET_FROM_WISHLIST_REQUEST,
  GET_FROM_WISHLIST_SUCCESS,
  GET_FROM_WISHLIST_ERROR,
  DELETE_FROM_WISHLIST_REQUEST,
  DELETE_FROM_WISHLIST_SUCCESS,
  DELETE_FROM_WISHLIST_ERROR,
  GET_ALL_MENS_DATA,
  GET_ALL_WOMENS_DATA,
} from "./actionType";

export const loginUser = (email, password, toast) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const res = await axios.get("https://clothy-api.onrender.com/users");
    const user = res.data.filter(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("User", JSON.stringify(user[0]));
      dispatch({ type: LOGIN_SUCCESS, payload: user[0] });
      toast({
        title: "Login Successful",
        description: "You're now logged in.",
        position: 'top',
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch({ type: LOGIN_FAIL });
      toast({
        title: "Account not found",
        description: "Please check your credentials and try again.",
        position: 'top',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
    toast({
      title: "An error occurred.",
      description: "Unable to log in. Please try again later.",
      status: "error",
      position: 'top',
      duration: 3000,
      isClosable: true,
    });
  }
};

export const registerUser = ({ name, email, password, phoneNumber, image, type }, toast) => async (dispatch) => {
  try {
    const res = await axios.get("https://clothy-api.onrender.com/users");
    const userExists = res.data.some(user => user.email === email);
    if (userExists) {
      dispatch({ type: USER_PRESENT });
      toast({
        title: "User Already Exist",
        description: "Please try with a new email!",
        position: 'top',
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch({ type: REGISTER_LOADING });
      await axios.post('https://clothy-api.onrender.com/users', { name, email, password, phoneNumber, image, type })
        .then(() => {
          dispatch({ type: REGISTER_SUCCESS });
          toast({
            title: "Registration successful!",
            description: "You can now log in.",
            position: 'top',
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch(() => {
          dispatch({ type: REGISTER_FAIL });
          toast({
            title: "Register Unsuccessful!",
            description: "Please check your details and try again.",
            position: 'top',
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
    toast({
      title: "An error occurred.",
      description: "Unable to register. Please try again later.",
      position: 'top',
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};

export const getMensData = (page = 1,filter="",sort="") => async (dispatch) => {
  dispatch({ type: GET_MENS_REQUEST });
  let queryParams = [];
  if(filter){queryParams.push(`category=${encodeURIComponent(filter)}`)}
  if(sort){queryParams.push(`_sort=price&_order=${encodeURIComponent(sort)}`)}
  if(page){queryParams.push(`_page=${page}&_limit=12`)}

  const queryString = queryParams.join("&")
  console.log(queryString);
  try {
    const res = await axios.get(`https://clothy-api.onrender.com/mens?${queryString}`);
    dispatch({ type: GET_MENS_DATA, payload: { data: res.data, totalMens: parseInt(res.headers["x-total-count"])}});
  } catch (err) {
    dispatch({ type: GET_MENS_ERROR });
  }
};

export const getAllMensData = () => async (dispatch) => {
  dispatch({ type: GET_MENS_REQUEST });
  try {
    const res = await axios.get(`https://clothy-api.onrender.com/mens`);
    dispatch({ type: GET_ALL_MENS_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_MENS_ERROR });
  }
};

export const getWomensData = (page = 1,filter="",sort="") => async (dispatch) => {
  dispatch({ type: GET_WOMENS_REQUEST });
  let queryParams = [];
  if(filter){queryParams.push(`category=${encodeURIComponent(filter)}`)}
  if(sort){queryParams.push(`_sort=price&_order=${encodeURIComponent(sort)}`)}
  if(page){queryParams.push(`_page=${page}&_limit=12`)}

  const queryString = queryParams.join("&")
  console.log(queryString);
  try {
    const res = await axios.get(`https://clothy-api.onrender.com/womens?${queryString}`);
    dispatch({ type: GET_WOMENS_DATA, payload: { data: res.data, totalWoMens: parseInt(res.headers["x-total-count"])}});
  } catch (err) {
    dispatch({ type: GET_WOMENS_ERROR });
  }
};

export const getAllWomensData = () => async (dispatch) => {
  dispatch({ type: GET_WOMENS_REQUEST });
  try {
    const res = await axios.get(`https://clothy-api.onrender.com/womens`);
    dispatch({ type: GET_ALL_WOMENS_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_WOMENS_ERROR });
  }
};

export const addToCart = (obj) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });
  try {
    const res = await axios.post(`https://clothy-api.onrender.com/cart`, { ...obj });
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: err.response?.data?.message });
  }
};

export const getCarts = (userId) => async (dispatch) => {
  dispatch({ type: GET_FROM_CART_REQUEST });
  try {
    const res = await axios.get(`https://clothy-api.onrender.com/cart?userId=${userId}`);
    console.log(res.data);
    dispatch({ type: GET_FROM_CART_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_FROM_CART_ERROR, payload: err.response?.data?.message });
  }
};

export const deleteFromCart = (id, userId) => async (dispatch) => {
  dispatch({ type: DELETE_FROM_CART_REQUEST });
  try {
    await axios.delete(`https://clothy-api.onrender.com/cart/${id}`);
    getCarts(userId)(dispatch);
    dispatch({ type: DELETE_FROM_CART_SUCCESS });
  } catch (err) {
    dispatch({ type: DELETE_FROM_CART_ERROR, payload: err.response?.data?.message });
  }
};

export const addToWishlist = (obj) => async (dispatch) => {
  dispatch({ type: ADD_TO_WISHLIST_REQUEST });
  try {
    const res = await axios.post(`https://clothy-api.onrender.com/wishlist`, { ...obj });
    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADD_TO_WISHLIST_ERROR });
  }
};

export const getWishlists = (userId) => async (dispatch) => {
  dispatch({ type: GET_FROM_WISHLIST_REQUEST });
  try {
    const res = await axios.get(`https://clothy-api.onrender.com/wishlist?userId=${userId}`);
    dispatch({ type: GET_FROM_WISHLIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_FROM_WISHLIST_ERROR, payload: err.response?.data?.message });
  }
};

export const deleteFromWishlist = (id, userId) => async (dispatch) => {
  dispatch({ type: DELETE_FROM_WISHLIST_REQUEST });
  try {
    await axios.delete(`https://clothy-api.onrender.com/wishlist/${id}`);
    getWishlists(userId)(dispatch);
    dispatch({ type: DELETE_FROM_WISHLIST_SUCCESS });
  } catch (err) {
    dispatch({ type: DELETE_FROM_WISHLIST_ERROR, payload: err.response?.data?.message });
  }
};