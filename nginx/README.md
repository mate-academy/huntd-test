# Local NGINX
**Note**: SSL certificate setup is not required for the test assignment.

The project can be accessed directly via:
- Frontend: http://localhost:3000
- API: http://localhost:4000

SSL certificates can be placed in ./local-ssl if needed for advanced configurations.

## Add local.huntd.tech to /etc/hosts

- edit `hosts` file

  - **MacOS / Linux**

    open `/etc/hosts` for editing

    **note:** vi is a text editor, you can use any other
      ```bash
      sudo vi /etc/hosts
      ```
  - **Windows**

    open `C:\Windows\System32\drivers\etc\hosts` in text editor

- add `local.huntd.tech` near `127.0.0.1`.
    ```
    127.0.0.1       localhost
    127.0.0.1       localunixsocket.local
    127.0.0.1       local.huntd.tech
    ```

## Add certificate to trusted
- Download certificate from the https://local.huntd.tech page [learn how](https://medium.com/@menakajain/export-download-ssl-certificate-from-server-site-url-bcfc41ea46a2)
- Add certificate to trusted
    - [MacOS](https://tosbourn.com/getting-os-x-to-trust-self-signed-ssl-certificates/)
    - [Windows](https://community.spiceworks.com/how_to/1839-installing-self-signed-ca-certificate-in-windows)
