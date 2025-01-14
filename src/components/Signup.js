// import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../firebase/auth";
// import axios from 'axios';
// import { Link, useHistory } from "react-router-dom";
// export default function Signup() {
//     const emailRef = useRef();
//     const locationRef = useRef();
//     const usernameRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();
//     const { signup } = useAuth();
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(false);
//     const history = useHistory();
    
//     async function sendData(e) {
//         e.preventDefault();
//         if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//           return setError("Passwords do not match");
//         }
//         try {
//           setError("");
//           setLoading(true);
//           console.log('1')
//           const x = await signup(emailRef.current.value, passwordRef.current.value);
//           console.log(x.user.uid)
//           if (x.user.uid) {
//             let user = {
//               uid: x.user.uid,
//               username: usernameRef.current.value,
//               location: locationRef.current.value
//             };
//             console.log(user);
//             await axios.post('http://localhost:8080/user/add', {user: user})
//               .then(response => {
//                 console.log('User added ' + response);
//                 let show = document.getElementsByClassName('loggedin');
//                 let hide = document.getElementsByClassName('loggedout');
//                 for (var i of show) {
//                   i.style['display'] = '';
//                 }
//                 for (var i of hide) {
//                   i.style['display'] = 'none';
//                 }
//                 history.push("/user/daily");
                
//               }).catch(err => {
//                 console.log(err);
//               })
//           }
//         } catch(e) {
//             console.log(e)
//           setError("Failed to create an account");
//         }
//         setLoading(false);
//       }

//     // function getData() {
//     //     axios.get('http://localhost:8080/get')
//     //         .then(response => {
//     //             console.log(response.data);
//     //         })
//     // }

//     // function runPython() {
//     //     axios.get('http://localhost:8080/pythonscript')
//     //         .then(response => {
//     //             console.log(response.data);
//     //         })
//     // }

//     return (
//         <div>
//             <>
//             <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={sendData}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required></Form.Control>
//             </Form.Group>
//             <Form.Group id="username">
//               <Form.Label>Username</Form.Label>
//               <Form.Control type="text" ref={usernameRef} required></Form.Control>
//             </Form.Group>
//             <Form.Group id="location">
//               <Form.Label>Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 ref={locationRef}
//                 required
//               ></Form.Control>
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordRef}
//                 required
//               ></Form.Control>
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordConfirmRef}
//                 required
//               ></Form.Control>
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have an account ? <Link to="/login">Log In</Link>
//       </div> </>
            
//         </div>
//     );
// };

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../firebase/auth";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import './../css/sign.css';

export default function Signup() {
    const emailRef = useRef();
    const locationRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    async function sendData(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match");
        }
        try {
          setError("");
          setLoading(true);
          console.log('1')
          const x = await signup(emailRef.current.value, passwordRef.current.value);
          console.log(x.user.uid)
          if (x.user.uid) {
            let user = {
              uid: x.user.uid,
              username: usernameRef.current.value,
              location: locationRef.current.value
            };
            console.log(user);
            await axios.post('http://localhost:8080/user/add', {user: user})
              .then(response => {
                console.log('User added ' + response);
                let show = document.getElementsByClassName('loggedin');
                let hide = document.getElementsByClassName('loggedout');
                for (var i of show) {
                  i.style['display'] = 'inline';
                }
                for (var i of hide) {
                  i.style['display'] = 'none';
                }
                history.push("/user/daily");
                
              }).catch(err => {
                console.log(err);
              })
          }
        } catch(e) {
            console.log(e)
          setError("Failed to create an account");
        }
        setLoading(false);
      }

    // function getData() {
    //     axios.get('http://localhost:8080/get')
    //         .then(response => {
    //             console.log(response.data);
    //         })
    // }

    // function runPython() {
    //     axios.get('http://localhost:8080/pythonscript')
    //         .then(response => {
    //             console.log(response.data);
    //         })
    // }

    return (
        <div class="box">
            <>
            <Card>
        <Card.Body className="box1">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={sendData}>
            <Form.Group id="email">
              
              <Form.Control type="email"  placeholder="Email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="username">
              
              <Form.Control type="text" placeholder="Username" ref={usernameRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="location">
              
              <Form.Control
                type="text"
                placeholder="Location"
                ref={locationRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
          <Link to="/login">Already have an account? Log In.</Link>
      </div>
        </Card.Body>
      </Card>
       </>
            
        </div>
    );
};