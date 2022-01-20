// System
import React from 'react';
// Material-UI
//// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//// App Bar
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Grid, Tab, Tabs, Tooltip } from '@material-ui/core';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { grey, deepOrange, teal, amber } from '@material-ui/core/colors';

// User
import MenuItemsInfo from '../../MenuItemsInfo';
import ItemCard from '../elements/ItemCard';


// Colors
const SystemColor = {
    Primary: deepOrange[900],
    Secondary: teal[900],
    PrimaryText: grey[50],
    SecondaryText: grey[50],
    White: grey[50],
    Black: grey[900],
    LightGrey: grey[100],
    DarkGrey: grey[300],
    ExtraDarkGrey: grey[500],
    Red: deepOrange[900],
    Green: teal[900],
    ExtraLightYellow: amber[50]
};

// Material-UI Custom Theme Application
// Default values: https://material-ui.com/customization/default-theme/
const customTheme = createMuiTheme( {
    // Spacingの設定
    spacing: 8,                 // デフォルト値: 8px
    // カラースキームの設定
    palette: {
        // プライマリ
        primary: {
            main: SystemColor.Primary,
            contrastText: SystemColor.PrimaryText,
        },
        // セカンダリ
        secondary: {
            main: SystemColor.Secondary,
            contrastText: SystemColor.SecondaryText,
        },
    },
    // フォントの設定
    typography: {
        // すべてのフォントファミリーの変更
        fontFamily: [
            'Roboto',
            'Noto Sans JP',
            'sans-serif',
        ].join( ',' ),
        // フォントサイズの変更
        // htmlFontSizeを変更すると, rem (root em)で指定したフォントサイズが影響を受ける．
        // よってTypographyの各variantのフォントサイズも変化してしまうため，これは変更していない
        htmlFontSize: 16,       // デフォルト値: 16px
    },
    // Material-UIのコンポーネントのデフォルトスタイルの上書き
    overrides: {
        // TextField
        MuiTextField: {
            root: {
                // InputPropsにminおよびmaxを指定した際，その値に応じて親要素より小さくなってしまう現象を防ぐ
                width: '100%'
            }
        }
    }
} );

// スタイルの修正（このファイルのみ）
const useStyles = makeStyles( ( theme: Theme ) =>
    createStyles( {
        // Root
        root: {
            flexGrow: 1
        },
        // Label
        label: {
            userSelect: 'none'
        },
        // AppBar
        appBar: {
            /* backgroundColor: SystemColor.DarkGrey,
             * color: SystemColor.Black */
            backgroundColor: SystemColor.Red,
            color: SystemColor.White
        },
        // ToolBar (inside AppBar) Has Button, etc.
        toolBar: {
            flexWrap: 'nowrap',
            alignItems: 'center'
        },
        // ToolBar Title
        toolBarTitle: {
            marginLeft: theme.spacing( 2 ),
            userSelect: 'none'
        },
        // ToolBar Tabs
        toolBarTabs: {
            flexGrow: 1       // 自分自身の幅も含めず（含めるときはflex），1の優先度で領域を確保する
        },
        // Grid Container
        gridContainer: {
            width: '100%',
            marginTop: theme.spacing( 6 ),
            marginRight: theme.spacing( 0 ),
            marginBottom: theme.spacing( 2 ),
            marginLeft: theme.spacing( 0 )
        }
    })
);


