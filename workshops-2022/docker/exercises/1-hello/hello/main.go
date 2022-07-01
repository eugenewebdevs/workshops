package main;
import (
    "fmt"
    "log"
    "net/http"
)
func main() {
    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "Hello, Eugene Web Devs!\n\nYour ad here! Is your company recruiting? Sponser pizza and get a mention.")
    })

    fmt.Printf("Server running (port=8080), route: http://localhost:8080/hello\n")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}
