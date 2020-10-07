import React from 'react';
import { Paper } from 'material-ui';
import { Grid } from 'material-ui/core/Grid';

const style ={
    Paper: { padding: 26, margin: 16, marginBotton: 10}
}
export default props =>

<Grid Container>
    <Grid item sm>
        <Paper style={style.Paper}>
            Left Pane
        </Paper>
        <Grid item sm>
        <Paper style={style.Paper}>
            Right Pane
        </Paper>
    </Grid>
    </Grid>
</Grid>