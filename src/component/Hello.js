export default function Hello() {
    function showName() {
        console.log("mike");
    }

    function showAge(age) {
        console.log(age);
    }

    // function showText(e){
    //     console.log(e.target.value)
    // }

    function showText(txt){
        console.log(txt)
    }

    return <div>
        <h1>Hello</h1>
        <button onClick={showName}>Show name</button>
        <button
            onClick={() => {
                showAge(20)
            }
            }>Show age
        </button>
        {/*방법1*/}
        {/*<input type="text" onChange={showText}/>*/}

        {/*방법 2*/}
        {/*<input*/}
        {/*    type="text"*/}
        {/*    onChange={(e) => {*/}
        {/*        console.log(e.target.value)*/}
        {/*    }*/}
        {/*    }/>*/}

        {/*방법 3*/}
        <input
            type="text"
            onChange={(e) => {
                const txt = e.target.value
                showText(txt)
            }
            }/>
    </div>
}