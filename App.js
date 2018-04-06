import React from 'react';
import Main from './app/components/Main';
import Settings from './app/components/Settings';
import { StackNavigator } from 'react-navigation';


export default class App extends React.Component {
render() {
  return (
    <RootStack />

  );
 }
}

const RootStack = StackNavigator( 
    {
        Main: {
            screen: Main,
            navigationOptions: {
              header:null,
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
              header:null,
            }
        },
    },
    {
        initialRouteName:'Main',
    }
);