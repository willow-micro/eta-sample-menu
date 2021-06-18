// System
import React from 'react';
// Material-UI
//// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//// App Bar
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Grid, Tab, Tooltip } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
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
    const [toolBarTabValue, setToolBarTabValue] = React.useState( "antipasto" );

    // Handlers
    const onClickItem = (id) => {
        console.log(`Clicked an item (id: ${id})`);
    };
    const onClickToolBarTabList = (e, newValue) => {
        setToolBarTabValue( newValue );
        console.log(typeof(newValue));
        console.log(`Clicked a tab (value: ${newValue})`);
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
                      role="listitem">
                  <ItemCard info={ info } onClick={ onClickItem }
                            posinset={ index + 1 } setsize={ selectedItemsInfo.length } />
                </Grid>
            );
        });
        // Main Component
        return (
            <Grid className={ props.classes.gridContainer } container spacing={ 2 }
                  component="section" role="list">
              { selectedGridItems }
            </Grid>
        );
    };

    //// Main Component
    return (
        <ThemeProvider theme={ customTheme }>
          <div className={ classes.root }
               role="application">
            <TabContext value={ toolBarTabValue }>
              { /* Header */ }
              <AppBar className={ classes.appBar } position="fixed" elevation={ 2 }>
                <Toolbar className={ classes.toolBar } variant="dense"
                         component="nav" role="navigation" aria-label="メニューバー">
                  <Typography className={ classes.toolBarTitle } variant="h6" color="inherit">
                    Menu
                  </Typography>
                  <TabList className={ classes.toolBarTabs } value={ toolBarTabValue } onChange={ onClickToolBarTabList }
                           centered aria-label="タブ">
                    <Tooltip title="前菜">
                      <Tab value="antipasto" label="Antipasto" />
                    </Tooltip>
                    <Tooltip title="パスタ・リゾットなど">
                      <Tab value="primo" label="Primo Piatto" />
                    </Tooltip>
                    <Tooltip title="肉・魚料理など">
                      <Tab value="secondo" label="Secondo Piatto" />
                    </Tooltip>
                    <Tooltip title="デザート">
                      <Tab value="dolce" label="Dolce" />
                    </Tooltip>
                  </TabList>
                </Toolbar>
              </AppBar>
              { /* Content */ }
              <TabPanel value="antipasto">
                <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 1 } />
              </TabPanel>
              <TabPanel value="primo">
                <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 2 } />
              </TabPanel>
              <TabPanel value="secondo">
                <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 3 } />
              </TabPanel>
              <TabPanel value="dolce">
                <MenuItemsGrid classes={ { gridContainer: classes.gridContainer } } itemsInfo={ MenuItemsInfo } kindId={ 4 } />
              </TabPanel>
            </TabContext>
          </div>
        </ThemeProvider>
    );
};

// Function Componentは，宣言とは別途exportする必要がある．
// 同時にexportすると，正しくトランスパイルされない．これは通常のconst定数も同様かと思われる
export default MainView;
