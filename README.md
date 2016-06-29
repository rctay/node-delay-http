# node-delay-http

HTTP server that responds slowly.

## Example

    $ npm start
    $ curl localhost:3000

## Usage

```
Usage: index.js [options]

Options:
  -f, --frequency  number of times to repeat message      [number] [default: 10]
  --period         duration between each repeat (in milliseconds)
                                                        [number] [default: 1000]
  --message, -m    message to be repeatedly sent in the response [default: "hi"]
  -h, --help       Show help                                           [boolean]
  -p, --port                                            [number] [default: 3000]
  --host                                                        [default: "::1"]
```

