import React from 'react';
import PropTypes from 'prop-types';

const VideoLinks = ({topics}) => {
    return (
        <div className='dashboard-topics flex-justify'>
            {topics.length > 0 ? (
                topics.map(topic => (
                    <div key={topic.id} className='dashboard-topic '>
                        <img src={topic.icon} alt=''/>
                        <p className='topic-subject' style={{color: topic.color}}>{topic.subject}</p>
                        <h4 className='topic-name'>{topic.name}</h4>
                        <img src={topic.button} className='topic-button' alt=''/>
                    </div>
                ))
                ) : (
                <h4>No topics found...</h4>
            )}
        </div>
    );
}

VideoLinks.propTypes = {
    topics: PropTypes.array.isRequired
};
  
export default VideoLinks;