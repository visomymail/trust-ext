PY_FILENAME="trust"
COMPILER_ROOT="Inno Setup 6/"

# Build extension
cd ./../ && npm run build && cd ./scripts

# Move extension to setup folder
mv "./../build" "./../setup/files/extension"

# Install Python requirements
pip install requests
pip install colorama

# Convert .py to .exe
pyinstaller ./../src/initiator/main.py -F -n $PY_FILENAME

# Move py.exe to setup folder
mv "./dist/$PY_FILENAME.exe" "../setup/files"

# Remove compiled data
rm -rf dist __pycache__ build $PY_FILENAME.spec

# Compile installer