//higher order component (HOC) - a component that render another component
//reuse CODE
//render highjacking
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info </h1>
        <p>The info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p> This is private info. Please don't share </p> }
            
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div> 
            { props.isAuth ? 
                (<WrappedComponent {...props} />
            ) : (
                    <p> Please log in to see the info </p>
                )}   
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is a info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="this is a info" />, document.getElementById('app'));

