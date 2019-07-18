import home from '@/components/home'
import Wizard from '@/components/Wizard'
import WAN from '@/components/WAN'
import LAN from '@/components/LAN'
import SMS from '@/components/SMS'
import WiFi from '@/components/WiFi'
import Security from '@/components/Security'
import System from '@/components/System'
import net_lan from '@/components/net_lan'
import net_dhcp from '@/components/net_dhcp'

const routers = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/Wizard',
    name: 'Wizard',
    component: Wizard
  },{
    path: '/WAN',
    name: 'WAN',
    component: WAN
  },{
    path: '/LAN',
    name: 'LAN',
    component: LAN,
    children:[
      {path:'/net_lan',name: 'net_lan',component:net_lan},
      {path:'/net_dhcp',name: 'net_dhcp',component:net_dhcp}
    ],redirect:'/net_lan'
  },{
    path: '/SMS',
    name: 'SMS',
    component: SMS
  },{
    path: '/WiFi',
    name: 'WiFi',
    component: WiFi
  },{
    path: '/Security',
    name: 'Security',
    component: Security
  },{
    path: '/System',
    name: 'System',
    component: System
  }
]
export default routers