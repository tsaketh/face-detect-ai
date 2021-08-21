import { CHANGE_AVATAR, 
    CHANGE_CONFIRM_PASSWORD, 
    CHANGE_EMAIL,
    CHANGE_END_COLOR,
    CHANGE_IMAGE_URL,
    CHANGE_INPUT,
    CHANGE_NEW_PASSWORD, 
    CHANGE_OLD_PASSWORD, 
    CHANGE_PASSWORD, 
    CHANGE_ROUTE, 
    CHANGE_START_COLOR,
    REQUEST_FACES_FAILED,
    REQUEST_FACES_PENDING,
    REQUEST_FACES_SUCCESS,
    REQUEST_IMAGE_FAILED,
    REQUEST_IMAGE_PENDING,
    REQUEST_IMAGE_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNUP_FAILED,
    REQUEST_SIGNUP_PENDING,
    REQUEST_SIGNUP_SUCCESS,
    SIGNUP_EMAIL, 
    SIGNUP_NAME, 
    SIGNUP_PASSWORD, 
    SIGN_OUT_USER, 
    TOGGLE_MODAL_STATE_GI, 
    TOGGLE_MODAL_STATE_PER, 
    TOGGLE_MODAL_STATE_PIC, 
    TOGGLE_MODAL_STATE_RD, 
    TOGGLE_MODAL_STATE_RP,
    UPDATE_GENERAL_INFO_FAILED,
    UPDATE_GENERAL_INFO_PENDING,
    UPDATE_GENERAL_INFO_SUCCESS,
    UPDATE_PASSWORD_FAILED,
    UPDATE_PASSWORD_SUCCESS
} from './Constants';

const InitialInput = {
    input: ''
}

export const onInputChange = (state=InitialInput, action={}) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return Object.assign({}, state, {input: action.payload});
        default:
            return state;
    }
}

const InitialImage = {
    imageURL: ''
}

export const onImageURLChange = (state=InitialImage, action={}) => {
    switch (action.type) {
        case CHANGE_IMAGE_URL:
            return Object.assign({}, state, {imageURL: action.payload});
        default:
            return state;
    }
}

const InitialRoute = {
    route: 'signin'
}

export const onRouteChange = (state=InitialRoute, action={}) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, {route: action.payload});
        default:
            return state;
    }
}

const InitialEmail = {
    email: '',
    emailError: ''
}

export const onEmailChange = (state=InitialEmail, action={}) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case SIGNUP_EMAIL:
            if (action.payload.trim().length<=0) {
                return Object.assign({}, state, {emailError: "Email cannot be empty\r\nAll spaces are not allowed"});
            } else if (action.payload.match(/^[a-zA-Z0-9.]+@([a-zA-Z]+\.[a-zA-Z]{2,})$/) === null) {
                return Object.assign({}, state, {emailError: "Invalid email format"});
            } else {
                return Object.assign({}, state, {email: action.payload, emailError: ""});
            }
        default:
            return state;
    }
}

const InitialPassword = {
    password: '',
    passwordError: ''
}

export const onPasswordChange = (state=InitialPassword, action={}) => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        case SIGNUP_PASSWORD:
            if(action.payload.trim().length<=8 &&
                (action.payload.match(/[^a-zA-Z0-9]+/) === null || 
                action.payload.match(/[0-9]+/) === null || 
                action.payload.match(/[A-Z]+/) === null || 
                action.payload.match(/[a-z]+/) === null
                )) {
            return Object.assign({}, state, {passwordError: "Please enter a secure password with more than 8 characters having atleast one special character, one Upper case, one Lower case letter and a digit"});
            } else if (action.payload.trim().length<=8) {
                return Object.assign({}, state, {passwordError: "Password should contain more than 8 characters"});
            } else if (action.payload.match(/[^a-zA-Z0-9]+/) === null || 
                        action.payload.match(/[0-9]+/) === null || 
                        action.payload.match(/[A-Z]+/) === null || 
                        action.payload.match(/[a-z]+/) === null
                        ) {
                            return Object.assign({}, state, {passwordError: "Password should contain atleast one special character, one Upper case, one Lower case letter and a digit"});
            } else {        
                return Object.assign({}, state, {password: action.payload, passwordError: ""});
            }
        default:
            return state;
    }
}

