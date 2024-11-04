import React from 'react';

const Card = ({ category, title, description, author, date, image }) => {
    return (
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <span className="category-tag">{category}</span>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="card-footer">
                    <div className="author">
                        <img src={author.avatar} alt={author.name} className="author-avatar" />
                        <span>{author.name}</span>
                    </div>
                    <span className="date">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
