import React, { useState, useEffect } from 'react'; 
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';

// class Listings extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listings: []
//         };
//     }
     export const Listing = (props) =>{
        const [listing, setListing] = useState(0);    
        useEffect(() =>{
            const firebase = useFirebaseApp();
            firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').get().then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data[0].title);
            setListing(data);
        });

    }
        return(
            <div>
                <div key={listings.id}>
                    <h1>{listings.location}</h1>
                    <button onClick={()=> setListing(0)}>click me</button>
                </div>
            </div>
        )
            });
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
//     let datatwo = firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').get().then(querySnapshot => {
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
//         console.log(datatwo);
//         return( 
//             <>
//         <h1>hei</h1>
//         <Listing/>
// </>
//         )
// }
// export default Listings;