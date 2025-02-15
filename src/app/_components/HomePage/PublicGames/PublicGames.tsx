import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import JoinableGame from '../_subcomponents/JoinableGame/JoinableGame';
import GamesInProgress from '../_subcomponents/GamesInProgress/GamesInProgress';
import { IPublicGamesProps } from '../HomePageTypes';

const PublicGames: React.FC<IPublicGamesProps> = ({ format }) => {
    const styles = {
        publicGamesWrapper: {
            height: '100%',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        divider: {
            backgroundColor: '#fff',
            my: '.7em',
        },
    };

    return (
        <Card variant="black" sx={styles.publicGamesWrapper}>
            <CardContent sx={styles.cardContent}>
                <Typography variant="h2">Public Games</Typography>
                <Typography variant="h3">{format}</Typography>
                <Divider sx={styles.divider} />
                <JoinableGame />
                <Typography variant="h3">
                    Request-Undo {format}
                </Typography>
                <Divider sx={styles.divider} />
                <GamesInProgress />
            </CardContent>
        </Card>
    );
};

export default PublicGames;
