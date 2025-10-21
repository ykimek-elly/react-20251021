

export default function JsxTest() {

    let name = "Elly";
    let myColor = "red";

  return (
    <div>
        <h1 style={
            { color : myColor ,
              fontSize : "1rem"
            }
        }>Hello, {name}</h1>

        <h3 style={
            { color : myColor}
        }>
            Bye~!
        </h3>

    </div>
  )
}
