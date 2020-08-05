import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import UploadSection from './components/UploadSection';
import ArticleSection from './components/ArticleSection';
import HomeSection from './components/HomeSection';
import ArticleDetail from './components/ArticleDetail';
import AdminSection from './components/AdminSection';
import SignInSection from './components/SignInSection';
import SignUpSection from './components/SignUpSection';
import PrivateRoute from './components/PrivateRoute';
import { Provider as AuthProvider } from './context/AuthContext';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <TopNav />
        <div className="container my-3">
          <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route path="/upload" component={UploadSection} />
            <Route exact path="/articles" component={ArticleSection} />
            <Route path="/articles/:paperId" component={ArticleDetail}/>
            <PrivateRoute path="/admin" component={AdminSection} />
            <Route path="/signin" component={SignInSection} />
            <Route path="/signup" component={SignUpSection} />
          </Switch>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
