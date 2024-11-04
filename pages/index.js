import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const featuredPosts = [
    {
        category: "PHOTOGRAPHY",
        title: "The Road Ahead",
        description: "The road ahead might be paved - it might not be.",
        author: {
            name: "Mat Vogels",
            avatar: "/mat-vogels.jpg"
        },
        date: "September 25, 2015",
        image: "/road-ahead.jpg"
    },
    {
        category: "ADVENTURE",
        title: "From Top Down",
        description: "Once a year, go someplace you've never been before.",
        author: {
            name: "William Wong",
            avatar: "/william-wong.jpg"
        },
        date: "September 25, 2015",
        image: "/top-down.jpg"
    }
];

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="featured-posts">
                    <h2>Featured Posts</h2>
                    <div className="posts-grid">
                        {featuredPosts.map((post, index) => (
                            <Card key={index} {...post} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
