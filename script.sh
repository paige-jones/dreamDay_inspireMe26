#!/bin/bash

# Define the directory name and colors
SOURCE_DIR="inspireMe_studentBase"
COLORS=("Blue" "Purple" "Yellow" "Pink" "Green")

# Get the path to the MacOS Desktop
DESKTOP_PATH="$HOME/Desktop"

# Check if the source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: Source directory '$SOURCE_DIR' does not exist."
  exit 1
fi

# Copy the directory and rename it for each color
for COLOR in "${COLORS[@]}"; do
  TARGET_DIR="${DESKTOP_PATH}/${COLOR}"
  cp -r "$SOURCE_DIR" "$TARGET_DIR"
  echo "Copied and renamed '$SOURCE_DIR' to '$TARGET_DIR'."
done

# Delete all files and folders in the current directory except the script itself
SCRIPT_NAME=$(basename "$0")
for ITEM in *; do
  if [ "$ITEM" != "$SCRIPT_NAME" ]; then
    rm -rf "$ITEM"
    echo "Deleted '$ITEM'."
  fi
done

echo "Task completed successfully!" 
