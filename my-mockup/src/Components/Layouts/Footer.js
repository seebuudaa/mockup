import React, { Component } from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';




export default props => 
<Paper >
    <Tabs
    value={0}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        >
       <Tab label ="Item One" />     
       <Tab label ="Item One" />     

       <Tab label ="Item One" />     

    </Tabs>
</Paper>