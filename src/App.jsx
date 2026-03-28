import { SedarProvider, useSedar } from './context/SedarContext';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Window from './components/Window';

// Special modules
import Registration from './modules/Registration';
import WineCounter from './modules/WineCounter';
import SederPlate from './modules/SederPlate';
import Games from './modules/Games';

// Seder step modules
import Kadesh from './modules/Kadesh';
import Urchatz from './modules/Urchatz';
import Karpas from './modules/Karpas';
import Yachatz from './modules/Yachatz';
import Maggid from './modules/Maggid';
import Rachtzah from './modules/Rachtzah';
import MotziMatzah from './modules/MotziMatzah';
import Maror from './modules/Maror';
import Korech from './modules/Korech';
import ShulchanOrech from './modules/ShulchanOrech';
import Tzafun from './modules/Tzafun';
import Barech from './modules/Barech';
import Hallel from './modules/Hallel';
import Nirtzah from './modules/Nirtzah';

import './styles/windows95.css';
import './styles/modules.css';

const MODULE_COMPONENTS = {
  // Special
  registration: { component: Registration, title: 'Registration.exe', icon: '👥' },
  'wine-counter': { component: WineCounter, title: 'WineCounter.exe', icon: '🍷' },
  'seder-plate': { component: SederPlate, title: 'SederPlate.exe', icon: '🍽️' },
  games: { component: Games, title: 'Games.exe', icon: '🎮' },
  // Seder steps
  kadesh: { component: Kadesh, title: '01_Kadesh', icon: '🍷' },
  urchatz: { component: Urchatz, title: '02_Urchatz', icon: '🚿' },
  karpas: { component: Karpas, title: '03_Karpas', icon: '🌿' },
  yachatz: { component: Yachatz, title: '04_Yachatz', icon: '🫓' },
  maggid: { component: Maggid, title: '05_Maggid', icon: '📜' },
  rachtzah: { component: Rachtzah, title: '06_Rachtzah', icon: '🙌' },
  'motzi-matzah': { component: MotziMatzah, title: '07_MotziMatzah', icon: '🫓' },
  maror: { component: Maror, title: '08_Maror', icon: '😤' },
  korech: { component: Korech, title: '09_Korech', icon: '🥪' },
  'shulchan-orech': { component: ShulchanOrech, title: '10_ShulchanOrech', icon: '🍽️' },
  tzafun: { component: Tzafun, title: '11_Tzafun', icon: '🔍' },
  barech: { component: Barech, title: '12_Barech', icon: '🙏' },
  hallel: { component: Hallel, title: '13_Hallel', icon: '🎵' },
  nirtzah: { component: Nirtzah, title: '14_Nirtzah', icon: '✨' },
};

function WindowManager() {
  const { openWindows } = useSedar();

  return (
    <>
      {openWindows.map((win) => {
        const meta = MODULE_COMPONENTS[win.id];
        if (!meta) return null;
        const { component: Component, title, icon } = meta;
        return (
          <Window key={win.id} id={win.id} title={title} icon={icon}>
            <Component />
          </Window>
        );
      })}
    </>
  );
}

export default function App() {
  return (
    <SedarProvider>
      <Desktop />
      <WindowManager />
      <Taskbar />
    </SedarProvider>
  );
}
