// System
import React, { useState, useEffect } from 'react';
// Material-UI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Button, Checkbox, Grid } from '@material-ui/core';
import { Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { grey, deepOrange, teal, amber } from '@material-ui/core/colors';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

// User
import { useCheckedContext } from '../../CheckedContext';

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

// スタイルの修正（このファイルのみ）
const useStyles = makeStyles( ( theme: Theme ) =>
    createStyles( {
        // Card
        card: {
        },
        // Card Content
        cardContent: {
            paddingTop: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: 0,
            paddingLeft: theme.spacing(2)
        },
        // Card Kind
        cardKind: {
            fontSize: 14,
            userSelect: 'none'
        },
        // Card Title
        cardTitle: {
            userSelect: 'none'
        },
        // Card Subtitle
        cardSubtitle: {
            userSelect: 'none'
        },
        // Card Media
        cardMedia: {
            height: '35vh'
        },
        // Card Icon Text
        cardIconText: {
            marginTop: theme.spacing( 2 )
        },
        // Image (Details dialog)
        img: {
            display: 'block',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: theme.spacing( 2 ),
            marginLeft: 'auto',
            width: '30vw'
        },
        // kcal
        kcalText: {
            marginTop: theme.spacing( 1 )
        },
        // Buttons on dialog
        buttonOnDialog: {
            marginBottom: theme.spacing( 1 )
        }
    })
);


// Main Component
const ItemCard = (props) => {
    // Style
    const classes = useStyles();

    // States
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState( false );
    const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState( false );

    // Contexts
    const { checked, setChecked } = useCheckedContext();

    // Effects
    useEffect(() => {
        if (checked[props.info.kindId] !== props.posinset ) {
            setIsCheckBoxChecked(false);
        } else {
            setIsCheckBoxChecked(true);
        }
    }, [checked, props.info.kindId, props.posinset]);

    // Handlers
    const onCheckBoxChanged = (event) => {
        let result = event.target.checked;
        let checkState = [...checked];
        if (result === true) {
            checkState[props.info.kindId] = props.posinset;
            setIsCheckBoxChecked(true);
        } else {
            checkState[props.info.kindId] = 0;
            setIsCheckBoxChecked(false);
        }
        setChecked(checkState);
    };
    const handleDetailsDialogOpen = () => {
        setIsDetailsDialogOpen(true);
    };
    const handleDetailsDialogClose = () => {
        setIsDetailsDialogOpen(false);
    };
    const onDetailsButtonClicked = () => {
        props.onClick(props.info.id);
        handleDetailsDialogOpen();
    };

    // Variables


    // JSX
    //// Sub
    let pepperIcons = [];
    for ( let i = 0; i < props.info.pepperLevel; i++ ) {
        pepperIcons.push(<FontAwesomeIcon key={ i } icon={ faPepperHot } color={ SystemColor.Red } size="lg" />);
    }

    //// Main
    return (
        <>
          { /* Details Dialog */ }
          <Dialog fullWidth={ true }
                  maxWidth="md"
                  open={ isDetailsDialogOpen }
                  onClose={ handleDetailsDialogClose }
                  aria-labelledby="details-dialog-title" aria-label={ props.info.title + "の詳細ダイアログ" }>
            <DialogTitle id="details-dialog-title"
                         aria-label={ props.info.title + "の詳細ダイアログのタイトル" }>
              <Typography align="center" color="textPrimary" variant="h4">
                { props.info.title }
              </Typography>
              <Typography align="center" color="textSecondary" variant="subtitle1"
                          aria-label={ props.info.title + "の詳細ダイアログのサブタイトルテキスト" }>
                { props.info.subtitle }
              </Typography>
            </DialogTitle>
            <DialogContent aria-label={ props.info.title + "の詳細ダイアログの情報セクション"}>
              <img className={ classes.img } src={ props.info.image } alt={ props.info.title }
                   aria-label={ props.info.title + "の詳細ダイアログの画像" }/>
              <Typography variant="body1" component="p"
                          align="center"
                          aria-label={ props.info.title + "の概要説明テキスト" }>
                { props.info.description }
              </Typography>
              <Typography className={ classes.cardIconText } align="center" variant="subtitle2" component="p"
                          aria-label={ props.info.title + "の辛さレベルテキスト" }>
                辛さレベル：{ (pepperIcons.length > 0) ? pepperIcons : "なし" }
              </Typography>
              <Typography className={ classes.kcalText }
                          align="center" variant="body2" component="p"
                          aria-label={ props.info.title + "のカロリーテキスト" }>
                { props.info.kcal + "kcal" }
              </Typography>
            </DialogContent>
            <DialogActions style={ { justifyContent: 'center' } }
                           aria-label={ props.info.title + "の詳細ダイアログの操作セクション"}>
              <Button className={ classes.buttonOnDialog }
                      onClick={ handleDetailsDialogClose } color="primary" variant="contained"
                      role="button" aria-label="詳細ダイアログの操作セクションの閉じるボタン">
                閉じる
              </Button>
            </DialogActions>
          </Dialog>
          <Card elevation={ 4 } className={ classes.card }
                component="article" role="article" aria-posinset={ props.posinset } aria-setsize={ props.setsize }
                aria-label={ props.info.title + "のカード本体" }>
            <section role="banner" aria-label={ props.info.title + "カードの情報セクション" }>
              <CardMedia className={ classes.cardMedia } image={ props.info.image } title={ props.info.title }
                         role="img" aria-label={ props.info.title + "のサムネイル画像" }/>
              <CardContent className={ classes.cardContent }
                           role="document" aria-label={ props.info.title + "の概要文章" }>
                <Typography className={ classes.cardKind } color="textSecondary" gutterBottom
                            aria-label={ props.info.title + "の種別テキスト" }>
                  { props.info.kind }
                </Typography>
                <Typography className={ classes.cardTitle } variant="h5" component="h2"
                            aria-label={ props.info.title + "のタイトルテキスト" }>
                  { props.info.title }
                </Typography>
                <Typography className={ classes.cardSubtitle } color="textSecondary"
                            aria-label={ props.info.title + "のサブタイトルテキスト" }>
                  { props.info.subtitle }
                </Typography>
              </CardContent>
            </section>
            <CardActions role="form" aria-label={ props.info.title + "カードの操作セクション" }>
              <Grid container spacing={ 2 } justify="space-between" alignItems="center">
                <Grid item>
                  <Checkbox color="primary" inputProps={{ 'aria-label': props.info.title + 'の選択チェックボックス' }}
                            checked={ isCheckBoxChecked } onChange={ onCheckBoxChanged } />
                  <Typography align="left" variant="body2" color="textPrimary" display="inline"
                              style={ { verticalAlign: 'middle' } }>
                    選択
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained" size="medium" onClick={ onDetailsButtonClicked }
                          role="button" aria-label={ props.info.title + "の詳細表示ボタン" }>
                    詳細を見る
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </>
    );
};

// Function Componentは，宣言とは別途exportする必要がある．
// 同時にexportすると，正しくトランスパイルされない．これは通常のconst定数も同様かと思われる
export default ItemCard;
