import {
    createStackNavigator
} from 'react-navigation';
import Login from '../screens/Login';
import Portal from '../screens/Portal';
import Animes from '../screens/Animes';
import AnimeDetail from '../screens/AnimeDetail';

export const RootStack = createStackNavigator(
    {
      Login: Login,
      Portal: Portal,
      Animes: Animes,
      AnimeDetail: AnimeDetail,
    },
    {
      mode:'modal',
      initialRouteName: 'Login',
    }
);
