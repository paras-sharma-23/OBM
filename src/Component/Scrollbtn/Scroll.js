import React from 'react'
import './Scroll.css'

const Scroll = () => {
    // const [showTopBtn, setshowTopBtn,] = useState(false);
    // Window.onscroll = function(){
    //     useEffect(() => {

    //   Window.addEventListener('scroll',()=>{
    //     if(Window.scrollY > 400){
    //         setshowTopBtn,(true);
    //     }
    //     else{
    //         setshowTopBtn('false')
    //       } 
    //   });
        
    // }, []);


    // };
    
    const goTo = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }   ;
    window.onscroll = function(){
        
        if(window. scrollY > 1500){
            document.getElementsByClassName('scroll-up-down')[0].style.display="block";
        }else{
            document.getElementsByClassName('scroll-up-down')[0].style.display="none";

        }
    }

  return (
    <button className='scroll-up-down'style={{display:'none'}} onClick={goTo} >
        
            
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.553 119.669L209.587 7.666c-9.485-10.214-25.676-10.229-35.174 0L70.438 119.669C56.232 134.969 67.062 160 88.025 160H152v272H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V160h63.966c20.878 0 31.851-24.969 17.587-40.331z"></path></svg>

    </button>
    // <button className='scroll-up-down'  >
    //     {" "}
    //         { showTopBtn && (
    //     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.553 119.669L209.587 7.666c-9.485-10.214-25.676-10.229-35.174 0L70.438 119.669C56.232 134.969 67.062 160 88.025 160H152v272H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V160h63.966c20.878 0 31.851-24.969 17.587-40.331z" onClick={goTo}></path></svg>

    //     )}{" "}
    // </button>
    )
}

export default Scroll