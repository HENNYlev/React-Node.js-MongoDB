const jFaile = require("jsonfile")
const path = require("path")
const jsonFaile = path.join(__dirname, "/../shows.json")
const moviesModel=require('./moviesModel');
const getAllMoviesFromJson = () => {
    return new Promise((res, rej) => {
        jFaile.readFile(jsonFaile, (err, data) => {
            if (err) {
                rej(err)
            }
            else {
                res(data)
                data.forEach(moovie => {
                    const finalMoovie = new moviesModel({
                        name: moovie.name,
                        premiered: moovie.premiered,
                        genres: moovie.genres,
                        image:moovie.image.medium
                    })
                    finalMoovie.save(err => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("Success")
                        }
                    })
                })
            }
        })
    })
}

const getAllMovies = () => {
    console.log("movies");
    return new Promise((resolve, reject) => {
        moviesModel.find({}, (err, movies) => {
            if (err) {
                reject(err)
            } else {
                resolve(movies)
            }
        })
    })
}
const getMovieById=(id)=>{
    return new Promise((resolve,reject)=>{
        try{
            const movie=moviesModel.findOne({"_id":id})
            console.log(movie);
            resolve(movie)
            return movie;
        }catch(err){
            reject(err);
        }
    })
}
const createMovie = async (movie) => {
    return new Promise((resolve,reject)=>{
       const newMovie=new moviesModel({
        name:movie.name,
        premiered:movie.premiered,
        genres: movie.genres.split(','),
        image:movie.image
       })
       newMovie.save((err)=>{
           if(err){
               reject(err)
           }
           else{
               resolve("create movie")
           }
       })
    })
   }
   const updateMovie = (id, movie) => {
    return new Promise((resolve, reject) => {
        moviesModel.findByIdAndUpdate(id, movie, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Updated")
            }
        })
    })
}
const deleteMovie=(id)=>{
    return new Promise((resolve,reject)=>{
        moviesModel.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("deleted")
            }
        })
    })
}
module.exports={getAllMoviesFromJson,getAllMovies,createMovie,getMovieById,updateMovie,deleteMovie}