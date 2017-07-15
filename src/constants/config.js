/**
 * Global App Config
 */
/* global __DEV__ */
import { AppColors, AppStyles, AppSizes } from '@theme/';

import { Platform } from 'react-native'


export default {
  // App Details
  appName: 'Nearby Live',

  // Build Configuration - eg. Debug or Release?
  DEV: __DEV__,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: (__DEV__) ? 'UA-91031172-1' : 'UA-91031172-1',

  // URLs
  urls: {
    acceptableUse: 'https://www.wnmlive.com/legal/acceptable-use',
    imageCDN: 'https://nearby-images.azureedge.net/image/',
    baseURL:'https://www.wnmlive.com/'
  },

  // Navbar Props
  navbarProps: {
    hideNavBar: false,
    sceneStyle: {
      backgroundColor: AppColors.background,
      paddingTop: Platform.os === 'ios' ? 64 : 48,
    },
    navigationBarStyle:{
      ...AppStyles.navbar
    },
    titleStyle:{
        ...AppStyles.navbarTitle
    },
    backButtonTextStyle:{

    }
  },
};
