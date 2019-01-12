library(httr)

handler <- function() {
        r <- GET("https://api.themoviedb.org/3/discover/movie?api_key=372f168ae29875f30eb9f0cda74358c1")
        return(content(r, "text"))
}
