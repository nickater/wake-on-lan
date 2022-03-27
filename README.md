
# Wake on LAN API

This JS node application is configured to listen for GET api calls and fire off a magic packet to a specific MAC address.

## Environment Variables

To run this project, you will need to set the following environment variables. 
#### NOTE: Any environment variable key set with `WOL_` prepended, will have its value used as a MAC address. Example:

`WOL_JohnDesktop=45:GH:32:G6:5G:Q0` will send a magic packet to the given mac address when `<hostname>:3001/johndesktop` is hit with a GET request.

`WOL_PORT` will set a custom port other than the default 3001



