// System
import React from 'react';
// Material-UI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Card, CardContent, CardMedia, CardActions } from '@material-ui/core';

// User


// スタイルの修正（このファイルのみ）
const useStyles = makeStyles( ( theme: Theme ) =>
    createStyles( {
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
            marginBottom: 12,
            userSelect: 'none'
        },
        // Card Media
        cardMedia: {
            height: 200
        }
    })
);


// Main Component
const ItemCard = (props) => {
    // Style
    const classes = useStyles();

    // States

    // Handlers

    // Variables

    // JSX
    return (
        <Card elevation={ 4 }>
          <section role="banner">
            <CardMedia className={ classes.cardMedia } image={ props.info.image } title={ props.info.title }
                       role="img" aria-label={ props.info.title }/>
            <CardContent className={ classes.cardContent }
                         role="document">
              <Typography className={ classes.cardKind } color="textSecondary" gutterBottom>
                { props.info.kind }
              </Typography>
              <Typography className={ classes.cardTitle } variant="h5" component="h2">
                { props.info.title }
              </Typography>
              <Typography className={ classes.cardSubtitle } color="textSecondary">
                { props.info.subtitle }
              </Typography>
              <Typography variant="body2" component="p">
                { props.info.description }
              </Typography>
            </CardContent>
          </section>
          <CardActions role="form">
            <Button color="primary" onClick={ () => { props.onClick(props.info.id) } }
                    role="button">詳しく</Button>
          </CardActions>
        </Card>
    );
};

// Function Componentは，宣言とは別途exportする必要がある．
// 同時にexportすると，正しくトランスパイルされない．これは通常のconst定数も同様かと思われる
export default ItemCard;
