// User
import Caprese from './images/Caprese-1-refined@800.png';
import Crostini from './images/Crostini_by_Charles_Haynes-refined@800.png';
import Arrabbiata from './images/Penne_all\'arrabbiata-refined@800.png';
import AglioOlio from './images/aglio-olio-with-parsley-refined@800.png';

// Values of "id" properties are should be unique
const MenuItemsInfo = [
    {
        id: 11,
        image: Caprese,
        kind: "前菜 - Antipasto",
        kindId: 1,
        title: "カプレーゼ",
        subtitle: "Insalata Caprese",
        pepperLevel: 0,
        description: "新鮮なトマトとモッツァレラを使用したシンプルな一品"
    },
    {
        id: 12,
        image: Crostini,
        kind: "前菜 - Antipasto",
        kindId: 1,
        title: "クロスティーニ",
        subtitle: "Crostini",
        pepperLevel: 0,
        description: "バゲットを焼き上げ、チーズとほうれん草を添えた一品"
    },
    {
        id: 21,
        image: Arrabbiata,
        kind: "プリモピアット - Primo Piatto",
        kindId: 2,
        title: "ペンネアラビアータ",
        subtitle: "Penne all'Arrabbiata",
        pepperLevel: 3,
        description: "ピリ辛のトマトソースにペンネを加えたシンプルな一品"
    },
    {
        id: 22,
        image: AglioOlio,
        kind: "プリモピアット - Primo Piatto",
        kindId: 2,
        title: "アーリオオーリオ",
        subtitle: "Spaghetti aglio e olio",
        pepperLevel: 2,
        description: "イタリアンパセリを使い、香り高く仕上げた一品"
    }
];

export default MenuItemsInfo;
