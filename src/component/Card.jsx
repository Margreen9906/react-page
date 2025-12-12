export default function Card({title, img, description, btnText}) {
    return (
        

        <section className="card">
        <h1>{title}</h1>
       <img src={img} alt={title}/>
        <p>{description}</p>
        <button>
            {btnText}
        </button>
        </section>
    );

}