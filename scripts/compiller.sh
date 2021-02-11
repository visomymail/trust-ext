FILENAME="trust"
COMPILER_ROOT="Inno Setup 6/ISCC.exe"

# Build extension
cd ./../ && npm run build && cd ./scripts

# Move extension to setup folder
mv "./../build" "./../setup/files/extension"

# Install Python requirements
pip install requests
pip install colorama

# Convert .py to .exe
pyinstaller $FILENAME.py -F -n $FILENAME

# Move py.exe to setup folder
mv "./dist/$FILENAME.exe" "../setup/files"

# Remove compiled data
rm -rf dist __pycache__ build $FILENAME.spec

# Compile installer