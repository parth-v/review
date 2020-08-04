import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import UploadSection from './components/UploadSection';
import ArticleSection from './components/ArticleSection';
import HomeSection from './components/HomeSection';
import ArticleDetail from './components/ArticleDetail';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

const App = () => {
  return (
      <div>
        <TopNav />
        <div className="container my-3">
          <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route path="/upload" component={UploadSection} />
            <Route exact path="/articles" component={ArticleSection} />
            <Route path="/articles/:paperId" component={ArticleDetail}/>
          </Switch>
        </div>
        <Footer />
      </div>
  );
}

export default App;
