import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoLinks from './VideoLinks';
import Navbar from '../layout/Navbar';

const Dashboard = ({subjects}) => {

    const topics = [
        {id:1,name:'Understanding Motion',subject:'Mathematics',icon:'red-image.jpg',color:'#EA7052',button:'red-icon.svg'},
        {id:2,name:'Light',subject:'Physics',icon:'blue-image.jpg',color:'#7B7FDA',button:'blue-icon.svg'},
        {id:3,name:'Pollution Of Water',subject:'Chemistry',icon:'orange-image.jpg',color:'#E48E45',button:'orange-icon.svg'},
        {id:4,name:'Microorganism',subject:'Biology',icon:'green-image.jpg',color:'#4DA47E',button:'green-icon.svg'}
    ];

    return (
        <Fragment>
        <Navbar />
        <main className='main-rel'>
            <img src='hand-background.svg' alt=''/>
            <img src='rock-background.svg' alt=''/>
            <div className='my-container'>
                <h1>Hello Hassan,</h1>
                <div className='dashboard-subjects'>
                    {subjects.length > 0 ? (
                        subjects.map(subject => (
                            <span key={subject.id} className='dashboard-subject'>
                                <Link to={`/chapters/${subject.id}`}><img src={subject.icon} alt={`${subject.name}`}/></Link>
                            </span>
                        ))
                        ) : (
                        <h4>No subjects found...</h4>
                    )}
                </div>
                <div className='dashboard-section'>
                    <div className='flex-justify topics-head'>
                        <h3>Recently watched topics</h3>
                        <button className='dashboard-btn'>SEE ALL</button>
                    </div>
                    <VideoLinks topics={topics}/>
                </div>
                <div className='dashboard-section'>
                    <div className='flex-justify topics-head'>
                        <h3>Recommended videos </h3>
                        <button className='dashboard-btn'>SEE ALL</button>
                    </div>
                    <VideoLinks topics={topics}/>
                </div>
            </div>
        </main>
        </Fragment>
    )
}

Dashboard.propTypes = {
    subjects: PropTypes.array.isRequired
};
  
const mapStateToProps = (state) => ({
    subjects: state.auth.subjects
});

export default connect(mapStateToProps)(Dashboard);