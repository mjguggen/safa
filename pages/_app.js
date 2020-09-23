import React, {useEffect, useState} from 'react'

//Redux
import { Provider } from 'react-redux';
import store from '../redux/store'

//Components
import Layout from '../components/layout'
import Auth from '../components/auth'

//Style
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style.scss'

const App = ({ Component, pageProps }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)



    return (
        <Provider store={store}>
            {
                !isAuthenticated ?
                    <Auth
                        setIsAuthenticated={setIsAuthenticated}
                    />
                : 
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            }

        </Provider>
    )
}

export default App;