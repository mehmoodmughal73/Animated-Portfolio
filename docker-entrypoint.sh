#!/bin/bash
set -e

# Function to wait for a service to be ready
wait_for_service() {
    local host="$1"
    local port="$2"
    local timeout="${3:-30}"
    
    echo "Waiting for $host:$port to be ready..."
    
    for i in $(seq 1 $timeout); do
        if nc -z "$host" "$port" > /dev/null 2>&1; then
            echo "$host:$port is ready!"
            return 0
        fi
        echo "Waiting... ($i/$timeout)"
        sleep 1
    done
    
    echo "Timeout waiting for $host:$port"
    return 1
}

# Install netcat if not present (for health checks)
if ! command -v nc &> /dev/null; then
    apk add --no-cache netcat-openbsd
fi

# Execute the main command
exec "$@"