const InitialName = {
    name: '',
    nameError: ''
}

export const onNameChange = (state = InitialName, action = {}) => {
    switch (action.type) {
        case SIGNUP_NAME:
            if (action.payload.trim().length<=0) {
                return Object.assign({}, state, {nameError: "Name cannot be empty\r\nAll spaces are not allowed"});
            } else {
                return Object.assign({}, state, {name: action.payload, nameError: ""});
            }
        default:
            return state;
    }
}

const InitialModalStates = {
    modalStateGI: false,
    modalStatePer: false,
    modalStateRD: false,
    modalStateRP: false,
    modalStatePic: false
}

export const triggerModal = (state=InitialModalStates, action={}) => {
    switch (action.type) {
        case TOGGLE_MODAL_STATE_GI:
            return Object.assign({}, state, {modalStateGI: !state.modalStateGI});
        case TOGGLE_MODAL_STATE_PIC:
            return Object.assign({}, state, {modalStatePic: !state.modalStatePic});
        case TOGGLE_MODAL_STATE_PER:
            return Object.assign({}, state, {modalStatePer: !state.modalStatePer});
        case TOGGLE_MODAL_STATE_RD:
            return Object.assign({}, state, {modalStateRD: !state.modalStateRD});
        case TOGGLE_MODAL_STATE_RP:
            return Object.assign({}, state, {modalStateRP: !state.modalStateRP});
        default:
            return state;
    }
}

const InitialOldPassword = {
    oldPassword: ''
}

export const onOldPasswordChange = (state = InitialOldPassword, action = {}) => {
    switch (action.type) {
        case CHANGE_OLD_PASSWORD:
            return Object.assign({}, state, {oldPassword: action.payload});
        default:
            return state;
    }
}

const InitialStatePasswordUpdate = {
    newPassword: '',
    confirmPassword: '',
    passwordUpdateErrors: ''
}

export const onNewPasswordChange = (state = InitialStatePasswordUpdate, action = {}) => {
    switch (action.type) {
        case CHANGE_NEW_PASSWORD:
            if(action.payload.trim().length<=8 &&
                (action.payload.match(/[^a-zA-Z0-9]+/) === null || 
                action.payload.match(/[0-9]+/) === null || 
                action.payload.match(/[A-Z]+/) === null || 
                action.payload.match(/[a-z]+/) === null
                )) {
                return Object.assign({}, state, {passwordUpdateErrors: "Please enter a secure password with more than 8 characters having atleast one special character, one Upper case, one Lower case letter and a digit"});
            } else if (action.payload.trim().length<=8) {
                return Object.assign({}, state, {passwordUpdateErrors: "Password should contain more than 8 characters"});
            } else if (action.payload.match(/[^a-zA-Z0-9]+/) === null || 
                        action.payload.match(/[0-9]+/) === null || 
                        action.payload.match(/[A-Z]+/) === null || 
                        action.payload.match(/[a-z]+/) === null
                        ) {
                            return Object.assign({}, state, {passwordUpdateErrors: "Password should contain atleast one special character, one Upper case, one Lower case letter and a digit"});
            } else {        
                return Object.assign({}, state, {newPassword: action.payload, passwordUpdateErrors: ""});
            }
        case CHANGE_CONFIRM_PASSWORD:
            if (action.payload.trim().length>0 && action.payload !== state.newPassword) {
                return Object.assign({}, state, {passwordUpdateErrors: "Password does not match with new password!"});
            } else {
                return Object.assign({}, state, {confirmPassword: action.payload, passwordUpdateErrors: ""});
            }
        default:
            return state;
    }
}

const InitialStartColor = {
    startColor: ''
}

export const onStartColorChange = (state = InitialStartColor, action = {}) => {
    switch (action.type) {
        case CHANGE_START_COLOR:
            return Object.assign({}, state, {startColor: action.payload});
        default:
            return state;
    }
}

const InitialEndColor = {
    endColor: ''
}

export const onEndColorChange = (state = InitialEndColor, action = {}) => {
    switch (action.type) {
        case CHANGE_END_COLOR:
            return Object.assign({}, state, {endColor: action.payload});
        default:
            return state;
    }
}

