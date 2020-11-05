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




import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import Listing from './Listing';
import * as firebase from 'firebase';

import React, { useState, useEffect } from 'react';

// // function collectDB(){
// //     firebase.firestore().collection('category').doc('books_and_supplies').collection('listings')
// //     .get()
// //     .then(querySnapshot => {
// //         const data = querySnapshot.docs.map(doc => doc.data());
// //         console.log(data[0].title);
// //     });
// // }

// let collectedListings = [];

// class Listings extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listings: []
//         };
//     }

//     componentDidMount() {

//         firebase.firestore().collection('category').doc('books_and_supplies').collection('listings')
//         .get()
//         .then(querySnapshot => {
//             collectedListings = querySnapshot.docs.map(doc => doc.data());
//             console.log(collectedListings);
//             const result = Object.values(collectedListings);
//             console.log(result);
//             const test = result.map((data) => data);
//             console.log("test: " + test);
//             // this.setState({listings: data.map()})
//             // this.setState({ listings: result });
//         });



//         // const numbers = [1, 2, 3];
//         // this.setState({ listings: numbers });
//         // console.log(this.state.listings);
//     }


// //     this.props.firebase.db
// //     .collection('users')
// //     // .doc(this.props.firebase.db.collection('users').doc(this.props.firebase.authUser.uid))
// // .doc(this.props.firebase.db.collection('users').doc(this.props.authUser.uid))
// // .get()
// // .then(doc => {
// //     this.setState({ name: doc.data().name });
// //     // loading: false,
// //   });  
// // }

//     render() {
//         let result = collectedListings.map(function (data, index) {
//             console.log(result);
//             return(
//                 <div key={index}>
//                     <p>title: {data.title}</p>
//                 </div>
//             )
//         })
//         return (
//             <>
//             {result}
//             <p>Hello</p>
//             </>
//         )
//     }
// };



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



const Listings = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      console.log('effect');
      const unsub = firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').onSnapshot(snapshot => {
        const allBooks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBooks(allBooks);
      });
      return () => {
        console.log('cleanup');
        unsub();
      };
    }, []);
  
    const deleteBook = id => {
        firebase.firestore().collection('books')
        .doc(id)
        .delete();
    };
  
    return (
      <div className='section section-books'>
        <div className='container'>
          <h6>Books</h6>
          <ul>
            {books.map(book => (
              <li key={book.id}>
                <div className='card book'>
                  <div className='book-image'>
                  </div>
                  <div className='book-details'>
                    <div className='book-title'>{book.title}</div>
                    <div className='book-author'>{book.author}</div>
                  </div>
                  <div
                    onClick={() => deleteBook(book.id)}
                    className='book-delete'
                    style={{ cursor: 'pointer' }}
                  >
                    <i className='material-icons'>delete</i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };



export default Listings;