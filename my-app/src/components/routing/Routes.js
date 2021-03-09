import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Chapters from '../chapters/Chapters';
import VideoPlayer from '../video-player/VideoPlayer';
import NotFound from '../layout/NotFound';

const Routes = props => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/chapters/:subject" component={Chapters} />
        <Route path="/video-player/:subject/:chapter/:lesson" component={VideoPlayer} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