const InitialAvatar = {
    avatar: ''
}

export const setAvatar = (state = InitialAvatar, action = {}) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return Object.assign({}, state, {avatar: action.payload});
        default:
            return state;
    }
}

const InitialStateUser = {
    errors: '',
    isPending: false,
    isSignedIn: false,
    user: {}
}

const InitialBoundingBoxes = {
    requestBoxPending: false,
    boxes: []
}

export const getBoundingBoxesForFaces = (state = InitialBoundingBoxes, action = {}) => {
    switch (action.type) {
        case REQUEST_FACES_PENDING:
            return Object.assign({}, state, {requestBoxPending: true});
        case REQUEST_FACES_FAILED:
            alert(action.payload);
            return Object.assign({}, state, {requestBoxPending: false});
        case REQUEST_FACES_SUCCESS:
            const imageselected = document.getElementById('input-image');
            const imagewidth = imageselected.width;
            const imageheight = imageselected.height;
            let boxes = []
            action.payload.forEach(element => {
                boxes.push({'leftCol': element.left*imagewidth, 'topRow': element.top*imageheight, 'rightCol': imagewidth-(element.right*imagewidth), 'bottomRow': imageheight-(element.bottom*imageheight)})
            });
            return Object.assign({}, state, {requestBoxPending: false, boxes: boxes});
        default:
            return state;
    }
}

export const updateUserData = (state = InitialStateUser, action = {}) => {
    // let obj = '';
    // console.log('prevState', state);
    // console.log('action', action.type);
    switch (action.type) {
        case REQUEST_SIGNIN_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_SIGNIN_FAILED:
            if (action.payload === "Invalid Email or Password" || action.payload === "Error Logging in. Please check your network and try again") {
                return Object.assign({}, state, {isPending: false, errors: action.payload, isSignedIn: false});
            } else {
                alert(action.payload);
                return Object.assign({}, state, {isPending:false, isSignedIn: false});
            }
        case REQUEST_SIGNIN_SUCCESS:
            return Object.assign({}, state, {user: action.payload, isPending: false, errors: '', isSignedIn: true});
        case REQUEST_SIGNUP_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_SIGNUP_FAILED:
            if (action.payload === "The email already exists." || action.payload === "All fields are Mandatory. Please fill!") {
                return Object.assign({}, state, {isPending: false, errors: action.payload, isSignedIn: false});
            } else {
                alert(action.payload);
                return Object.assign({}, state, {isPending:false, isSignedIn: false});
            }
        case REQUEST_SIGNUP_SUCCESS:
            return Object.assign({}, state, {isPending: false, errors: '', user: action.payload, isSignedIn:true});
        case REQUEST_IMAGE_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_IMAGE_FAILED:
            alert(action.payload);
            return Object.assign({}, state, {isPending:false});
        case REQUEST_IMAGE_SUCCESS:
            return Object.assign({}, state, {isPending: false, user: action.payload});
        case UPDATE_GENERAL_INFO_PENDING:
            return Object.assign({}, state, {isPending:true});
        case UPDATE_GENERAL_INFO_FAILED:
            console.log('actionExecuted: ', action.type);
            if (action.payload === "The email already exists." || action.payload === "All fields are Mandatory. Please fill!" || action.payload === "Invalid request. Please contact support") {
                return Object.assign({}, state, {isPending: false, errors: action.payload});
            } else {
                alert(action.payload);
                return Object.assign({}, state, {isPending: false, errors:''});
            }
        case UPDATE_PASSWORD_FAILED:
            if (action.payload !== "Success") {
                return Object.assign({}, state, {isPending: false, errors: action.payload});
            } else {
                alert(action.payload);
                return Object.assign({}, state, {isPending: false, errors:''});
            }
        case UPDATE_GENERAL_INFO_SUCCESS:
            return Object.assign({}, state, {isPending:false, errors:'', user:action.payload});
        case UPDATE_PASSWORD_SUCCESS:
            return Object.assign({}, state, {isPending: false, errors: ''});
        case SIGN_OUT_USER:
            return Object.assign({}, state, {errors: '',
            isPending: false,
            isSignedIn: false,
            user: {}})
        default:
            return state;
    }
}