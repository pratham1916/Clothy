import axios from "axios";
import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_WHITE_LIST_ERROR,
  ADD_TO_WHITE_LIST_REQUEST,
  ADD_TO_WHITE_LIST_SUCCESS,
  DELELE_TO_CART_ERROR,
  DELETE_TO_CART_REQUEST,
  DELETE_TO_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_MENS_DATA,
  GET_MENS_ERROR,
  GET_MENS_REQUEST,
  GET_WHITE_LIST_ERROR,
  GET_WHITE_LIST_REQUEST,
  GET_WHITE_LIST_SUCCESS,
  GET_WOMENS_DATA,
  GET_WOMENS_ERROR,
  GET_WOMENS_REQUEST,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  USER_PRESENT,
} from "./actionType";

export const getMensRequest = () => {
  return { type: GET_MENS_REQUEST };
};
export const getMensData = (payload) => {
  return { type: GET_MENS_DATA, payload };
};
export const getMensError = () => {
  return { type: GET_MENS_ERROR };
};
//---------
export const getWoMensData = (payload) => {
  return { type: GET_WOMENS_DATA, payload };
};
export const getWoMensRequest = () => {
  return { type: GET_WOMENS_REQUEST };
};
export const getWoMensError = () => {
  return { type: GET_WOMENS_ERROR };
};


