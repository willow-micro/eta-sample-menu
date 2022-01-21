// User
import Caprese from './images/Caprese-1-refined@800.png';
import Crostini from './images/Crostini_by_Charles_Haynes-refined@800.png'
import Panissa from './images/Panissa_ai_cipollotti-refined@800.png'
import Prosciutto from './images/Antipasti_at_Franco_Manca_(19936061828)-refined@800.png'
import Arrabbiata from './images/Penne_all\'arrabbiata-refined@800.png';
import Genovese from './images/Pasta_with_pesto-refined@800.png';
import Risotto from './images/Italian_Risotto-refined@800.png';
import Ravioli from './images/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme-refined@800.png';
import AcquaPazza from './images/Acqua_pazza-refined@800.png';
import Ossobuco from './images/Redaktionsvortreffen_EuT_2_ossobuco_16.04.2011_22-59-12-refined@800.png';
import Cotoletta from './images/Cotoletta_alla_milanese_in_milano-refined@800.png';
import Piccata from './images/Veal_piccata-refined@800.png';
import Tiramisu from './images/Tiramisu_-_Raffaele_Diomede-refined@800.png';
import PannaCotta from './images/Parmesan_Pannacotta_-_Amuse_Bouche_-_Lake_House_Restaurant,_Daylesford-refined@800.png';
import Semifreddo from './images/Semifreddo_nocciola-refined@800.png';
import Pizzelle from './images/Pizzelle_filled_with_orange-almond_creme,_April_2011-refined@800.png';


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
        kcal: 124,
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
        kcal: 140,
        description: "バゲットを焼き上げ、チーズとほうれん草を添えた一品"
    },
    {
        id: 2,
        image: Panissa,
        kind: "前菜 - Antipasto",
        kindId: 0,
        title: "パニッサ",
        subtitle: "Panissa",
        pepperLevel: 0,
        kcal: 158,
        description: "ひよこ豆からつくった生地を揚げ、ねぎを和えた一品"
    },
    {
        id: 3,
        image: Prosciutto,
        kind: "前菜 - Antipasto",
        kindId: 0,
        title: "プロシュット",
        subtitle: "Prosciutto",
        pepperLevel: 0,
        kcal: 108,
        description: "モッツアレラチーズを添えたプロシュット"
    },
    {
        id: 10,
        image: Arrabbiata,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "アラビアータ",
        subtitle: "Penne all'Arrabbiata",
        pepperLevel: 3,
        kcal: 590,
        description: "ピリ辛のトマトソースにペンネリガーテを加えた一品"
    },
    {
        id: 11,
        image: Genovese,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "ジェノベーゼ",
        subtitle: "Pesto alla genovese",
        pepperLevel: 0,
        kcal: 612,
        description: "らせん状のパスタ・カヴァタッピを使ったジェノベーゼ"
    },
    {
        id: 12,
        image: Ravioli,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "ラビオリ",
        subtitle: "Ravioli",
        pepperLevel: 0,
        kcal: 579,
        description: "合い挽き肉を包んだパスタ、ラビオリのクリームソース仕立て"
    },
    {
        id: 13,
        image: Risotto,
        kind: "プリモピアット - Primo Piatto",
        kindId: 1,
        title: "リゾット",
        subtitle: "Risotto ai funghi",
        pepperLevel: 0,
        kcal: 512,
        description: "香ばしく炒めたマッシュルームをクリーミーに仕上げた一品"
    },
    {
        id: 20,
        image: AcquaPazza,
        kind: "セコンドピアット - Secondo Piatto",
        kindId: 2,
        title: "アクアパッツァ",
        subtitle: "Pesce all'acqua pazza",
        pepperLevel: 1,
        kcal: 299,
        description: "ネギとオリーブ、マッシュルームを使った白身魚の煮込み"
    },
    {
        id: 21,
        image: Ossobuco,
        kind: "セコンドピアット - Secondo Piatto",
        kindId: 2,
        title: "オッソ・ブーコ",
        subtitle: "Ossobuco",
        pepperLevel: 0,
        kcal: 450,
        description: "骨付きの仔牛肉と香味野菜を白ワインで煮込んだ一品"
    },
    {
        id: 22,
        image: Cotoletta,
        kind: "セコンドピアット - Secondo Piatto",
        kindId: 2,
        title: "コトレッタ",
        subtitle: "Cotoletta alla milanese",
        pepperLevel: 0,
        kcal: 822,
        description: "仔牛肉にパン粉をつけ、バターで揚げたコトレッタ・アッラ・ミラネーゼ"
    },
    {
        id: 23,
        image: Piccata,
        kind: "セコンドピアット - Secondo Piatto",
        kindId: 2,
        title: "ピカタ",
        subtitle: "Piccata di vitello al limone",
        pepperLevel: 0,
        kcal: 348,
        description: "薄切りの仔牛肉を炒め、レモンで味付けした一品"
    },
    {
        id: 30,
        image: Tiramisu,
        kind: "デザート - Dolce",
        kindId: 3,
        title: "ティラミス",
        subtitle: "Tiramisù",
        pepperLevel: 0,
        kcal: 379,
        description: "カスタードとマスカルポーネを使った定番のドルチェ"
    },
    {
        id: 31,
        image: PannaCotta,
        kind: "デザート - Dolce",
        kindId: 3,
        title: "パンナコッタ",
        subtitle: "Panna cotta",
        pepperLevel: 0,
        kcal: 211,
        description: "パルミジャーノ・レッジャーノを使ったパンナコッタ"
    },
    {
        id: 32,
        image: Semifreddo,
        kind: "デザート - Dolce",
        kindId: 3,
        title: "セミフレッド",
        subtitle: "Semifreddo",
        pepperLevel: 0,
        kcal: 221,
        description: "ジェラートを使ったやわらかいアイスケーキ"
    },
    {
        id: 33,
        image: Pizzelle,
        kind: "デザート - Dolce",
        kindId: 3,
        title: "ピッツェル",
        subtitle: "Pizzelle",
        pepperLevel: 0,
        kcal: 162,
        description: "オレンジアーモンドクリームを挟んださくさく食感のクッキー"
    }
];

export default MenuItemsInfo;
