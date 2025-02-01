# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js applications where the server fails to start because the specified port is already in use.

The `server.js` file contains the buggy code, and `serverSolution.js` provides a solution to handle this situation gracefully.

## Problem

When running the `server.js` file, if port 3000 is already occupied (e.g., by another instance of the server or a different application), the server will fail to start. The error message is often not very clear and can be difficult to debug.

## Solution

The `serverSolution.js` file provides a robust solution using `server.on('error', ...)` to handle the `EADDRINUSE` error. This allows the server to attempt to listen on a different port or exit gracefully with a more informative message.