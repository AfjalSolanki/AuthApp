import {Icons} from '../../components/Icons';
import DrawerScreen from '../DrawerScreen';
import {colors} from './constant';

export const ScreensArray = [
  {
    route: 'Home',
    name: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: DrawerScreen,
    Drnotification: 0,
  },
  {
    route: 'Inbox',
    name: 'My Inbox',
    type: Icons.Feather,
    icon: 'inbox',
    component: DrawerScreen,
    Drnotification: 9,
  },
  {
    route: 'Calendar',
    name: 'My Calendar',
    type: Icons.Feather,
    icon: 'calendar',
    component: DrawerScreen,
    Drnotification: 4,
  },
  {
    route: 'Documents',
    name: 'My Documents',
    type: Icons.Feather,
    icon: 'layers',
    component: DrawerScreen,
    Drnotification: 0,
  },
  {
    route: 'Activity',
    name: 'My Activity',
    type: Icons.Feather,
    icon: 'pie-chart',
    component: DrawerScreen,
    Drnotification: 2,
  },
  {
    route: 'Settings',
    name: 'Settings',
    type: Icons.Feather,
    icon: 'settings',
    component: DrawerScreen,
    Drnotification: 0,
  },
];

export const ProjectsArray = [
  {
    title: 'Personal',
    icon: 'profile',
    color: colors.icon1,
    iconType: Icons.AntDesign,
  },
  {
    title: 'travel',
    icon: 'profile',
    color: colors.icon2,
    iconType: Icons.AntDesign,
  },
  {
    title: 'Business',
    icon: 'profile',
    color: colors.icon3,
    iconType: Icons.AntDesign,
  },
  {title: 'Add', icon: 'plus', color: colors.icon4, iconType: Icons.AntDesign},
];

export const ProfileMenu = [
  {label: 'History', icon: 'history', iconType: Icons.MaterialIcons},
  {label: 'Rate', icon: 'star', iconType: Icons.MaterialIcons},
  {label: 'Share', icon: 'share', iconType: Icons.MaterialIcons},
  {label: 'Logout', icon: 'logout', iconType: Icons.MaterialIcons},
];
