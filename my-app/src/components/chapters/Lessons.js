import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Lessons = ({index, chapter, subject}) => {
    return (
        <div>
            <h2>{`${index+1}. ${chapter.name}`}</h2>
            <div className='chapter-lessons'>
            {chapter.lessons.length > 0 ? (
                chapter.lessons.map(lesson => (
                    <span key={lesson.id} className='chapter-lesson'>
                        <Link to={`/video-player/${subject.id}/${chapter.id}/${lesson.id}`}><img src={lesson.icon} alt=''/></Link>
                    </span>
                ))
                ) : (
                <h4>No lessons found...</h4>
            )}
            </div>
        </div>
    )
}

Lessons.propTypes = {
    index: PropTypes.number.isRequired,
    chapter: PropTypes.object.isRequired,
    subject: PropTypes.object.isRequired
};

export default Lessons;