export const LoginUser = (email, password, toast) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const res = await axios.get("https://clothy-api.onrender.com/users");
    const user = res.data.filter(user => user.email === email && user.password === password);

    if (user.length == 1) {
      localStorage.setItem("Users", JSON.stringify(user[0]));
      dispatch({ type: LOGIN_SUCCESS });
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
    console.log("Error:", error);
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

export const RegisterUser = ({ name, email, password, phoneNumber, image, type }, toast) => async (dispatch) => {
  try {
    const res = await axios.get("https://clothy-api.onrender.com/users");
    const user = res.data.filter(user => {
      if (user?.email && user.email === email) {
        return true;
      }
    });
    if (user.length == 1) {
      dispatch({ type: USER_PRESENT })
      toast({
        title: "User Already Exist",
        description: "Please try with new email!",
        position: 'top',
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch({ type: REGISTER_LOADING });
      await axios.post('https://clothy-api.onrender.com/users', { name, email, password, phoneNumber, image, type })
        .then((res) => {
          dispatch({ type: REGISTER_SUCCESS })
          toast({
            title: "Registration successful!",
            description: "You can Login Now!",
            position: 'top',
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch(err => {
          dispatch({ type: REGISTER_FAIL }),
            toast({
              title: "Register Unsuccessful!",
              description: "Please check your credentials and try again.",
              position: 'top',
              status: "error",
              duration: 3000,
              isClosable: true,
            });
        })
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAIL }),
      toast({
        title: "An error occurred.",
        description: "Unable to Register! Please try again later.",
        position: 'top',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
  }
}

export const getData =
  (page = 1) =>
    async (dispatch) => {
      try {
        dispatch(getMensRequest());

        const res = await axios.get(`https://clothy-api.onrender.com/mens?_page=${page}&_limit=12`);

        dispatch(getMensData({ data: res.data, totalMens: res.headers.get("x-total-count") }));
      } catch (err) {
        dispatch(getMensError());
        console.log(err);
      }
    };

export const getWomansData =
  (page = 1) =>
    async (dispatch) => {
      try {
        dispatch(getWoMensRequest());

        const res = await axios.get(
          `https://clothy-api.onrender.com/womens?_page=${page}&_limit=12`
        );
        console.log(res);
        console.log(res.data, "women data");
        console.log(res.headers, " women line 63");
        console.log(res.headers.get("x-total-count"));
        dispatch(getWoMensData({ data: res.data, totalWoMens: res.headers.get("x-total-count") }));
      } catch (err) {
        dispatch(getWoMensError());
        console.log(err);
      }
    };

// add to cart

const AddToCartRequest = () => {
  return { type: ADD_TO_CART_REQUEST }
}
const AddToCartSuccess = (payload) => {
  return { type: ADD_TO_CART_SUCCESS, payload }
}

const AddToCartError = () => {
  return { type: ADD_TO_CART_ERROR }
}
const DeleteToCartRequest = () => {
  return { type: DELETE_TO_CART_REQUEST }
}
const DeleteToCartSuccess = (payload) => {
  return { type: DELETE_TO_CART_SUCCESS, payload }
}
const DeleteToCartError = () => {
  return { type: DELELE_TO_CART_ERROR }
}

export const addToCart = (obj, userId) => async (dispatch) => {
  try {
    dispatch(AddToCartRequest())
    let res = await axios.post(`https://clothy-api.onrender.com/cart/`, { ...obj, userId });
    console.log(res.data, "line 92");
    dispatch(AddToCartSuccess({ data:{...res.data, id: res.id},totleCart:res.headers.get("x-total-count") }))

  } catch (err) {
    console.log("line 95", err)
    dispatch(AddToCartError())
  }
}

export const deleteToCart = (id) => async (dispatch) => {
  try {
    dispatch(DeleteToCartRequest())
    let res = await axios.delete(`https://clothy-api.onrender.com/cart/${id}`);
    console.log(res.data, "line delete to cart");
    dispatch(DeleteToCartSuccess({ data:{...res.data, id: res.id},totleCart:res.headers.get("x-total-count") }))

  } catch (err) {
    console.log("line 95", err)
    dispatch(DeleteToCartError())
  }
}

export const getCartRequest = () => {
  return { type: GET_CART_REQUEST }
}
export const getCartSuccess = (payload) => {
  return { type: GET_CART_SUCCESS, payload }
}

export const getCartError = () => {
  return { type: GET_CART_ERROR }
}

export const getCarts = (id = 1) => async (dispatch) => {
  try {
    dispatch(getCartRequest())
    let res = await axios.get(`https://clothy-api.onrender.com/cart`);
    const cart = res.data.filter(cart => cart.userId === id);
    console.log(res.data, "line 92");
    console.log(cart)
    dispatch(getCartSuccess(cart))
  } catch (err) {
    console.log("line 95", err)
    dispatch(getCartError())
  }
}

export const AddWhiteListRequest = () => {
  return { type: ADD_TO_WHITE_LIST_REQUEST }
}
export const AddToWhileListSuccess = (payload) => {
  return { type: ADD_TO_WHITE_LIST_SUCCESS, payload }
}

export const AddToWhileListError = () => {
  return { type: ADD_TO_WHITE_LIST_ERROR }
}

export const addToWhiteList = (obj, userId) => async (dispatch) => {
  try {
    dispatch(AddWhiteListRequest())
    let res = await axios.post(`https://clothy-api.onrender.com/wishList`, { ...obj, userId });
    console.log(res.data, "line 92");
    dispatch(AddToWhileListSuccess({ ...res.data, id: res.data.id }))
  } catch (err) {
    console.log("line 95", err)
    dispatch(AddToWhileListError())
  }
}




export const getWhitelistRequest = () => {
  return { type: GET_WHITE_LIST_REQUEST }
}
export const getWhitelistSuccess = (payload) => {
  return { type: GET_WHITE_LIST_SUCCESS, payload }
}

export const getWhitelistError = () => {
  return { type: GET_WHITE_LIST_ERROR }
}


export const getWhiteLists = (id = 1) => async (dispatch) => {
  try {
    dispatch(getWhitelistRequest())
    let res = await axios.get(`https://clothy-api.onrender.com/wishlist`);
    const wishlist = res.data.filter(cart => cart.userId === id);
    console.log(res.data, "line 92");
    console.log(wishlist);
    dispatch(getWhitelistSuccess(wishlist))
  } catch (err) {
    console.log("line 95", err)
    dispatch(getWhitelistError())
  }
}