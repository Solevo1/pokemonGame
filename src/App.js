
import Header from "./components/Header"
import Layout from "./components/Layout"
import bg from "./assets/bg3.jpg"
import Footer from "./components/Footer"

const App = () => {
  return ( 
    <>
         <Header
            title="Some title"
            descr="Some description"
         />
         <Layout
            id={1}
            title="First title"
            descr="First description"
            urlBg={bg}
          />
          <Layout
            id={2}
            title="Second title"
            colorBg="green"
          />
          <Layout
            id={3}
            descr="Third description"
            urlBg={bg}
          />
          <Footer />
    </>
  )
}

export default App;