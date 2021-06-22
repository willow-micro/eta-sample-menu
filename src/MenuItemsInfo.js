// User
import Caprese from './images/Caprese-1-refined@800.png';
import Crostini from './images/Crostini_by_Charles_Haynes-refined@800.png';
import Arrabbiata from './images/Penne_all\'arrabbiata-refined@800.png';
//import AglioOlio from './images/aglio-olio-with-parsley-refined@800.png';
import Genovese from './images/Pasta_with_pesto-refined@800.png';
import Risotto from './images/Italian_Risotto-refined@800.png';
import Minestrone from './images/Minestrone_soup_(1)-refined@800.png';
import Piccata from './images/Veal_piccata-refined@800.png';
import AcquaPazza from './images/Acqua_pazza-refined@800.png';
import Tiramisu from './images/Tiramisu_-_Raffaele_Diomede-refined@800.png';
import PannaCotta from './images/Parmesan_Pannacotta_-_Amuse_Bouche_-_Lake_House_Restaurant,_Daylesford-refined@800.png';

// Values of "id" properties are should be unique
const MenuItemsInfo = [
    {
        id: 0,
        image: Caprese,
        kind: "前菜 - Antipasto",
        kindId: 0,
        title: "カプレーゼ",
        subtitle: "Insalata caprese",
        pepperLevel: 0,
        description: "新鮮なトマトとモッツァレラを使ったシンプルなサラダ"
    },
    {
        id: 1,
        image: Crostini,
        kind: "前菜 - Antipasto",
        kindId: 0,
        title: "クロスティーニ",
        subtitle: "Crostini",
        pepperLevel: 0,
        description: "バゲットを焼き上げ、チーズとほうれん草を添えた一品"
    },
    {
        id: 10,
        image: Minestrone,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "ミネストローネ",
        subtitle: "Minestrone",
        pepperLevel: 1,
        description: "じっくり野菜を炒めてから煮込んだ香り高いスープ"
    },
    {
        id: 11,
        image: Arrabbiata,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "ペンネアラビアータ",
        subtitle: "Penne all'Arrabbiata",
        pepperLevel: 3,
        description: "ピリ辛のトマトソースにペンネを加えた一品"
    },
    {
        id: 12,
        image: Genovese,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "ジェノベーゼ",
        subtitle: "Cavatappi con pesto alla genovese",
        pepperLevel: 0,
        description: "らせん状のパスタ・カヴァタッピを使ったジェノベーゼ"
    },
    {
        id: 13,
        image: Risotto,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "リゾット",
        subtitle: "Risotto ai funghi",
        pepperLevel: 0,
        description: "香ばしく炒めたマッシュルームをクリーミーに仕上げた一品"
    },
    {
        id: 20,
        image: Piccata,
        kind: "セコンドピアット - Secondo Piatto",
        kindId: 2,
        title: "ピカタ",
        subtitle: "Piccata di vitello al limone",
        pepperLevel: 0,
        description: "薄切りの仔牛肉を炒め、レモンで味付けした一品"
    },
    {
        id: 21,
        image: AcquaPazza,
        kind: "セコンドピアット - Secondo Piatto",
        kindId: 2,
        title: "アクアパッツァ",
        subtitle: "Pesce all'acqua pazza",
        pepperLevel: 1,
        description: "ネギとオリーブ、マッシュルームを使った白身魚の煮込み"
    },
    {
        id: 30,
        image: Tiramisu,
        kind: "デザート - Dolce",
        kindId: 3,
        title: "ティラミス",
        subtitle: "Tiramisù",
        pepperLevel: 0,
        description: "カスタードとマスカルポーネを使ったシンプルな一品"
    },
    {
        id: 31,
        image: PannaCotta,
        kind: "デザート - Dolce",
        kindId: 3,
        title: "パンナコッタ",
        subtitle: "Panna cotta di parmigiano reggiano",
        pepperLevel: 0,
        description: "パルミジャーノ・レッジャーノを使ったパンナコッタ"
    }
];

export default MenuItemsInfo;
