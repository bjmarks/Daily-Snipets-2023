install-brew(){
    echo 'We are now going to install homebrew, a package manager for OSX.'
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    if [[ "$(uname -m)" == "arm64" ]]; then
      echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> $HOME/.zprofile
      eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
}

install-xcode(){
    echo "We need to install some commandline tools for Xcode. When you press 'Enter', \n a dialog will pop up with several options. Click the 'Install' button and wait. \n Once the process completes, come back here and we will proceed with the next step."
    xcode-select --install 2>&1
    # wait for xcode...
    while sleep 1; do
        xcode-select --print-path >/dev/null 2>&1 && break
    done
    echo
}

install-python(){
  echo "install pyhon"
  brew install python3
}

install-code(){
  echo "install VS Code"
  brew install --cask visual-studio-code
}

setup() {
	echo 'We are going to check if xcode and brew are installed, and if you have python3 then to set it up.'
	echo '  - xcode tools  \n  - brew  \n  - python3 '
	echo
	xcode-select --print-path >/dev/null 2>&1 || install-xcode
	which brew >/dev/null 2>&1 || install-brew
  which python >/dev/null 2>&1 || install-python
  which code >/dev/null 2>&1 || install-code

}

setup