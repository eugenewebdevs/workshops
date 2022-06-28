# Bring in go
FROM golang:1.18-alpine
# Create working directory under /app
WORKDIR /app
# Simpley COPY over Go source code. NOT the same as ADD. 
# ADD has  features like extracting TAR files and fetching files from remote URLs
COPY hello/. .
# Install any required modules
RUN go mod download
# Run the Go build and output binary under hello.
RUN go build -o /hello
# Make sure to expose the port the HTTP server is using
EXPOSE 8080
# Run the app binary when we run the container
ENTRYPOINT ["/hello"]