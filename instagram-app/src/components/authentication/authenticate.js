import React from 'react';

const  withAuthenticate = Postpage => Loginpage =>{
    return class  extends React.Component  {
        constructor(props){
            super(props)
            this.state=({
                loggedIn:false
            })
        }
    componentDidMount(){
        localStorage.getItem('username') && this.setState({
            loggedIn:true
        })
    }
    render(){
        if(this.state.loggedIn){
            return <Postpage {...this.props} />
        }
        else{
            return <Loginpage />
        }
    }
    }
}
export default withAuthenticate;