import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import backArrow from '../chapters/back-arrow.svg';
import toprockBackground from './toprock-background.svg';

const VideoPlayer = ({subjects, match}) => {

    const onClick = () => {
        window.history.back();
    }

    let chapterIndex;
    let chapterLength;
    let lessonIndex;
    let lessonLength;
    let myredirect = '/';

    const subject = subjects.find((subject) => subject.id === parseInt(match.params.subject));
    let chapter = subject && subject.chapters.find((chapter, index, array) => {
        console.log('1',index,array.length);
        chapterLength = array.length;
        chapterIndex = index;
        return chapter.id === parseInt(match.params.chapter);
    });
    let lesson = subject && chapter.lessons.find((lesson, index, array) => {
        console.log('2',index,array.length);
        lessonLength = array.length;
        lessonIndex = index;
        return lesson.id === parseInt(match.params.lesson)
    });

    if((lessonIndex + 1) < lessonLength){
        myredirect = `/video-player/${parseInt(match.params.subject)}/${subject.chapters[chapterIndex].id}/${subject.chapters[chapterIndex].lessons[lessonIndex+1].id}`;
    }
    else if (((lessonIndex + 1) === lessonLength) && ((chapterIndex + 1) < chapterLength)){
        myredirect = `/video-player/${parseInt(match.params.subject)}/${subject.chapters[chapterIndex+1].id}/${subject.chapters[chapterIndex+1].lessons[0].id}`;
    };
    return (
        <main className='main-rel3'>
            <img src={backArrow} alt='' onClick={onClick}/>
            <img src={toprockBackground} alt=''/>
            <div className='my-container'>
                <div className="player-video">
                    {subject ?(<video className="video" controls loop preload="auto">
                        <source src={subject && lesson.media_url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>) : <h4>Loading...</h4>}
                </div>
                <div className="player-details">
                    <span className="details-content">
                    <h5>{subject && lesson.name}</h5>
                    <h6>{subject && chapter.name}</h6>
                    <Link to={myredirect}>
                    <button className="player-btn" style={{backgroundImage: "url(/player-button.svg)"}}>
                        NEXT
                    </button>
                    </Link>
                    </span>
                </div>
            </div>
        </main>
    )
}

VideoPlayer.propTypes = {
    subjects: PropTypes.array.isRequired
};
  
const mapStateToProps = (state) => ({
    subjects: state.auth.subjects
});

export default connect(mapStateToProps)(VideoPlayer);