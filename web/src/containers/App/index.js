import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppWrapper from './AppWrapper';
import HomePage from '../HomePage';
import UserPage from '../UserPage';
import PostDetailPage from '../PostDetailPage';
import NewPostPage from '../NewPostPage';
import Navigation from '../Navigation';

export default function App() {
  const myInfo = { id: 1, username: 'sam' };
  return (
    <AppWrapper>
      <ThemeProvider
        theme={{
          palette: {
            gray_background: '#FAFAFA',
            gray_button: '#FDFDFD',
            gray_font: '#999999',
            border: '#e6e6e6',
            border_secondary: '#dbdbdb',
            white: '#FFFFFF',
            blue: '#3897F1',
            blue_facebook: '#375184',
            pink: '#ee4957',
          },
        }}
      >
        <Navigation myInfo={myInfo} />
        <Route path="/" exact component={HomePage} />
        <Route path="/:username" component={UserPage} />
        <Route path="/p/:postURL" component={PostDetailPage} />
        <Route path="/newpost" component={NewPostPage} />
      </ThemeProvider>
    </AppWrapper>
  );
}
