import Navbar from "./components/navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";

function App() {
  const data = [
    {
      id: 1,
      titulo: "Laguna",
      imag: "https://img.freepik.com/fotos-premium/lago-camino-piedra-que-rodeado-arboles-lago-arbol-flores-rosas_772412-1105.jpg",
      text: "La laguna se extiende serena bajo el cielo despejado, un espejo de aguas tranquilas que refleja el azul intenso del firmamento. Sus orillas están adornadas con juncos y cañas, cuyas hojas susurran al compás de la brisa que acaricia su superficie",
      url: "/#"
    },
    {
      id: 2,
      titulo: "Perro en el automovil",
      imag: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/05/09/6278c6e1a7002.jpeg",
      text: "El perro, un fiel compañero de cuatro patas, se acomoda emocionado en el asiento trasero del automóvil. Sus ojos chispean de alegría mientras observa a través de la ventana, con las orejas al viento, mientras el vehículo se desplaza por la carretera",
      url: "/#"
    },
    {
      id: 3,
      titulo: "El perro y el gato",
      imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSE8hjU-LzAs4Y_PN_Ls30croe8hUVLrHxA&usqp=CAU",
      text: "El perro y el gato, dos seres tan diferentes y, a la vez, tan complementarios, comparten un hogar en armonía. Cada uno tiene su personalidad única y su propio lenguaje, pero han aprendido a entenderse y a convivir juntos",
      url: "/#"
    },
    {
      id: 4,
      titulo: "Pájaro de Siete Colores",
      imag: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/114480281/900",
      text: "El pájaro de siete colores es una criatura mágica que habita en lo más profundo de la selva tropical. Su plumaje es un espectáculo deslumbrante de tonos vibrantes y vivos, como si un arco iris se hubiera posado en su espalda",
      url: "/#"
    }
  ]
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row row-cols-1 row-cols-md-4 g-3 my-3">
          {data.map((element, index) => {
            return <div className="col" key={element.id}>
              <Card imagen={element.imag} title={element.titulo} text={element.text} url={element.url} />
            </div>
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default App;