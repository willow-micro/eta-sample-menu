// System
import React from 'react';
// Material-UI
//// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//// App Bar
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { grey, deepOrange, teal, amber } from '@material-ui/core/colors';

// User
import Caprese from '../../images/Caprese-1-refined@800.png';

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
}

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
        // Toolbar Title
        toolBarTitle: {
            marginLeft: theme.spacing( 2 ),
            userSelect: 'none'
        },
        // Grid Container
        gridContainer: {
            margin: theme.spacing( 2 )
        },
        // Card
        card: {
            backgroundColor: SystemColor.ExtraLightYellow
        },
        // Card Class
        cardClass: {
            fontSize: 14,
            userSelect: 'none'
        },
        // Card Title
        cardTitle: {
            userSelect: 'none'
        },
        // Card Subtitle
        cardSubtitle: {
            marginBottom: 12,
            userSelect: 'none'
        },
        // Card Media
        cardMedia: {
            height: 220
        }
    })
);


// Main Component
const MainView = () => {
    // Style
    const classes = useStyles();

    // States

    // Handlers
    const onClickItem = () => {
        console.log("Clicked item");
    };

    // Variables

    // JSX
    return (
        <ThemeProvider theme={ customTheme }>
          <div className={ classes.root }
               role="application">
            <AppBar className={ classes.appBar } position="static" elevation={ 2 }
                    role="navigation">
              <Toolbar className={ classes.toolBar } variant="dense">
                <Typography className={ classes.toolBarTitle } variant="h6" color="inherit">
                  Menu
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid className={ classes.gridContainer } container spacing={ 2 }
                  role="list">
              <Grid item xs={ 3 }
                    role="listitem">
                <Card className={ classes.card } elevation={ 3 }>
                  <CardMedia className={ classes.cardMedia }  title="Caprese" image={ Caprese }
                             role="img" />
                  <CardContent role="document">
                    <Typography className={ classes.cardClass } color="textSecondary" gutterBottom>
                      前菜 - Antipasto
                    </Typography>
                    <Typography className={ classes.cardTitle } variant="h5" component="h2">
                      カプレーゼ
                    </Typography>
                    <Typography className={ classes.cardSubtitle } color="textSecondary">
                      Insalata Caprese
                    </Typography>
                    <Typography variant="body2" component="p">
                      新鮮なトマトとモッツァレラにバジリコを添え、オリーブオイルで味付けしたシンプルな一品
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="primary" onClick={ onClickItem }
                            role="button">詳しく</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
    );
};

// Function Componentは，宣言とは別途exportする必要がある．
// 同時にexportすると，正しくトランスパイルされない．これは通常のconst定数も同様かと思われる
export default MainView;
