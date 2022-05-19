import React from "react";

const imgPath = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 9) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
};

function Movie({ title, poster_path, overview, vote_average }) {
    return (
        <div>
            <div className="movie">
                <img
                    src={
                        poster_path
                            ? imgPath + poster_path
                            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159"
                    }
                    alt={title}
                />
                <div className="movie-title">
                    <h3>{title}</h3>
                    <span className={setVoteClass(vote_average)}>{vote_average}</span>
                    <div className="overview">
                        <h3>overview:</h3>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;
