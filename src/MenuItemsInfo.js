// User
import Caprese from './images/Caprese-1-refined@800.png';
import Crostini from './images/Crostini_by_Charles_Haynes-refined@800.png';
import Arrabbiata from './images/Penne_all\'arrabbiata-refined@800.png';
import AglioOlio from './images/aglio-olio-with-parsley-refined@800.png';

const MenuItemsInfo = [
    {
        id: 0,
        image: Caprese,
        kind: "前菜 - Antipasto",
        title: "カプレーゼ",
        subtitle: "Insalata Caprese",
        pepperLevel: 0,
        description: "新鮮なトマトとモッツァレラを使用したシンプルな一品"
    },
    {
        id: 1,
        image: Crostini,
        kind: "前菜 - Antipasto",
        title: "クロスティーニ",
        subtitle: "Crostini",
        pepperLevel: 0,
        description: "バゲットを焼き上げ、チーズとほうれん草を添えた一品"
    },
    {
        id: 10,
        image: Arrabbiata,
        kind: "プリモピアット - Primo Piatto",
        title: "ペンネアラビアータ",
        subtitle: "Penne all'Arrabbiata",
        pepperLevel: 3,
        description: "ピリ辛のトマトソースにペンネを加えたシンプルな一品"
    },
    {
        id: 11,
        image: AglioOlio,
        kind: "プリモピアット - Primo Piatto",
        title: "アーリオオーリオ",
        subtitle: "Spaghetti aglio e olio",
        pepperLevel: 2,
        description: "イタリアンパセリを使い、香り高く仕上げた一品"
    }
];

export default MenuItemsInfo;
