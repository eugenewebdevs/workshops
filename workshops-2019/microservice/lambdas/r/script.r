library(httr)

handler <- function() {
        r <- GET("hhttps://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json")
        return(content(r, "text"))
}
