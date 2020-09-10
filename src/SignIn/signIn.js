import React, {Component} from  'react';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    authenticateUser = () =>{
        fetch("http://localhost:3001/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(Response => {
            if (Response.status === 200) {
                this.props.onRouteChange('home');
            }
            return Response.json();
        }).then(data => {
            console.log(data);
            this.props.getUser(data);
        }).catch(console.log);
    }
    // const { onRouteChange } = this.props;
    render(){
        const {onRouteChange} = this.props;
        return (
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0 center">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="email-address" 
                                onChange = {this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="password"  id="password" 
                                onChange = {this.onPasswordChange}/>
                        </div>
                        {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                    </fieldset>
                    <div className="my-center">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in" 
                            onClick={this.authenticateUser}/>
                    </div>
                    <div className="lh-copy mt3 my-center">
                        <p 
                            className="f6 link dim black db pointer"
                            onClick={()=>{onRouteChange('signup')}}>Sign up</p>
                        {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                    </div>
                </div>
            </main>
        )
    }
    
}

export default SignIn;