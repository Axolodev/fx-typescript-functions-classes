import { TVShowInterface, TVShow, tvShowInitializerInterface, Genre, Status } from "../models/tvshow"
import tvShows from '../../tvShows.json';

const loadShows = () => {

    const tvShowsList = tvShows.map(tvShow => {

        let genre: Genre

        /**
         * I'm sure you already know this, but it's better not to use a switch + enum here. 
         * Using this combination makes it so we are forced to stick to these genres 
         * instead of being able to add new ones.
         */
        switch (tvShow.genre) {
            case "Crime":
                genre = Genre.Crime
                break;
            case "Fantasy":
                genre = Genre.Fantasy
                break;
            case "Comedy":
                genre = Genre.Comedy
                break;
            case "Sci-Fi":
                genre = Genre.SciFi
                break;
            case "Action":
                genre = Genre.Action
                break;
            default:
                genre = Genre.Action
                break;
        }

        let status: Status

        switch (tvShow.status) {
            case "Ongoing":
                status = Status.Ongoing
                break;
            case "Completed":
                status = Status.Completed
                break;
            case "Canceled":
                status = Status.Canceled
                break;
            default:
                status = Status.Canceled
                break;
        }

        const normalisedshow: tvShowInitializerInterface = {
            title: tvShow.title,
            genre,
            rating: tvShow.rating,
            status,
            airingDate: tvShow.airingDate
        }

        return new TVShow(normalisedshow)
    })

    return tvShowsList
}

export default loadShows