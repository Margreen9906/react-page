import "../style/index.css";

const Header = () => {
    const title = "Welcome to Our Website";
    const text = "Join us today and start your journey!";
    const buttonText = "Get Started";
    const img = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHRvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";

    
    return ( 
       <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <p >{text}</p>
                <button>{buttonText}</button>
            </div>
            <div className="hero-img">
                <img src={img} alt="Header Image" />
            </div>
            
            

        </section>
     );
}
 
export default Header;