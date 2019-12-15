# Node WOL IFTTT
A very small script for IFTTT to interact with NodeJS (and run magic packets)

# CONFIGURATION

Just make an applet with the "This" you want an in the "That", just take a "Webhook".
In the URl field, just type http://ipofyourserver:nodeport/index.js?action=wol
In the "Method" field, select "GET", and leave the others empty

After that, you can run the NodeJS (don't forget to install the package node-wol (npm install node-wol) on your server in a "screen" if you are on Linux.
You can modify the code to do what you want
