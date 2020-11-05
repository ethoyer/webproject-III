// import React, { useState, useEffect } from 'react'; 
// import "firebase/firestore";
// import { useFirebaseApp } from 'reactfire';

// class Listings extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listings: []
//         };
//     }

//  export const Listings = (props) =>{
//      const firebase = useFirebaseApp();
//     const [listing, setListing] = useState(0);  
//     useEffect(() =>{
//         firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').get().then(querySnapshot => {
//             const data = querySnapshot.docs.map(doc => doc.data());
//             console.log(data[0].title);
//         setListing(data);
//     });

// });
//     return(
//         <div>
//             <div key={listing.id}>
//                 <h1>{listing.location}</h1>
//                 <button onClick={()=> setListing(0)}>click me</button>
//             </div>
//         </div>
//     )
//         };

// render()

//  data.map((info) => {
//  console.log(info.title);
//  return(
//      <p>{info.title}</p>

// reactDOM.render({listingComponent title={this.info.title} price={this.info.price}}, document.getElementById("EnElllerAnnenDiv")})
//      )
//  })

// })
//         console.log(datatwo);
//         return( 
//             <>
//         <h1>hei</h1>
//         <div></div>
// </>
//         )
// }




// import React from 'react'; 
// import "firebase/firestore";
// import { useFirebaseApp } from 'reactfire';
// import Listing from './Listing'
// const Listings = (props) => {
//     const firebase = useFirebaseApp();
//     // render()
//     firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').get().then(querySnapshot => {
//         const data = querySnapshot.docs.map(doc => doc.data());
//         console.log(data[0].title);
//              data.map((info) => {
//                  console.log(info.title);
//                  return(
//                      <Listing></Listing>
//                      
//                      // reactDOM.render({listingComponent title={this.info.title} price={this.info.price}}, document.getElementById("EnElllerAnnenDiv")})
//                  )
//              })
//             //  console.log("test" + data);
//             //  return(
//             //     <div>{listings}</div>
//             //     )
//                 // document.getElementById("title").innerHTML = data.data().title;
//         })
//         return( 
//             <>
//         <h1>hei</h1>
//         <Listing/>
// </>
//         )
// }
// export default Listings;




import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import Listing from './Listing';
import * as firebase from 'firebase';

// function collectDB(){
//     firebase.firestore().collection('category').doc('books_and_supplies').collection('listings')
//     .get()
//     .then(querySnapshot => {
//         const data = querySnapshot.docs.map(doc => doc.data());
//         console.log(data[0].title);
//     });
// }

class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
        };
    }

    componentDidMount() {

        firebase.firestore().collection('category').doc('books_and_supplies').collection('listings')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            // this.setState({ listings: data });
        });

        // const numbers = [1, 2, 3];
        // this.setState({ listings: numbers });
        console.log(this.state.listings);
    }


//     this.props.firebase.db
//     .collection('users')
//     // .doc(this.props.firebase.db.collection('users').doc(this.props.firebase.authUser.uid))
// .doc(this.props.firebase.db.collection('users').doc(this.props.authUser.uid))
// .get()
// .then(doc => {
//     this.setState({ name: doc.data().name });
//     // loading: false,
//   });  
// }

    render() {
        return (
            <p>{this.state.listings}</p>
        )
    }
};



// const Listings = (props) => {
//     const firebase = useFirebaseApp();
//     // render()

//     componentDidMount() {
//         firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').get().then(querySnapshot => {
//             const data = querySnapshot.docs.map(doc => doc.data());
//             console.log(data[0].title);
//         })
//     };





    // firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').get().then(querySnapshot => {
    //     const data = querySnapshot.docs.map(doc => doc.data());
    //     console.log(data[0].title);
    //     data.map((info) => {
    //         console.log(info.title);
    //         return (
    //             <Listing></Listing>

    //             // reactDOM.render({listingComponent title={this.info.title} price={this.info.price}}, document.getElementById("EnElllerAnnenDiv")})
    //         )
    //     })
    //     //  console.log("test" + data);
    //     //  return(
    //     //     <div>{listings}</div>
    //     //     )
    //     // document.getElementById("title").innerHTML = data.data().title;
    // })


//     return (
//         <>
//             <h1>hei</h1>
//             <Listing />
//         </>
//     )
// }
export default Listings;