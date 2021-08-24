import { CHANGE_AVATAR, 
    CHANGE_CONFIRM_PASSWORD, 
    CHANGE_EMAIL, 
    CHANGE_END_COLOR, 
    CHANGE_INPUT, 
    SIGNUP_NAME, 
    CHANGE_NEW_PASSWORD, 
    CHANGE_OLD_PASSWORD, 
    CHANGE_PASSWORD, 
    CHANGE_ROUTE, 
    CHANGE_START_COLOR,
    TOGGLE_MODAL_STATE_GI, 
    TOGGLE_MODAL_STATE_PIC, 
    TOGGLE_MODAL_STATE_RD,
    TOGGLE_MODAL_STATE_RP,
    SIGNUP_EMAIL,
    SIGNUP_PASSWORD, 
    REQUEST_SIGNIN_PENDING,
    SIGNIN_API,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    SIGNUP_API,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_IMAGE_PENDING,
    IMAGE_API,
    REQUEST_IMAGE_FAILED,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_FACES_PENDING,
    FACE_DETECT_API,
    REQUEST_FACES_FAILED,
    REQUEST_FACES_SUCCESS,
    UPDATE_GENERAL_INFO_PENDING,
    UPDATE_USER_API,
    UPDATE_GENERAL_INFO_FAILED,
    UPDATE_GENERAL_INFO_SUCCESS,
    UPDATE_PASSWORD_API,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILED,
    REQUEST_SIGNUP_FAILED,
    REQUEST_SIGNUP_PENDING,
    // SIGNIN_API_LOCAL,
    // SIGNUP_API_LOCAL,
    // IMAGE_API_LOCAL,
    // FACE_DETECT_API_LOCAL,
    // UPDATE_USER_API_LOCAL,
    // UPDATE_PASSWORD_API_LOCAL,
    // UPDATE_PERSONALIZATION_API_LOCAL,
    // UPDATE_AVATAR_API_LOCAL,
    TOGGLE_MODAL_STATE_PER,
    CHANGE_IMAGE_URL,
    UPDATE_PERSONALIZATION_API,
    UPDATE_AVATAR_API,
    SIGN_OUT_USER} from './Constants';

export const routeChange = (text) => ({
    type: CHANGE_ROUTE,
    payload: text
})

export const signoutUser = () => ({
    type: SIGN_OUT_USER
})

export const inputChange = (text) => ({
    type: CHANGE_INPUT,
    payload: text
})

export const imageURLChange = (text) => ({
    type: CHANGE_IMAGE_URL,
    payload: text
})

export const nameChangeSignup = (text) => ({
    type: SIGNUP_NAME,
    payload: text
})

export const emailChange = (text) => ({
    type: CHANGE_EMAIL,
    payload: text
})

export const passwordChange = (text) => ({
    type: CHANGE_PASSWORD,
    payload: text
})

export const emailChangeSignup = (text) => ({
    type: SIGNUP_EMAIL,
    payload: text
})

export const passwordChangeSignup = (text) => ({
    type: SIGNUP_PASSWORD,
    payload: text
})

export const toggleGIModal = () => ({
    type: TOGGLE_MODAL_STATE_GI
})

export const togglePerModal = () => ({
    type: TOGGLE_MODAL_STATE_PER
})

export const toggleRDModal = () => ({
    type: TOGGLE_MODAL_STATE_RD
})

export const toggleRPModal = () => ({
    type: TOGGLE_MODAL_STATE_RP
})

export const togglePicModal = () => ({
    type: TOGGLE_MODAL_STATE_PIC
})

export const changeStartColor = (text) => ({
    type: CHANGE_START_COLOR,
    payload: text
})

export const changeEndColor = (text) => ({
    type: CHANGE_END_COLOR,
    payload: text
})

export const changeNewPassword = (text) => ({
    type: CHANGE_NEW_PASSWORD,
    payload: text
})

export const changeOldPassword = (text) => ({
    type: CHANGE_OLD_PASSWORD,
    payload: text
})

export const changeConfirmPassword = (object) => ({
    type: CHANGE_CONFIRM_PASSWORD,
    payload: object
})

export const changeAvatar = (text) => ({
    type: CHANGE_AVATAR,
    payload: text
})

export const signin = (email, password, toRoute) => (dispatch) => {
    dispatch({type: REQUEST_SIGNIN_PENDING})
    fetch(SIGNIN_API, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(Response => {
        return Response.json();
    }).then(data => {
        if (data === "Invalid Email or Password" ||
            data === "Error Logging in. Please check your network and try again") {
                dispatch({type: REQUEST_SIGNIN_FAILED, payload: data});
        } else {
            dispatch({type: REQUEST_SIGNIN_SUCCESS, payload: data});
            dispatch(routeChange(toRoute));
        }
    }).catch(error => {
        dispatch({type: REQUEST_SIGNIN_FAILED, payload: error})
    });
}

export const signup = (name, email, password) => (dispatch) => {
    dispatch({type: REQUEST_SIGNUP_PENDING})
    fetch(SIGNUP_API, { 
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data === "The email already exists." || data === "All fields are Mandatory. Please fill!") {
            dispatch({type: REQUEST_SIGNUP_FAILED, payload: data});
        } else {
            dispatch({type: REQUEST_SIGNUP_SUCCESS, payload: data});
            dispatch(routeChange('home'));
        }
    }).catch(e => {
        dispatch({type: REQUEST_SIGNUP_FAILED, payload: e+"\r\nServer could be down due to maintanance.\r\nTry again after sometime.\r\nElse try after troubleshooting your network connection"})
    });
}

