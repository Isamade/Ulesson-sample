import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Lessons from './Lessons';
import Navbar from '../layout/Navbar';
import backArrow from './back-arrow.svg';
import digitsBackground from './digits-background.svg';

const Chapters = ({subjects, match}) => {
    const onClick = () => {
        window.history.back();
    }

    const subject = subjects.find((subject) => subject.id === parseInt(match.params.subject));
    return (
        <Fragment>
        <Navbar />
        <main className='main-rel2'>
            <img src={backArrow} alt='' onClick={onClick}/>
            <img src={digitsBackground} alt=''/>
            <div className="my-container">
                <h1>{subject && subject.name}</h1>
                <div>
                    {subject ? (
                        subject.chapters.map((chapter, index) => (
                            <Lessons key={chapter.id} chapter={chapter} index={index} subject={subject} className='chapter-lessons'/>
                        ))
                        ) : (
                        <h4>No subjects found...</h4>
                    )}
                </div>
            </div>
        </main>
        </Fragment>
    )
}

Chapters.propTypes = {
    subjects: PropTypes.array.isRequired
};
  
const mapStateToProps = (state) => ({
    subjects: state.auth.subjects
});

export default connect(mapStateToProps)(Chapters);