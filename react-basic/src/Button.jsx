function sayHello(){
    alert("hello ji ki haal chal")
}


export default function Button(){
    return(
        <div>
            <button onClick={sayHello}>Click Me</button>
            <p onClick={sayHello}>this is a normal para, click me</p>
        </div>
    );
}