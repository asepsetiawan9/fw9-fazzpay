//import '../styles/globals.css'
import '../styles/auth.css'
import '../styles/menumainpage.css'
// import '../styles/pagestyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from "react-redux"
import {store} from "../stores"

function MyApp({ Component, pageProps }) {
  return (
     <Provider store={store}>
      <Component {...pageProps} />
     </Provider>
  )
}

export default MyApp
