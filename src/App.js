

import AllCountries from './pages/AllCountries'
import CountryDetail from './pages/CountryDetail'
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import RegionalCountries from "./components/Countries/RegionalCountries";

import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter ,Route, Switch, Redirect } from 'react-router-dom';
import TopHeader from "./components/Layout/TopHeader";
function App() {
  return (
      <BrowserRouter>

            <Layout >
                <TopHeader />
                <Switch>


                    <Route path='/countries' exact>
                        <AllCountries/>
                    </Route>

                    <Route path='/country/:countryNameId' exact>
                        <CountryDetail/>
                    </Route>

                    <Route path='/region/:regionNameId' exact>
                        <RegionalCountries/>
                    </Route>



                    <Route path='/' exact>
                        <Redirect to='/countries' />
                    </Route>

                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>

            </Layout>
      </BrowserRouter>
  );
}

export default App;