// Main Component
const MainView = () => {
    // Style
    const classes = useStyles();

    // States
    const [toolBarTabValue, setToolBarTabValue] = React.useState( 0 );
    const [isWelcomeDialogOpen, setIsWelcomeDialogOpen] = React.useState( true );

    // Handlers
    const onClickItem = (id) => {
        console.log(`Clicked an item (id: ${id})`);
    };
    const onClickToolBarTabList = (e, newValue) => {
        setToolBarTabValue( newValue );
        console.log(typeof(newValue));
        console.log(`Clicked a tab (value: ${newValue})`);
    };
    const handleWelcomeDialogOpen = () => {
        setIsWelcomeDialogOpen(true);
    };
    const handleWelcomeDialogClose = () => {
        setIsWelcomeDialogOpen(false);
    };
    // Variables

    // JSX
    //// Sub Component
    const MenuItemsGrid = (props) => {
        // Variable
        const selectedItemsInfo = props.itemsInfo.filter((info) => {
            return ( info.hasOwnProperty("kindId") && info.kindId === props.kindId );
        });
        // Sub Component
        const selectedGridItems = selectedItemsInfo.map((info, index) => {
            return (
                <Grid key={ info.id } item xs={ 3 }
                      role="listitem" aria-label="カードアイテム">
                  <ItemCard info={ info } onClick={ onClickItem }
                            posinset={ index + 1 } setsize={ selectedItemsInfo.length } />
                </Grid>
            );
        });
        // Main Component
        return (
            <Grid className={ props.classes.gridContainer } container spacing={ 2 }
                  component="section" role="list" aria-label="カードアイテムのリスト">
              { selectedGridItems }
            </Grid>
        );
    };

    //// Main Component
    return (
        <ThemeProvider theme={ customTheme }>
          <Dialog BackdropProps={ { style: { backgroundColor: SystemColor.DarkGrey } } }
                  fullWidth={ true }
                  maxWidth="md"
                  open={ isWelcomeDialogOpen }
                  onClose={ handleWelcomeDialogClose }
                  aria-labelledby="welcome-dialog-title" aria-label="ウェルカムダイアログ">
            <DialogTitle id="max-width-dialog-title"
                         aria-label="ウェルカムダイアログのタイトル">
              <Typography align="center" color="primary" variant="h3">
                ようこそ
              </Typography>
            </DialogTitle>
            <DialogContent aria-label="ウェルカムダイアログの情報セクション">
              <DialogContentText align="center" color="textPrimary" variant="body1"
                                 aria-label="ウェルカムダイアログのテキスト">
                当店のイタリアンコースは、4種の区分から1品ずつ、<br />
                合わせて4品お選びいただく方式となっております。<br /> <br />
                どうぞごゆっくりとお選びください。<br /> <br />
                お望みの品が決まりましたら、それぞれの品のチェックボックスに印をつけてくださいませ。
              </DialogContentText>
            </DialogContent>
            <DialogActions style={ { justifyContent: 'center' } }
                           aria-label="ウェルカムダイアログの操作セクション">
              <Button onClick={ handleWelcomeDialogClose } color="primary" variant="contained"
                      role="button" aria-label="ウェルカムダイアログの注文開始ボタン">
                注文を開始する
              </Button>
            </DialogActions>
          </Dialog>
          <div className={ classes.root }
               role="application" aria-label="アプリのルート要素">
            { /* Header */ }
            <AppBar className={ classes.appBar } position="fixed" elevation={ 2 }>
              <Toolbar className={ classes.toolBar } variant="dense"
                       component="nav" role="navigation" aria-label="メニューバー">
                <Typography className={ classes.toolBarTitle } variant="h6" color="inherit"
                            aria-label="アプリのタイトル">
                  Menù
                </Typography>
                <Tabs className={ classes.toolBarTabs } value={ toolBarTabValue } onChange={ onClickToolBarTabList } centered
                      role="tablist" aria-label="コース選択タブのリスト">
                  <Tooltip title="前菜">
                    <Tab value={ 0 } label="Antipasto" id="tab-0" tabIndex="0"
                         role="tab" aria-controls="tabpanel-0" aria-selected={ (toolBarTabValue === 0 ) ? "true" : "false" }
                         aria-label="前菜タブ" />
                  </Tooltip>
                  <Tooltip title="主菜（スープ・パスタ・リゾット）">
                    <Tab value={ 1 } label="Primo Piatto" id="tab-1" tabIndex="0"
                         role="tab" aria-controls="tabpanel-1" aria-selected={ (toolBarTabValue === 1 ) ? "true" : "false" }
                         aria-label="主菜（スープ・パスタ・リゾット）タブ" />
                  </Tooltip>
                  <Tooltip title="主菜（肉・魚料理）">
                    <Tab value={ 2 } label="Secondo Piatto" id="tab-2" tabIndex="0"
                         role="tab" aria-controls="tabpanel-2" aria-selected={ (toolBarTabValue === 2 ) ? "true" : "false" }
                         aria-label="主菜（肉・魚料理）タブ" />
                  </Tooltip>
                  <Tooltip title="デザート">
                    <Tab value={ 3 } label="Dolce" id="tab-3" tabIndex="0"
                         role="tab" aria-controls="tabpanel-3" aria-selected={ (toolBarTabValue === 3 ) ? "true" : "false" }
                         aria-label="デザートタブ" />
                  </Tooltip>
                </Tabs>
              </Toolbar>
            </AppBar>
            { /* Content */ }
            <div id="tabpanel-0" hidden={ (toolBarTabValue !== 0 ) }
                 role="tabpanel" aria-labelledby="tab-0" aria-label="前菜パネル">
              <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 0 } />
            </div>
            <div id="tabpanel-1" hidden={ (toolBarTabValue !== 1 ) }
                 role="tabpanel" aria-labelledby="tab-1" aria-label="主菜（スープ・パスタ・リゾット）パネル">
              <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 1 } />
            </div>
            <div id="tabpanel-2" hidden={ (toolBarTabValue !== 2 ) }
                 role="tabpanel" aria-labelledby="tab-2" aria-label="主菜（肉・魚料理）パネル">
              <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 2 } />
            </div>
            <div id="tabpanel-3" hidden={ (toolBarTabValue !== 3 ) }
                 role="tabpanel" aria-labelledby="tab-3" aria-label="デザートパネル">
              <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 3 } />
            </div>
          </div>
        </ThemeProvider>
    );
};

// Function Componentは，宣言とは別途exportする必要がある．
// 同時にexportすると，正しくトランスパイルされない．これは通常のconst定数も同様かと思われる
export default MainView;
