import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {NavLink} from 'react-router-dom';

class TheEnd extends Component{
  render(){
    return(
      <div>
        <Tabs>
          <TabList>
            <Tab>Your Progress</Tab>
            <Tab>Compare Stats</Tab>
            <Tab>The End Tab</Tab>
          </TabList>
          <TabPanel>
            <p>
              Test1 Progress
            </p>
            <div className='progressContainer'>
            <ul className='progressLine'>
              {this.props.chapterlists.map(chapterlist => <li className='progressBox' key={chapterlist._id}>
                  <div>Chapter: {chapterlist.chapterNum}</div>
                  <div>Title: {chapterlist.title}</div>
                </li>)}
            </ul>

            </div>
          </TabPanel>
          <TabPanel>
            <p>
              Test2 Stats
            </p>
              <div className='statsContainer'>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
              </div>
          </TabPanel>
          <TabPanel>
            <NavLink to='/' activeClassName='exitLink'><button className='btn draw-border'>Exit back to the beginning</button></NavLink>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


export default TheEnd;
