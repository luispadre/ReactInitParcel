// import React from "react";
// import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
//   "mdbreact";
// import { Box } from '@material-ui/core'
// import Styled from 'styled-components'

// export default function CarouselPage({img}) {
//   return (
//     // <MDBContainer>
//       <MDBCarousel
//         activeItem={1}
//         length={2}
//         showControls={true}
//         showIndicators={true}
//       >
//      {img.map((item,i)=>{
//           return(<>
//           <MDBCarouselInner key={i}>
//               <MDBCarouselItem itemId={i}>
//                 <MDBView>
//                   <img
                    
//                     src={item.img}
//                     />
//                   <MDBMask overlay="black-light" />
//                 </MDBView>
//                 <MDBCarouselCaption className="carruselCaption">
//                   <Box fontSize={28} bgcolor="text.secondary" m={1}>
//                     <p>First text</p>
//                     <Box fontSize={16}>
//                       {/* <p>{JSON.parse(item.img1)}</p> */}
//                     </Box>
//                   </Box>
//                 </MDBCarouselCaption>
//             </MDBCarouselItem>
//             </MDBCarouselInner>
//           </>)
//         })} 
//       </MDBCarousel>
//       //     <MDBCarouselItem itemId="2">
//       //       <MDBView>
//       //         <Img
//       //           className="d-block w-100"
//       //           src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
//       //           alt="Second slide"
//       //         />
//       //         <MDBMask overlay="black-strong" />
//       //       </MDBView>
//       //       <MDBCarouselCaption>
//       //         <Box fontSize={28} bgcolor="text.secondary" m={1}>
//       //           <p>First text</p>
//       //           <Box fontSize={16}>
//       //             <p>First text</p>
//       //           </Box>
//       //         </Box>
//       //       </MDBCarouselCaption>
//       //     </MDBCarouselItem>
//       //     <MDBCarouselItem itemId="3">
//       //       <MDBView>
//       //         <Img
//       //           className="d-block w-100"
//       //           src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
//       //           alt="Third slide"
//       //         />
//       //         <MDBMask overlay="black-slight" />
//       //       </MDBView>
//       //       <MDBCarouselCaption>
//       //         <Box fontSize={28} bgcolor="text.secondary" m={1}>
//       //           <p>First text</p>
//       //           <Box fontSize={16}>
//       //             <p>First text</p>
//       //           </Box>
//       //         </Box>
//       //       </MDBCarouselCaption>
//       //     </MDBCarouselItem>
        
      
//     // </MDBContainer>
//   );
// }

// const Img=Styled.img`
// -webkit-filter: brightness(175%);filter: brightness(175%);
// `




// import React from "react";
// import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
//   "mdbreact";
// import { Box } from '@material-ui/core'
// import Styled from 'styled-components'
// export default function CarouselPage({img}) {
//   return (
//     <>
//       <MDBCarousel
//         activeItem={1}
//         length={2}
//         showControls={true}
//         showIndicators={true}
//       >
//         <MDBCarouselInner>
//         {img.map((item,i)=>{
//           return(<>
//           <MDBCarouselItem itemId={i+1}>
//             <MDBView>
//               <img
//                 className={item.class}
//                 src={item.img}
//                 alt={item.alt}
//                 stlye={{width: item.width}}
//               />
//               <MDBMask overlay="black-light" />
//             </MDBView>
//             <MDBCarouselCaption className="carruselCaption">
//               <Box fontSize={28} bgcolor="text.secondary" m={1}>
//                 <p>{item.title}</p>
//                 <Box fontSize={16}>
//                   <p>{item.subtitle}</p>
//                 </Box>
//               </Box>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//       </>)
//         })}
          
            
//         </MDBCarouselInner>
//       </MDBCarousel>
//       </>
//   );
// }

// const Img=Styled.img`
// -webkit-filter: brightness(175%);filter: brightness(175%);
// `




        
{/* // <MDBCarouselItem itemId="2">
          //   <MDBView>
          //     <Img 
          //       className="d-block w-100"
          //       src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
          //       alt="Second slide"
          //     />
          //     <MDBMask overlay="black-strong" />
          //   </MDBView>
          //   <MDBCarouselCaption>
          //     <Box fontSize={28} bgcolor="text.secondary" m={1}>
          //       <p>First text</p>
          //       <Box fontSize={16}>
          //         <p>First text</p>
          //       </Box>
          //     </Box>
          //   </MDBCarouselCaption>
          // </MDBCarouselItem>
          // <MDBCarouselItem itemId="3">
          //   <MDBView>
          //     <Img
          //       className="d-block w-100"
          //       src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
          //       alt="Third slide"
          //     />
          //     <MDBMask overlay="black-slight" />
          //   </MDBView>
          //   <MDBCarouselCaption>
          //     <Box fontSize={28} bgcolor="text.secondary" m={1}>
          //       <p>First text</p>
          //       <Box fontSize={16}>
          //         <p>First text</p>
          //       </Box>
          //     </Box>
          //   </MDBCarouselCaption>
          // </MDBCarouselItem></MDBCarouselItem>*/}



          import React, { useState } from 'react';
          import {
            Carousel,
            CarouselItem,
            CarouselControl,
            CarouselIndicators,
            CarouselCaption
          } from 'reactstrap';
          
          
          
          const Carrusel = (props) => {
            const {img}=props
            const [activeIndex, setActiveIndex] = useState(0);
            const [animating, setAnimating] = useState(false);
          
            const next = () => {
              if (animating) return;
              const nextIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
              setActiveIndex(nextIndex);
            }
          
            const previous = () => {
              if (animating) return;
              const nextIndex = activeIndex === 0 ? img.length - 1 : activeIndex - 1;
              setActiveIndex(nextIndex);
            }
          
            const goToIndex = (newIndex) => {
              if (animating) return;
              setActiveIndex(newIndex);
            }
          
            const slides = img.map((item) => {
              return (
                <CarouselItem
                  onExiting={() => setAnimating(true)}
                  onExited={() => setAnimating(false)}
                  key={item.img}
                >
                  <img src={item.img} alt={item.altText}  style={{height:'32rem' ,width: '100%'}}/>
                  <CarouselCaption captionText={item.title} captionHeader={item.subtitle} />
                </CarouselItem>
              );
            });
          
            return (
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators items={img} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
            );
          }
          
          export default Carrusel;