export const image = (user, input) => (dispatch) => {
    dispatch({type: REQUEST_IMAGE_PENDING})
    fetch(IMAGE_API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": user.id})
    }).then(Response => {
      if (Response.status === 200) {
        return Response.json();
      } else {
        return -1;
      }
    }).then(user => {
      if (user === -1) {
        dispatch({type: REQUEST_IMAGE_FAILED, payload: "Server unresponsive. Please check your internet connection as first troubleshooting measure. Try again after sometime"})
      } else {
        dispatch({type: REQUEST_IMAGE_SUCCESS, payload: user})
        dispatch(imageURLChange(input))
      }
    }).catch(error => {
        dispatch({type: REQUEST_IMAGE_FAILED, payload: error})
    });
    dispatch(routeChange('home'));
}

export const getFaces = (imageUrl) => (dispatch) => {
    dispatch({type: REQUEST_FACES_PENDING})
    fetch(FACE_DETECT_API, {
        method: 'POST', 
        headers: {
        'content-type': 'application/json'
        }, 
        body: JSON.stringify({"imgURL": imageUrl})
    }).then(res=>{
        if(res.status === 200){
        return res.json();
        } else {
        return -1;
        }
    }).then(faces=>{
        if(faces===-1){
        dispatch({type: REQUEST_FACES_FAILED, payload: "Server is not responsive. Please check your internet and try again"});
        } else{
        dispatch({type: REQUEST_FACES_SUCCESS, payload: faces})
        }
    }).catch(error => {
        dispatch({type: REQUEST_FACES_FAILED, payload: error})
    })
}

export const updateUser = (userInfo, name, email) => (dispatch) => {
    dispatch({type: UPDATE_GENERAL_INFO_PENDING})
    fetch(UPDATE_USER_API, { 
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: userInfo.id,
            name: name,
            email: email
        })
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data === "The email already exists." || data === "All fields are Mandatory. Please fill!" || data === "Invalid request. Please contact support") {
            dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: data});
        } else {
            dispatch({type: UPDATE_GENERAL_INFO_SUCCESS, payload: data});
            dispatch(toggleGIModal());
        }
    }).catch(e => {
        dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: e+"\r\nServer could be down due to maintanance.\r\nTry again after sometime.\r\nElse try after troubleshooting your network connection"})
    });
}

export const updatePassword = (userInfo, oldPassword, newPassword) => (dispatch) => {
    dispatch({type: UPDATE_GENERAL_INFO_PENDING})
    fetch(UPDATE_PASSWORD_API, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: userInfo.id,
            oldPassword: oldPassword,
            newPassword: newPassword
        })
    }).then(Response => {
        return Response.json();
    }).then(data => {
        if (data === "Success") {
            dispatch({type: UPDATE_PASSWORD_SUCCESS, payload: data});
            dispatch(toggleRPModal());
        } else {
            dispatch({type: UPDATE_PASSWORD_FAILED, payload: data});
        }
    }).catch(error => {
        dispatch({type: UPDATE_PASSWORD_FAILED, payload: error})
    });
}

export const setBGTheme = (userInfo, startColor, endColor) => (dispatch) =>{
    dispatch({type: UPDATE_GENERAL_INFO_PENDING})
    fetch(UPDATE_PERSONALIZATION_API, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: userInfo.id,
            startColor: startColor,
            endColor: endColor
        })
    }).then(Response => {
        return Response.json();
    }).then(data => {
        if (data === "Internal Server Error. Please contact support!" || data === "Operation failed. Please check your internet connection") {
            dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: data});
        } else {
            dispatch({type: UPDATE_GENERAL_INFO_SUCCESS, payload: data});
            dispatch(togglePerModal());
        }
    }).catch(error => {
        dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: error});
    });
}

export const resetBGTheme = (userInfo) => (dispatch) =>{
    dispatch({type: UPDATE_GENERAL_INFO_PENDING})
    fetch(UPDATE_PERSONALIZATION_API, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: userInfo.id,
            startColor: "#859398",
            endColor: "#283048"
        })
    }).then(Response => {
        return Response.json();
    }).then(data => {
        if (data === "Internal Server Error. Please contact support!" || data === "Operation failed. Please check your internet connection") {
            dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: data});
        } else {
            dispatch({type: UPDATE_GENERAL_INFO_SUCCESS, payload: data});
            dispatch(toggleRDModal());
        }
    }).catch(error => {
        dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: error});
    });
}

export const setProfileAvatar = (userInfo, avatar) => (dispatch) => {
    dispatch({type: UPDATE_GENERAL_INFO_PENDING})
    fetch(UPDATE_AVATAR_API, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: userInfo.id,
            avatarId: avatar
        })
    }).then(Response => {
        return Response.json();
    }).then(data => {
        if (data === "Internal Server Error. Please contact support!" || data === "Operation failed. Please check your internet connection") {
            dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: data});
        } else {
            dispatch({type: UPDATE_GENERAL_INFO_SUCCESS, payload: data});
            dispatch(togglePicModal());
        }
    }).catch(error => {
        dispatch({type: UPDATE_GENERAL_INFO_FAILED, payload: error});
    });
}