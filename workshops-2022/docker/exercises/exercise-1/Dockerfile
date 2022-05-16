# Create build stage based on buster image
FROM golang:1.18-alpine as builder
# Create working directory under /app
WORKDIR /app
# Copy over Go source code
COPY hello/. .
# Install any required modules
RUN go mod download
# Run the Go build and output binary under hello.
RUN go build -o /hello
# Make sure to expose the port the HTTP server is using
EXPOSE 8080
# Run the app binary when we run the container
ENTRYPOINT ["/hello"]